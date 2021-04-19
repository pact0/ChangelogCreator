let fs = require("fs");
function isDir(path) {
  try {
    let stat = fs.lstatSync(path);
    if (stat.isDirectory()) {
      return path;
    }
  } catch (e) {
    throw new Error("Incorrect path to dirrectory");
  }
}

function isVersion(version) {
  if (version.match(/v\d+.\d+.\d+-*\w*/)) {
    return version;
  } else {
    throw new Error("Please provide a correct version number");
  }
}

function isMarkdown(file) {
  if (file.match(/\w*.md/)) {
    return file;
  } else {
    throw new Error("Please provide a correct file name ending with .md");
  }
}

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

module.exports = {
  isDir,
  isVersion,
  isMarkdown,
  compare,
};
