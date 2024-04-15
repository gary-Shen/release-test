module.exports = {
  tagFormat: "s3-browser@v${version}",
  branches: [
    "main"
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // 自定义 analyzeCommits 函数
        analyzeCommits: ({ commits, logger }) => {
          let type;
          const types = ['patch', 'minor', 'major'];
          commits.forEach(commit => {
            console.log(commit.scope)
            console.log('type', commit.type)
            if (commit.scope === 's3-browser') {
              const releaseType = types.find(t => commit.type === t);
              if (releaseType && (!type || types.indexOf(releaseType) > types.indexOf(type))) {
                type = releaseType;
              }
            }
          });
          logger.log('Final release type for s3-browser scope: %s', type);
          return type;
        },
      },
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