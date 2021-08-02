import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: "thetooaung",
        db_password: "thetooaung",
        db_clustername: "cluster0",
        db: "next-blog",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      db_username: "thetooaung",
      db_password: "thetooaung",
      db_clustername: "cluster0",
      db: "next-blog",
    },
  };
};
