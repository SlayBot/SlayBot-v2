// dont use these commands because theyre shitty af and broken.
const Discord = require("discord.js");
const music = require('../../utils/music.js');

module.exports = {
    name: "resume",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args, guilds) => {
        let server = guilds[message.guild.id];
        music.resumeSong(message, server);
    }
}