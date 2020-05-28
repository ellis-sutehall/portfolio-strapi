module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: env("DATABASE_HOST"),
      },
      options: {
        authenticationDatabase: "admin",
        ssl: true,
      },
    },
  },
});
