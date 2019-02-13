# Styled-JSX Snapshot Error Sample

This repo uses [StoryBook Storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core)
addon to create automatic Jest Snapshots for testing.

Upgrading from styled-jsx `v3.1.2` to `v3.1.3` starts to throw errors when running tests. See
[test-output](./test-output.md)

NOTE: The issues remains even when upgrading `styled-jsx` to the latest release `v3.2.1`

## Steps to reproduce

1. Clone Repo
2. `yarn install`
3. `yarn test`

## See working tests

1. Change line 40 in package.json from `"next/styled-jsx": "3.1.3"` to `"next/styled-jsx": "3.1.2"` (see previous commit)
2. `yarn install`
3. `yarn test`
