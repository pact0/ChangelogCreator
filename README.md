## CHANGELOG

The script creates a new file with a privided name (or default CHANGELOG.md) which contains a changelog of commits between specified versions.

To run the script you need to specify

- path to a local directory `-p` or `--path`
- version from which you want to start your changelog `-vf` or `--versionFrom`
- version on which you want to end your changelog `-vt` or `--versionTo`

You can also provide additional arguments

- name of the file `-f` or `--file`
- special flag which allows to print all commits that do not follow the convention `-n` or `--non_standard`

example

```shell
./index.js -p /home/pacto/Documents/dev/ckeditor5 -vf v24.0.0 -vt v27.0.0
```

```shell
./index.js -p /home/pacto/Documents/dev/ckeditor5 -vf v24.0.0 -vt v27.0.0 -f changelog.md -n true
```

## Assumptions

- only the commit messages which follow the naming convention are in the changelog
- includes commits with and withut package name in them
- script checks the correctness of input
- each date next to a version is the current date when the script is ran as agreed upon in emails
- my OS of choice is linux

I have decided that when being able to specify the range of versions that I want to create the changelog from I would rather overwrite the whole file instead of filtering the existing one and appending.
