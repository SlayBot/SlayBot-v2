const { Client, ShardingManager } = require("discord.js");
const client = new Client({ disableEveryone: true });
const programUtils = require('program-utils');
const fs = require('fs');
const { token } = require('./utils/variables.js')

let shardsNumber = "auto";
let respawnShard = true;
let argsParser = new programUtils.argsParser();
let args = argsParser
  .addCharFlag('n')
  .addStringFlag('no-respawn')
  .getResult();
if (args.flags.n) {
  if (args.flags.n[0] === auto || !isNaN(parseInt(args.flags.n[0]))) {
    shardsNumber = args.flags.n[0];
  }
  else {
    console.error('Invalid argument, must be "auto" or a number after -n');
    process.exit(-1);
  }
}
if (args.flags['no-respawn']) {
  respawnShard = false;
}

const manager = new ShardingManager('./bot.js', {
    totalShards: shardsNumber,
    respawn: respawnShard,
    token: token,
    shardArgs: ['--default-sharding'] 
});

manager.spawn();
manager.on('launch', shard => console.log(`Shard ${shard.id} is starting.`));