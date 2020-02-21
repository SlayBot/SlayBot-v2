// dont use these commands because theyre shitty af and broken.
const Discord = require("discord.js");
const music = require('../../utils/music.js');

module.exports = {
    name: "skip",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args, guilds) => {
        let server = guilds[message.guild.id];

        if (server.skippers.indexOf(message.author.id) == -1) {
            server.skippers.push(message.author.id);
            server.skipReq++;
            if (server.skipReq >= Math.ceil((server.voiceChannel.members.size - 1) / 2)) {
                music.skipSong(message, server);
                message.reply(' your skip has been acknowledged!');
            }
            else {
                message.reply(` your skip has been acknowledged! You need ${(server.voiceChannel.members.size - 1) / 2 - server.skipReq} skip votes!`);
            }
        }
        else {
            message.reply(' you already voted to skip!');
        }
    }
}