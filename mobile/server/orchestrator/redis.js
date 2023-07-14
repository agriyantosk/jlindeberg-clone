const Redis = require("ioredis");

const redis = new Redis({
    host: "redis-18775.c277.us-east-1-3.ec2.cloud.redislabs.com",
    port: 18775,
    password: "BJNpP5mTHTD48HNF0W7QQORJcbya1jCC",
});

module.exports = redis;
