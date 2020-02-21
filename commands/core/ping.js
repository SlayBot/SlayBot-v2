const Discord = require("discord.js");
function ping(host, pong) {

var started = new Date().getTime();

};

module.exports = {
  name: "ping",
  description: "Näyttää kaikki komennot",
  run: async (client, message, args) => {

const exampleEmbed = new Discord.RichEmbed()
  .setColor("#0099ff")
  .setTitle("Pinging...")

  const m = await message.channel.send(exampleEmbed).then(m => {
    const noobEmbed = new Discord.RichEmbed()
    .setColor("#0099ff")
    .addField("SlayBot Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
    .addField("API Latency", `${Math.round(client.ping)}ms`, false)
  
   m.edit(noobEmbed);
  })
  }
}