#!/usr/bin/env node
const { program } = require("commander");
const git = require("simple-git");
const helperFunctions = require("./src/helperFunctions");
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

git(path)
  .tag()
  .then((res) => {
    const tags = res.split("\n");
    let correctTags = [];
    let flag = false;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === versionFrom) flag = true;
      if (flag) correctTags.push(tags[i]);
      if (tags[i] === versionTo) flag = false;
    }

    for (let i = correctTags.length - 1; i > 0; i--) {
      const from = correctTags[i];
      const to = correctTags[i - 1];
      console.log(from, to);
    }
  });
