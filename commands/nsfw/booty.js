const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    name: "booty",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

        if (message.channel.nsfw === true) { try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/booty.json?sort=top&t=week')
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setImage(allowed[randomnumber].data.url)
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        }}
        if (message.channel.nsfw === false) {
            message.channel.send("This is not a NSFW channel!")
    }

    }
}