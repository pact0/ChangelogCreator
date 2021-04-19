#!/usr/bin/env node
const { program } = require("commander");

const helperFunctions = require("./src/helperFunctions");
const commitManipulation = require("./src/commitManipulation");

program
  .option("-f,--file <file>", "output file name", helperFunctions.isMarkdown)
  .option(
    "-n,--non_standard <non_standard>",
    "console log commits which do not follow convention"
  )
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
const non_standard = options.non_standard === undefined ? false : true;
const path = options.path;
const versionFrom = options.versionFrom;
const versionTo = options.versionTo;
const file = options.file === undefined ? "CHANGELOG.md" : options.file;

commitManipulation.createCompleteChangelog(
  path,
  versionFrom,
  versionTo,
  file,
  non_standard
);
