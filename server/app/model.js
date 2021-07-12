////////////////////////////////////////////////////////////////////////////////
/////////////////////           Model (MVC)              ///////////////////////
////////////////////////////////////////////////////////////////////////////////

const redisClient = require("./config-redis/redis");

/* Saves call info into the database*/
exports.saveCall = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

/* Gets call info from the database*/
exports.getCall = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};
