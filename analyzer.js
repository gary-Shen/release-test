// analyzer.js
const conventionalCommitsParser = require('conventional-commits-parser');
const through2 = require('through2');

module.exports = async function analyzeCommits(pluginConfig, context) {
  const { commits } = context;

  let hasS3Scope = false;
  for (const commit of commits) {
    let scope;

    commit.message
      .pipe(conventionalCommitsParser())
      .pipe(
        through2.obj((chunk) => {
          scope = chunk.scope;
        })
      )
      .on('finish', () => {
        if (scope === 's3') {
          hasS3Scope = true;
        }
      });
    
    if (hasS3Scope) break;
  }

  if (hasS3Scope) {
    return 'patch';
  }

  return null;
};
