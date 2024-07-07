module.exports = {
  tagFormat: "@package/a@v${version}",
  branches: [
    "main"
  ],
  plugins: [
    [
      "@shlab/commit-analyzer",
      {
        releaseRules: [
          { type: 'feat', scope: 'a', release: 'minor' },
          { type: 'fix', scope: 'a', release: 'patch' },
          { type: 'perf', scope: 'a', release: 'patch' },
          { type: 'revert', scope: 'a', release: 'patch' },
          { type: 'docs', scope: 'a', release: 'patch' },
          { type: 'style', scope: 'a', release: 'patch' },
          { type: 'refactor', scope: 'a', release: 'patch' },
        ]
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