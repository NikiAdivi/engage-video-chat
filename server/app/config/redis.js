let redis = require("redis"),
  client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.on("error", (error) => {
  console.log(error);
});

module.exports = client;
