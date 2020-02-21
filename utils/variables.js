const config = require("../utils/config.json");
const guilds = new Map()
let token;
let shardcount;
let clustercount;
let guildspershard = 1250;
if (config.dev) {
    token = config.tokens.devbot
    shardcount = 1;
    clustercount = 1;
} else {
    token = config.tokens.mainbot
    shardcount = 1;
    clustercount = 1;
};

const admins = config.admins;

module.exports = { config, token, admins, shardcount, clustercount, guildspershard, guilds };
