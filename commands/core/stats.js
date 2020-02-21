const Discord = require('discord.js');

module.exports = {
    name: "stats",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {
    let ram = await client.shard.broadcastEval('process.memoryUsage().heapUsed')
    let totalHeap = ram.reduce((prev, heap) => prev + heap, 0);
    totalHeap = totalHeap / 512 / 512

const embedhelp = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('SlayBot\'s Stats')
  .setThumbnail('https://cdn.drivet.tk/web-assets/images/slaybot.png')
  .addField("• Ram Usage", `${Math.round(totalHeap / 512 * 100) / 100}MB`)
  .addField("**Servers**", `${client.guilds.size}`)
  .addField("**Total Users**", `${client.users.size}`)
  .addField("**Total Channels**", `${client.channels.size}`)
  .addField("**Total Emojis**", `${client.emojis.size}`)
  .addField("**Commands**", `${client.commands.size}`)
     message.channel.send(embedhelp);
    }
}