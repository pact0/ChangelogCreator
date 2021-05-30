## CHANGELOG

The script creates a new file with a provided name (or default CHANGELOG.md) which contains a changelog of commits between specified versions.

To run the script you need to specify

- path to a local directory `-p` or `--path`
- version from which you want to start your changelog `-vf` or `--versionFrom`
- version on which you want to end your changelog `-vt` or `--versionTo`

You can also provide additional arguments

- name of the file `-f` or `--file`
- special flag which allows to print all commits that do not follow the convention `-n` or `--non_standard`

Also a `-help` command is available and it provides all the necessary information

example

```shell
./index.js -p /home/pacto/Documents/dev/ckeditor5 -vf v24.0.0 -vt v27.0.0
```

```shell
./index.js -p /home/pacto/Documents/dev/ckeditor5 -vf v24.0.0 -vt v27.0.0 -f changelog.md -n true
```

## Assumptions

- only the commit messages which follow the naming convention are in the changelog
- includes commits with and withut package names in them
- script checks the correctness of input
- each date next to a version is the current date when the script runs
- my OS of choice is linux

I have decided that when being able to specify the range of versions that I want to create the changelog from I would rather overwrite the whole file instead of filtering the existing one and appending.

### Disclaimer
This is by no means any sort of official too. It is based on ckeditor5 commits and their naming rules.

# Example file
```
Changelog
=========

## [26.0.0](https://github.com/ckeditor/ckeditor5/compare/v25.0.0...v26.0.0) (2021-05-30)

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* On macOS keystrokes with the <kbd>Ctrl</kbd> modifier will not be handled unless the modifier is registered as the forced one (for example
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac).
* The package has been merged into `@ckeditor/ckeditor5-cloud-services`. All classes that were available in the `@ckeditor/ckeditor-cloud-services-core` package have been moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin that's located in `@ckeditor/ckeditor5-cloud-services`. See [#8811]https://github.com/ckeditor/ckeditor5/issues/8811.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The following modules have been moved (before → after)
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The following module `list/todolistcheckedcommand~TodoListCheckCommand` has been moved to `list/checktodolistcommand~CheckTodoListCommand`.
* Enabled creating builds that can be extended (with more plugins) without the need to being recompiled. This required splitting the project into the, so-called, DLL part and consumers of this DLL. Under the hood, the mechanism is based on [webpack DLLs](https
* Several plugins are not anymore loaded automatically as dependencies of other plugins. From now on, they need to be provided to the editor creator manually (via `config.plugins`). This list includes

### Features

* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added forced modifier key (`Ctrl!`) for keystrokes that should not be mapped to <kbd>Command</kbd> on macOS. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* Created the `CloudServicesCore` plugin that exposes the base API for communication with CKEditor Cloud Services. ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Plugin collection will allow to require plugin by name when it is provided in `config.plugins` or if it was already loaded. Closes [[#2907]https://github.com/ckeditor/ckeditor5/issues/2907](https ([commit](https://github.com/ckeditor/ckeditor5/commit/b278fde89d1eb635be7e4e3a57d8dba2bd0f98a6))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `ContainerElement` can be marked as `isAllowedInsideAttributeElement` in order to allow wrapping it with attribute elements. Useful for instance for inline widgets. Other element types (UI, Raw, Empty) have this flag on by default but it can be changed via `options.isAllowedInsideAttributeElement` to `false`. Read more in `DowncastWriter#create*()` methods documentation. Closes #1633. ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Add `<font>` styling compatibility. Closes [#8621]https://github.com/ckeditor/ckeditor5/issues/8621. ([commit](https://github.com/ckeditor/ckeditor5/commit/0545fe6515f5454f7c7961ee2415c23366e2da08))

