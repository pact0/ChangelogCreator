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

### Disclaimer
This is by no means any sort of official too. It is based on ckeditor5 commits and their naming rules.

# Example file
```
# Changelog

## [27.0.0](https://github.com/ckeditor/ckeditor5/compare/v26.0.0...v27.0.0) (date)

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

- **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `inputTransformation` event is no longer fired by the `Clipboard` plugin, now the `ClipboardPipeline` plugin is responsible for firing that event (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128).
- **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `clipboardInput` and `inputTransformation` events should not be fired or stopped in the feature code. The `data.content` property should be assigned to override the default content instead. You can stop this event only if you want to completely disable pasting/dropping of some content \[TODO migration guide link\] (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128).
- We introduced bubbling of `view.Document` events, similar to how bubbling works in the DOM. That allowed us to reprioritize many listeners that previously had to rely on `priority`. However, it means that existing listeners that use priorities may now be executed in a wrong moment. The listeners to such events should be reviewed in terms of when they should be executed (in what context/element/phase). You can find more information regarding bubbling in the documentation

### Features

- **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Added attributes support in default markers highlight downcast conversion for widgets. Closes [#8362]https://github.com/ckeditor/ckeditor5/issues/8362. ([commit](https://github.com/ckeditor/ckeditor5/commit/0bd718a20768b65790325d29b8872e1ba2f9d16e))
- **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: Added language dropdown button to support text part language. Closes [#8989]https://github.com/ckeditor/ckeditor5/issues/8989. ([commit](https://github.com/ckeditor/ckeditor5/commit/1e2f3739a56aa14ab8020fa0d931615eb6b6c223))
- **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Typing `[x]` will insert a checked todo list item. Closes [#8877]https://github.com/ckeditor/ckeditor5/issues/8877. ([commit](https://github.com/ckeditor/ckeditor5/commit/18be7dabaf62c763bd3272fc8467aec0ae94ac98))
- **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Implemented the basic content drag and drop support. Closes [#9128]https://github.com/ckeditor/ckeditor5/issues/9128. ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
- **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `contentInsertion` event is fired from `ClipboardPipeline` to enable customization of content insertion (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
- **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Created the universal caption icon. Closes [#9196]https://github.com/ckeditor/ckeditor5/issues/9196. ([commit](https://github.com/ckeditor/ckeditor5/commit/6dce730c27db063c13c71d363458731cb57faac9))
- **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced bubbling of `view.Document` events, similar to how bubbling works in the DOM. Bubbling allows listening on a view event on a specific kind of an element, hence simplifying code that needs to handle a specific event for only that element (e.g. `enter` in `blockquote`s only). Read more in the documentation ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
- **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `ArrowKeysObserver`. See [#8640]https://github.com/ckeditor/ckeditor5/issues/8640. ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
- **[alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment)**: Option to use classes instead of inline styles. Closes [#8516]https://github.com/ckeditor/ckeditor5/issues/8516. ([commit](https://github.com/ckeditor/ckeditor5/commit/638543bd6d3f1e1c1ffc864e4d4007744fffc62c))

### Bug fixes

- **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `DataController#toView()` should have a default value for the `options` parameter. Closes #9293. ([commit](https://github.com/ckeditor/ckeditor5/commit/f77a3d57bddb96ae3280736f974cfd0b148611cb))
- **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The `EmitterMixin#listenTo()` method is split into listener and emitter parts. The `ObservableMixin` decorated methods reverted to the original method while destroying an observable. ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))

### Other changes

- **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added `language.getLanguageDirection` helper function allowing to determine text direction based on language code. ([commit](https://github.com/ckeditor/ckeditor5/commit/1e2f3739a56aa14ab8020fa0d931615eb6b6c223))
- **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The paste as plain text feature was extracted to the dedicated `PastePlainText` plugin (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
- **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `mouseup` event is fired by the `MouseObserver` (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
- **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `mouseup` event is no longer fired by the `MouseEventsObserver` from the ckeditor5-table package (now handled by `MouseObserver`) (see [#9128]https://github.com/ckeditor/ckeditor5/issues/9128). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
- **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: The `TwoStepCaretMovement` feature is now using bubbling events. Closes [#7437]https://github.com/ckeditor/ckeditor5/issues/7437. ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
```

