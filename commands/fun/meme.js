const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    name: "meme",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

         try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/memes.json?sort=top&t=week')
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
    }