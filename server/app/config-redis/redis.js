const {REDISCACHEHOSTNAME, REDISCACHEKEY, REDISPORT} = require("./config");

let redis = require("redis"),
  client = redis.createClient(`${REDISPORT}`, `${REDISCACHEHOSTNAME}`,
    {auth_pass: `${REDISCACHEKEY}`, tls: {servername: `${REDISCACHEHOSTNAME}` }});
  // client = redis.createClient({
  //   host: 'redis-server',
  //   port: 6379,
  // });


client.on("error", (error) => {
  console.log(error);
});

module.exports = client;
