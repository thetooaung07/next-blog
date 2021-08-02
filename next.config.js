// You can embed environemt variable here for production
// but better private your git repo since next.config.js will be visible in git repo

/* const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: "lorem",
        db_password: "lorem",
        db_clustername: "lorem",
        db: "lorem",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      db_username: "lorem",
      db_password: "lorem",
      db_clustername: "cluster0",
      db: "lorem",
    },
  };
}; */

module.exports = {
  reactStrictMode: true,
};
