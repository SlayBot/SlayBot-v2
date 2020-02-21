const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {

const inviteembed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setDescription(`Invite me to you server: https://slaybot.tk/invite.html`)
     message.channel.send(inviteembed);
    }
}