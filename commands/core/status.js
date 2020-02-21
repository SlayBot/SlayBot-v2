const Discord = require('discord.js');

module.exports = {
    name: "status",
    run: (client, message, args) => {

const embedhelp = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setDescription("Drivet's Statuspage: https://drivetstatus.tk");
        message.channel.send(embedhelp);
    }
}