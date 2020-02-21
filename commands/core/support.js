const Discord = require('discord.js');

module.exports = {
    name: "support",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {

const inviteembed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setDescription(`SlayBot's Support Server: https://slaybot.tk/support `)
     message.channel.send(inviteembed);
    }
}