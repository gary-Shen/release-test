module.exports = {
  tagFormat: "@package/b@v${version}",
  branches: [
    "main"
  ],
  plugins: [
    [
      "@shlab/commit-analyzer",
      {
        releaseRules: [
          { type: 'feat', scope: 'b', release: 'minor' },
          { type: 'fix', scope: 'b', release: 'patch' },
          { type: 'perf', scope: 'b', release: 'patch' },
          { type: 'revert', scope: 'b', release: 'patch' },
          { type: 'docs', scope: 'b', release: 'patch' },
          { type: 'style', scope: 'b', release: 'patch' },
          { type: 'refactor', scope: 'b', release: 'patch' },
          { breaking: true, scope: 'b', release: "major" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        writerOpts: {
          commitsSort: ["subject", "scope"]
        }
      }
    ],
    [
      "@semantic-release/github"
    ]
  ]
}