### Bug fixes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added support in the `PluginCollection` to load dependency plugins using soft requirement, if they are not built-in, but they are available further as dependencies of other plugins. See [#8634]https://github.com/ckeditor/ckeditor5/issues/8634. ([commit](https://github.com/ckeditor/ckeditor5/commit/3dcd605e7f02671a2e7c6b6f0725978eb8f90aca))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `DowncastWriter` should handle `UIElements` consistently while wrapping with and inserting them into attribute elements. Closes [#8959]https://github.com/ckeditor/ckeditor5/issues/8959. ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Words should not break on link boundaries. Closes [#8852]https://github.com/ckeditor/ckeditor5/issues/8852. ([commit](https://github.com/ckeditor/ckeditor5/commit/b67732d66525a814a591c6b185acbfb3b54c3792))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Undoing the deletion of merged paragraphs should result in the original tree. Closes [#8976]https://github.com/ckeditor/ckeditor5/issues/8976. ([commit](https://github.com/ckeditor/ckeditor5/commit/ecba70b44a0185bf5193da7bd77907bd981da74d))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Pasting formatted single-line text over a widget should not split it into multiple paragraphs. Closes [#8953]https://github.com/ckeditor/ckeditor5/issues/8953. ([commit](https://github.com/ckeditor/ckeditor5/commit/dfe803553789de8b162b0dd7fbfac4c419a9b806))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor placeholder should not disappear until started typing. Closes [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed content not restored on undo when multiple blocks and widgets were removed. Closes [#8870]https://github.com/ckeditor/ckeditor5/issues/8870. ([commit](https://github.com/ckeditor/ckeditor5/commit/385234a66ae0168bc57a36d7ec9f1e8f759e0b69))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Fixed the `supportAllValues` configuration for the `FontSize` and `FontFamily` features to work with nested elements (tables). Closes [#7965]https://github.com/ckeditor/ckeditor5/issues/7965. ([commit](https://github.com/ckeditor/ckeditor5/commit/768466c6e0e18b0f4c2230b1f66a2defb2496c50))
* **[heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading)**: In the title plugin, the body placeholder is visible even when the body section is focused. See [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Image caption placeholder is now hidden when focused. See [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Autolink will no longer automatically match domains that only have a `www` subdomain followed with a top level domain, e.g. `http ([commit](https://github.com/ckeditor/ckeditor5/commit/2165447015f688b864a29e50a543e2411ecc9e11))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: IP addresses should be converted into links while typing by the Autolink feature. Closes [#8881]https://github.com/ckeditor/ckeditor5/issues/8881. ([commit](https://github.com/ckeditor/ckeditor5/commit/5b85b86160d991f24f5ff46700e1ea90703c40bd))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Editor should not crash while downcasting in the data pipeline if any cell does not contain at least an empty paragraph. Closes [#8941]https://github.com/ckeditor/ckeditor5/issues/8941. Closes #8917. Closes #8979. ([commit](https://github.com/ckeditor/ckeditor5/commit/11a0c381e7a98d21497749236bd3fcc87f7e24fa))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `insertTable` command should be disabled if any object is selected. Closes [#8798]https://github.com/ckeditor/ckeditor5/issues/8798. ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The keystrokes are no longer conflicting on macOS. Closes [#5705]https://github.com/ckeditor/ckeditor5/issues/5705. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* The `insertMediaEmbed` command should be disabled if any non-media object is selected (see [#8798]https://github.com/ckeditor/ckeditor5/issues/8798). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `KeyObserver` should provide information about `metaKey` being pressed. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac). ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* All classes available in the `@ckeditor/ckeditor-cloud-services-core` package have been moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin. Closes [#8811]https://github.com/ckeditor/ckeditor5/issues/8811. ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Improvements and simplifications in the `PluginCollection` logic. Closes [#8634]https://github.com/ckeditor/ckeditor5/issues/8634. ([commit](https://github.com/ckeditor/ckeditor5/commit/3dcd605e7f02671a2e7c6b6f0725978eb8f90aca))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Add WEBP support to the inline pasting of images from source URLs. ([commit](https://github.com/ckeditor/ckeditor5/commit/48ad51d61e10473bab106c17d83b6e05188cd915))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The `checkSelectionOnObject` function should be exported by the `@ckeditor/ckeditor5-widget/src/utils package` (see [#8798]https://github.com/ckeditor/ckeditor5/issues/8798). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))

```
Changelog
=========

## [26.0.0](https://github.com/ckeditor/ckeditor5/compare/v25.0.0...v26.0.0) (2021-05-30)

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* On macOS keystrokes with the <kbd>Ctrl</kbd> modifier will not be handled unless the modifier is registered as the forced one (for example
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac).
* The package has been merged into `@ckeditor/ckeditor5-cloud-services`. All classes that were available in the `@ckeditor/ckeditor-cloud-services-core` package have been moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin that's located in `@ckeditor/ckeditor5-cloud-services`. See [#8811]https://github.com/ckeditor/ckeditor5/issues/8811.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The following modules have been moved (before → after)
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The following module `list/todolistcheckedcommand~TodoListCheckCommand` has been moved to `list/checktodolistcommand~CheckTodoListCommand`.
* Enabled creating builds that can be extended (with more plugins) without the need to being recompiled. This required splitting the project into the, so-called, DLL part and consumers of this DLL. Under the hood, the mechanism is based on [webpack DLLs](https
* Several plugins are not anymore loaded automatically as dependencies of other plugins. From now on, they need to be provided to the editor creator manually (via `config.plugins`). This list includes

### Features

* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added forced modifier key (`Ctrl!`) for keystrokes that should not be mapped to <kbd>Command</kbd> on macOS. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* Created the `CloudServicesCore` plugin that exposes the base API for communication with CKEditor Cloud Services. ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Plugin collection will allow to require plugin by name when it is provided in `config.plugins` or if it was already loaded. Closes [[#2907]https://github.com/ckeditor/ckeditor5/issues/2907](https ([commit](https://github.com/ckeditor/ckeditor5/commit/b278fde89d1eb635be7e4e3a57d8dba2bd0f98a6))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `ContainerElement` can be marked as `isAllowedInsideAttributeElement` in order to allow wrapping it with attribute elements. Useful for instance for inline widgets. Other element types (UI, Raw, Empty) have this flag on by default but it can be changed via `options.isAllowedInsideAttributeElement` to `false`. Read more in `DowncastWriter#create*()` methods documentation. Closes #1633. ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Add `<font>` styling compatibility. Closes [#8621]https://github.com/ckeditor/ckeditor5/issues/8621. ([commit](https://github.com/ckeditor/ckeditor5/commit/0545fe6515f5454f7c7961ee2415c23366e2da08))

### Bug fixes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added support in the `PluginCollection` to load dependency plugins using soft requirement, if they are not built-in, but they are available further as dependencies of other plugins. See [#8634]https://github.com/ckeditor/ckeditor5/issues/8634. ([commit](https://github.com/ckeditor/ckeditor5/commit/3dcd605e7f02671a2e7c6b6f0725978eb8f90aca))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `DowncastWriter` should handle `UIElements` consistently while wrapping with and inserting them into attribute elements. Closes [#8959]https://github.com/ckeditor/ckeditor5/issues/8959. ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Words should not break on link boundaries. Closes [#8852]https://github.com/ckeditor/ckeditor5/issues/8852. ([commit](https://github.com/ckeditor/ckeditor5/commit/b67732d66525a814a591c6b185acbfb3b54c3792))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Undoing the deletion of merged paragraphs should result in the original tree. Closes [#8976]https://github.com/ckeditor/ckeditor5/issues/8976. ([commit](https://github.com/ckeditor/ckeditor5/commit/ecba70b44a0185bf5193da7bd77907bd981da74d))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Pasting formatted single-line text over a widget should not split it into multiple paragraphs. Closes [#8953]https://github.com/ckeditor/ckeditor5/issues/8953. ([commit](https://github.com/ckeditor/ckeditor5/commit/dfe803553789de8b162b0dd7fbfac4c419a9b806))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor placeholder should not disappear until started typing. Closes [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed content not restored on undo when multiple blocks and widgets were removed. Closes [#8870]https://github.com/ckeditor/ckeditor5/issues/8870. ([commit](https://github.com/ckeditor/ckeditor5/commit/385234a66ae0168bc57a36d7ec9f1e8f759e0b69))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Fixed the `supportAllValues` configuration for the `FontSize` and `FontFamily` features to work with nested elements (tables). Closes [#7965]https://github.com/ckeditor/ckeditor5/issues/7965. ([commit](https://github.com/ckeditor/ckeditor5/commit/768466c6e0e18b0f4c2230b1f66a2defb2496c50))
* **[heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading)**: In the title plugin, the body placeholder is visible even when the body section is focused. See [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Image caption placeholder is now hidden when focused. See [#8689]https://github.com/ckeditor/ckeditor5/issues/8689. ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Autolink will no longer automatically match domains that only have a `www` subdomain followed with a top level domain, e.g. `http ([commit](https://github.com/ckeditor/ckeditor5/commit/2165447015f688b864a29e50a543e2411ecc9e11))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: IP addresses should be converted into links while typing by the Autolink feature. Closes [#8881]https://github.com/ckeditor/ckeditor5/issues/8881. ([commit](https://github.com/ckeditor/ckeditor5/commit/5b85b86160d991f24f5ff46700e1ea90703c40bd))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Editor should not crash while downcasting in the data pipeline if any cell does not contain at least an empty paragraph. Closes [#8941]https://github.com/ckeditor/ckeditor5/issues/8941. Closes #8917. Closes #8979. ([commit](https://github.com/ckeditor/ckeditor5/commit/11a0c381e7a98d21497749236bd3fcc87f7e24fa))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `insertTable` command should be disabled if any object is selected. Closes [#8798]https://github.com/ckeditor/ckeditor5/issues/8798. ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The keystrokes are no longer conflicting on macOS. Closes [#5705]https://github.com/ckeditor/ckeditor5/issues/5705. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* The `insertMediaEmbed` command should be disabled if any non-media object is selected (see [#8798]https://github.com/ckeditor/ckeditor5/issues/8798). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `KeyObserver` should provide information about `metaKey` being pressed. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac). ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* All classes available in the `@ckeditor/ckeditor-cloud-services-core` package have been moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin. Closes [#8811]https://github.com/ckeditor/ckeditor5/issues/8811. ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Improvements and simplifications in the `PluginCollection` logic. Closes [#8634]https://github.com/ckeditor/ckeditor5/issues/8634. ([commit](https://github.com/ckeditor/ckeditor5/commit/3dcd605e7f02671a2e7c6b6f0725978eb8f90aca))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Add WEBP support to the inline pasting of images from source URLs. ([commit](https://github.com/ckeditor/ckeditor5/commit/48ad51d61e10473bab106c17d83b6e05188cd915))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The `checkSelectionOnObject` function should be exported by the `@ckeditor/ckeditor5-widget/src/utils package` (see [#8798]https://github.com/ckeditor/ckeditor5/issues/8798). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
