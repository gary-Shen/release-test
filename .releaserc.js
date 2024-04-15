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
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
          headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
          headerCorrespondence: ['type', 'scope', 'subject'],
        },
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