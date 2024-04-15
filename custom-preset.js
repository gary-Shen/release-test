const angularPreset = require('conventional-changelog-angular');

module.exports = Promise.all([angularPreset]).then(([preset]) => {
  const originalWhatBump = preset.conventionalRecommendedBump.whatBump;

  preset.conventionalRecommendedBump.whatBump = (commits) => {
    let level = Number.MAX_SAFE_INTEGER;
    let reason;

    commits.map((commit) => {
      const bump = originalWhatBump([commit]);

      if(bump && bump.level < level && commit.scope === 's3-browser') {
        level = bump.level;
        reason = bump.reason;
      }
    });

    return level===Number.MAX_SAFE_INTEGER?{}:{level, reason};
  };

  return preset;
});
