/**
 * These are the redis configuration after creating an Redis cache
 * instance on Azure. 
 * REDISCACHEKEY can be obtained in the access keys folder 
 * REDISCACHEHOSTNAME in the home page
 * 
 */

const REDISCACHEHOSTNAME = "webapp-engage.redis.cache.windows.net";
const REDISCACHEKEY = "7YdKHwKy6QeopiBd1cF2kfaLAZhf4HjlzqSzCScqwJs=";
const REDISPORT = 6380;

module.exports = {
  REDISCACHEHOSTNAME: REDISCACHEHOSTNAME,
  REDISCACHEKEY: REDISCACHEKEY,
  REDISPORT: REDISPORT,
};
