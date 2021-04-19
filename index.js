#!/usr/bin/env node
const { program } = require("commander");

function errorColor(str) {
  return `\x1b[31m${str}\x1b[0m`;
}
program
  .requiredOption("-p,--path <path>", "path to a direvtory")
  .requiredOption(
    "-vf,--versionFrom <versionFrom>",
    "begginign version of changelog"
  )
  .requiredOption("-vt,--versionTo  <versionTo>", "endversion of changelog")
  .configureOutput({
    writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
    writeErr: (str) =>
      process.stdout.write(
        `[ERR] ${str}\ntype -h or --help for more information.\n`
      ),
    outputError: (str, write) => write(errorColor(str)),
  })
  .helpOption("-h, --help", "use to get description of all ")
  .parse();

const options = program.opts();
const path = options.path;
const versionFrom = options.versionFrom;
const versionTo = options.versionTo;
console.log(path, versionFrom, versionTo);
