module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:"mongodb:%2f%2fellis-bd-user:sutehall%40elliscluster-shard-00-00-mnxyd.mongodb.net:27017,elliscluster-shard-00-01-mnxyd.mongodb.net:27017,elliscluster-shard-00-02-mnxyd.mongodb.net:27017/strapi_portfolio?ssl=true&replicaSet=EllisCluster-shard-0&authSource=admin&retryWrites=true",
        database: "strapi_portfolio",
      },
      options: {
        authenticationDatabase: "admin",
        ssl: true,
      },
    },
  },
});
