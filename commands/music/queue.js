// dont use these commands because theyre shitty af and broken.
const Discord = require("discord.js");
const music = require('../../utils/music.js');

module.exports = {
    name: "queue",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args, guilds) => {
        const server = guilds[message.guild.id];
        const queue = server.queueNames;
        if (queue.length < 1) {
            return message.channel.send('No songs remain in the queue.');
        }

        let embed = new Discord.RichEmbed()
            .setTitle('Current PlayList');
            
        for(let i = 0; i < queue.length; i++) {
            embed = embed.addField('❯ Video/Song Name:', queue[i]);
        }
        return message.channel.send(embed);
    }
}