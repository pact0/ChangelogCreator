const createVersionSection = require("./createVersionSection");
const fs = require("fs");
const git = require("simple-git");

function filterCommitResponse(response) {
  let commits = {
    other: [],
    fix: [],
    feature: [],
    majorBreakingChanges: [],
    minorBreakingChanges: [],
    incorrect: [],
  };
  response.all.forEach((commit) => {
    if (!commit.body) return;

    commit.body.split("\r\n").forEach((x) => {
      if (!x) return;

      let [left, right] = x.split(":");
      right = right ? right.trim() : "";

      package = left.match(/(\(\w*\))/)
        ? left.match(/(\(\w*\))/)[1].slice(1, -1)
        : undefined;

      let hashtagSection = right.match(/(#\d*)/)
        ? right.match(/(#\d*)/)[1].slice(1)
        : undefined;

      let record = {
        message: x,
        hash: commit.hash,
        package: package,
        digits: hashtagSection,
      };
      if (x.match(/MINOR BREAKING CHANGE/)) {
        commits.minorBreakingChanges.push({
          ...record,
          message: right,
          type: "MINOR BREAKING CHANGE",
        });
      } else if (x.match(/BREAKING CHANGE/)) {
        commits.majorBreakingChanges.push({
          ...record,
          message: right,
          type: "MAJOR BREAKING CHANGE",
        });
      }

      if (x.match(/^Other /)) {
        commits.other.push({ ...record, message: right, type: "Other" });
      } else if (x.match(/^Feature /)) {
        commits.feature.push({ ...record, message: right, type: "Feature" });
      } else if (x.match(/^Fix /)) {
        commits.fix.push({ ...record, message: right, type: "Fix" });
      } else if (
        x.match(/^Docs /) ||
        x.match(/^Internal /) ||
        x.match(/^Tests /) ||
        x.match(/^Revert /) ||
        x.match(/^Release /)
      ) {
      } else {
        // here all the commits that do not match the specified convention
        // are pushed into incorrect array and later they will be displayed in console
        if (right) commits.incorrect.push({ ...record, message: right });
      }
    });
  });
  return commits;
}

async function getCommits(path, from, to, file_name, addHeader, non_standard) {
  await git(path)
    .log({ from: from, to: to, symmetric: false })
    .then(async (response) => {
      let comimtMessages = filterCommitResponse(response);
      await createVersionSection.createVersionSection(
        from,
        to,
        comimtMessages,
        file_name,
        addHeader
      );
      if (non_standard === true) {
        comimtMessages.incorrect.forEach((x) => {
          console.log(`${x.hash}    ${x.message}`);
        });
      }
    });
}
function createCompleteChangelog(
  path,
  versionFrom,
  versionTo,
  file,
  non_standard
) {
  git(path)
    .tag()
    .then(async (res) => {
      const tags = res.split("\n");
      let correctTags = [];
      let flag = false;
      for (let i = 0; i < tags.length; i++) {
        if (tags[i] === versionFrom) flag = true;
        if (flag) correctTags.push(tags[i]);
        if (tags[i] === versionTo) flag = false;
      }

      fs.writeFileSync(file, "");
      let headerFlag = true;
      for (let index = correctTags.length - 1; index > 0; index--) {
        await getCommits(
          path,
          correctTags[index - 1],
          correctTags[index],
          file,
          headerFlag,
          non_standard
        );
        headerFlag = false;
      }
    });
}

module.exports = {
  getCommits: getCommits,
  filterCommitResponse: filterCommitResponse,
  createCompleteChangelog: createCompleteChangelog,
};
