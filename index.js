#!/usr/bin/env node
const { program } = require("commander");
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
  if (version.match(/v\d+.\d+.\d+/)) {
    return version;
  } else {
    throw new Error("Please provide a correct version number");
  }
}
program
  .requiredOption("-p,--path <path>", "path to a directory", isDir)
  .requiredOption(
    "-vf,--versionFrom <versionFrom>",
    "begginign version of changelog",
    isVersion
  )
  .requiredOption(
    "-vt,--versionTo  <versionTo>",
    "endversion of changelog",
    isVersion
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
console.log(path, versionFrom, versionTo);
