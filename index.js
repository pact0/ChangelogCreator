#!/usr/bin/env node
const { program } = require("commander");
const git = require("simple-git");

const helperFunctions = require("./src/helperFunctions");
const createVersionSection = require("./src/createVersionSection");

program
  .option("-f,--file <file>", "output file name", helperFunctions.isMarkdown)
  .requiredOption(
    "-p,--path <path>",
    "path to a directory",
    helperFunctions.isDir
  )
  .requiredOption(
    "-vf,--versionFrom <versionFrom>",
    "begginign version of changelog",
    helperFunctions.isVersion
  )
  .requiredOption(
    "-vt,--versionTo  <versionTo>",
    "end version of changelog",
    helperFunctions.isVersion
  )
  .configureOutput({
    writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
    writeErr: (str) =>
      process.stdout.write(
        `[ERR] ${str}\ntype -h or --help for more information.\n`
      ),
    outputError: (str, write) => write(`\x1b[31m${str}\x1b[0m`),
  })
  .helpOption("-h, --help", "use to get description of all ")
  .parse();

const options = program.opts();
const path = options.path;
const versionFrom = options.versionFrom;
const versionTo = options.versionTo;
const file = options.file === undefined ? "CHANGELOG.md" : options.file;

function filterCommitResponse(response) {
  let other = [];
  let fix = [];
  let feature = [];
  let majorBreakingChanges = [];
  let incorrect = [];

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

      if (x.match(/BREAKING CHANGE/)) {
        majorBreakingChanges.push({
          ...record,
          message: right,
          type: "BREAKING CHANGE",
        });
      }

      if (x.match(/^Other /)) {
        other.push({ ...record, message: right, type: "Other" });
      } else if (x.match(/^Feature /)) {
        feature.push({ ...record, message: right, type: "Feature" });
      } else if (x.match(/^Fix /)) {
        fix.push({ ...record, message: right, type: "Fix" });
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
        incorrect.push(record);
      }
    });
  });
  return {
    other: other,
    fix: fix,
    feature: feature,
    majorBreakingChanges: majorBreakingChanges,
    incorrect: incorrect,
  };
}

async function getCommits(path, from, to, file_name) {
  await git(path)
    .log({ from: from, to: to, symmetric: false })
    .then(async (response) => {
      let comimtMessages = filterCommitResponse(response);

      await createVersionSection.createVersionSection(
        from,
        to,
        comimtMessages,
        file_name
      );
    });
}

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

    for (let index = correctTags.length - 1; index > 0; index--)
      await getCommits(path, correctTags[index - 1], correctTags[index], file);
  });
