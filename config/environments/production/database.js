module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:"mongodb://ellis-bd-user:sutehall@elliscluster-shard-00-00-mnxyd.mongodb.net:27017,elliscluster-shard-00-01-mnxyd.mongodb.net:27017,elliscluster-shard-00-02-mnxyd.mongodb.net:27017/portfolio_strapi?ssl=true&replicaSet=EllisCluster-shard-0&authSource=admin&retryWrites=true&w=majority",
        database: "portfolio_strapi",
      },
      options: {
        ssl: true,
      },
    },
  },
});
