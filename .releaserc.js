module.exports = {
  tagFormat: "s3-browser@v${version}",
  branches: [
    "main"
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: 'feat', scope: 's3-browser', release: 'minor' },
          { type: 'fix', scope: 's3-browser', release: 'patch' },
          { type: 'perf', scope: 's3-browser', release: 'patch' },
          { type: 'revert', scope: 's3-browser', release: 'patch' },
          { type: 'docs', scope: 's3-browser', release: 'patch' },
          { type: 'style', scope: 's3-browser', release: 'patch' },
          { type: 'refactor', scope: 's3-browser', release: 'patch' },
          { release: false, scope: '!s3-browser'}
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
              scope: "s3-browser",
              hidden: false,
              section: "Code Refactoring"
            },
            {
              type: "fix",
              scope: "s3-browser",
              hidden: false,
              section: "Bug fixes"
            },
            {
              type: "feat",
              scope: "s3-browser",
              hidden: false,
              section: "Features"
            },
            {
              type: "style",
              scope: "s3-browser",
              hidden: false,
              section: "Styling"
            },
            {
              type: "docs",
              scope: "s3-browser",
              hidden: false,
              section: "Documentation"
            },
            {
              type: "perf",
              scope: "s3-browser",
              hidden: false,
              section: "Performance Improvements"
            },
            {
              type: "revert",
              scope: "s3-browser",
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