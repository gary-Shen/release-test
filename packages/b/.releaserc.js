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
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        writerOpts: {
          commitsSort: ["subject", "scope"]
        },
        presetConfig: {
          types: [
            {
              type: "refactor",
              scope: "b",
              hidden: false,
              section: "Code Refactoring"
            },
            {
              type: "fix",
              scope: "b",
              hidden: false,
              section: "Bug fixes"
            },
            {
              type: "feat",
              scope: "b",
              hidden: false,
              section: "Features"
            },
            {
              type: "style",
              scope: "b",
              hidden: false,
              section: "Styling"
            },
            {
              type: "docs",
              scope: "b",
              hidden: false,
              section: "Documentation"
            },
            {
              type: "perf",
              scope: "b",
              hidden: false,
              section: "Performance Improvements"
            },
            {
              type: "revert",
              scope: "b",
              hidden: false,
              section: "Reverts"
            }
          ]
        }
      }
    ],
    [
      "@semantic-release/github"
    ]
  ]
}