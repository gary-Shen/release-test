# release-test
a test repo for semantic release

## Expectation

- `fix: something` should not trigger a patch release.
- `fix(s3-browser): fix something` should trigger a patch release.

## Result

- Released a patch version. see [.releaserc.js](https://github.com/gary-Shen/release-test/blob/main/.releaserc.js#L10)
- The content in Release notes is empty. see [v1.0.1](https://github.com/gary-Shen/release-test/releases/tag/s3-browser%40v1.0.1)

## Update

- Release notes filter by scope. see [s3-browser@v1.0.16](https://github.com/gary-Shen/release-test/releases/tag/s3-browser%40v1.0.16)
- Ignore `fix: something` without scope in release notes. see [commit](https://github.com/gary-Shen/release-test/commit/e8b98286952dbf62e0220f647aaaaf917dfa3c74)

## Solution

The main problem is that the commit-analyzer will use the default release rules if the custom release rules does not have a matched release type.

```diff
- if (isUndefined(commitReleaseType)) {
+ if (isUndefined(commitReleaseType) && !releaseRules) {
```

see [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer/blob/master/index.js#L56)

