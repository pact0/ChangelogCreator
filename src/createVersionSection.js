const fs = require("fs");
const helper = require("../src/helperFunctions");

function appendBreakingChangesSection(x) {
  const message = x.message.replace(
    `#${x.digits}`,
    `[#${x.digits}]https://github.com/ckeditor/ckeditor5/issues/${x.digits}`
  );
  if (x.package !== undefined) {
    return `* **[${x.package}](https://www.npmjs.com/package/@ckeditor/ckeditor5-${x.package})**: ${message}\n`;
  } else {
    return `* ${message}\n`;
  }
}
function appendSection(x) {
  const message = x.digits
    ? x.message.replace(
        `#${x.digits}`,
        `[#${x.digits}]https://github.com/ckeditor/ckeditor5/issues/${x.digits}`
      )
    : x.message;

  if (x.package !== undefined) {
    return `* **[${x.package}](https://www.npmjs.com/package/@ckeditor/ckeditor5-${x.package})**: ${message} ([commit](https://github.com/ckeditor/ckeditor5/commit/${x.hash}))\n`;
  } else {
    return `* ${message} ([commit](https://github.com/ckeditor/ckeditor5/commit/${x.hash}))\n`;
  }
}

function createMajorBreakingChangesSection(changes) {
  if (changes.length === 0) return "";
  let section = `\n### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)\n\n`;
  changes.forEach((x) => (section += appendBreakingChangesSection(x)));
  return section;
}

function createMinorBreakingChangesSection(changes) {
  if (changes.length === 0) return "";
  let section = `\n### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)\n\n`;
  changes.forEach((x) => (section += appendBreakingChangesSection(x)));
  return section;
}

function createFeaturesSection(changes) {
  if (changes.length === 0) return "";
  let section = `\n### Features\n\n`;
  changes.forEach((x) => (section += appendSection(x)));
  return section;
}

function createFixSection(changes) {
  if (changes.length === 0) return "";
  let section = `\n### Bug fixes\n\n`;
  changes.forEach((x) => (section += appendSection(x)));
  return section;
}

function createOtherSection(changes) {
  if (changes.length === 0) return "";
  let section = `\n### Other changes\n\n`;
  changes.forEach((x) => (section += appendSection(x)));
  return section;
}

async function createVersionSection(
  versionFrom,
  versionTo,
  comimtMessages,
  file_name,
  addHeader
) {
  // adding current date to all section headers as discussed in the email
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  date = yyyy + "-" + mm + "-" + dd;
  const header = addHeader === true ? `Changelog\n=========\n` : "";
  let CHANGELOG =
    header +
    `\n## [${versionTo.slice(
      1
    )}](https://github.com/ckeditor/ckeditor5/compare/${versionFrom}...${versionTo}) (${date})\n`;
  CHANGELOG +=
    createMajorBreakingChangesSection(
      comimtMessages.majorBreakingChanges.sort((a, b) =>
        helper.compare(a.package, b.package)
      )
    ) +
    createMinorBreakingChangesSection(
      comimtMessages.minorBreakingChanges.sort((a, b) =>
        helper.compare(a.package, b.package)
      )
    ) +
    createFeaturesSection(
      comimtMessages.feature.sort((a, b) =>
        helper.compare(a.package, b.package)
      )
    ) +
    createFixSection(
      comimtMessages.fix.sort((a, b) => helper.compare(a.package, b.package))
    ) +
    createOtherSection(
      comimtMessages.other.sort((a, b) => helper.compare(a.package, b.package))
    );

  fs.appendFileSync(file_name, CHANGELOG, (err) => {
    if (err) {
      throw err;
    }
    console.log("File is updated.");
  });
}

module.exports = {
  createVersionSection: createVersionSection,
  appendSection: appendSection,
};
