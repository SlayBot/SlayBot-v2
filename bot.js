// used to store playlists for different guilds
const guilds = {};

const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require("fs");
const { token } = require("./utils/variables.js")
const fs = require("fs");
const utils = require("./utils/utils")
var express = require('express');
const config = require('./config.json');
const http = require('http');
const path = require('path');
const app = express();
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/');
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
 
// The following 4 are the actual values that pertain to your account and this specific metric.
var apiKey = '3c90a184-1911-413b-b908-a87cdf400e38';
var pageId = '3h6r33zjscwy';
var metricId = '9nfmz9r3f544';
var apiBase = 'http://api.statuspage.io/v1';
 
var url = apiBase + '/pages/' + pageId + '/metrics/' + metricId + '/data.json';
var authHeader = { 'Authorization': 'OAuth ' + apiKey };
var options = { method: 'POST', headers: authHeader };
 
// Need at least 1 data point for every 5 minutes.
// Submit random data for the whole day.
var totalPoints = 60 / 5 * 24;
var epochInSeconds = Math.floor(new Date() / 1000);
 
// This function gets called every second.
function submit(count) {
  count = count + 1;
 
  if(count > totalPoints) return;
 
  var currentTimestamp = epochInSeconds - (count - 1) * 5 * 60;
  var randomValue = Math.floor(Math.random() * 1000);
 
  var data = {
    timestamp: currentTimestamp,
    value: randomValue,
  };
 
  var request = http.request(url, options, function (res) {
    res.on('data', function () {
      console.log('Submitted point ' + count + ' of ' + totalPoints);
    });
    res.on('end', function() {
      setTimeout(function() { submit(count); }, 1000);
    });
  });
 
  request.end(JSON.stringify({ data: data }));
}
 
// Initial call to start submitting data.
submit(0);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

client.on("ready",async()=>{
  console.log(`Shard ${client.shard.id} is rebooted.`);
  client.user.setActivity(`s!help`);
});

client.on('guildCreate', (guild) =>{
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.users.get("267386908382855169").send(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
});

client.on("guildDelete", (guild) =>{
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.users.get("267386908382855169").send(`I have been removed from: ${guild.name} (id: ${guild.id})`)
});

["command"].forEach(handler => {
  require(`./utils/commands.js`)(client);
});


client.on("message", async message => {
  let prefix = "s!";
  let prefixArray = ["<@613373597175513114>", "<@!613373597175513114>", "s!", "S!"];
  for (const thisPrefix of prefixArray) {
      if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  };


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) 
  try {
    command.run(client, message, args, guilds, config);
  }
  
  catch(error) {
    console.log(error)
    message.channel.send("Error occured:", error)
  }
});

process.on("uncaughtException", console.error)
process.on("unhandledRejection", console.error)

client.login(token);