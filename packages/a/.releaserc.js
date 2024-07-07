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
        },
        presetConfig: {
          types: [
            {
              type: "refactor",
              scope: "a",
              hidden: false,
              section: "Code Refactoring"
            },
            {
              type: "fix",
              scope: "a",
              hidden: false,
              section: "Bug fixes"
            },
            {
              type: "feat",
              scope: "a",
              hidden: false,
              section: "Features"
            },
            {
              type: "style",
              scope: "a",
              hidden: false,
              section: "Styling"
            },
            {
              type: "docs",
              scope: "a",
              hidden: false,
              section: "Documentation"
            },
            {
              type: "perf",
              scope: "a",
              hidden: false,
              section: "Performance Improvements"
            },
            {
              type: "revert",
              scope: "a",
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