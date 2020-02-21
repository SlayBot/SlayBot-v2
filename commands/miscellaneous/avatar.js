const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Näyttää jäsenen profiilikuvan",
    run: async (client, message, args) => {
    let msg = await message.channel.send("Wait a second..");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("0099ff")
        .setTitle(`Avatar (Executed by ${message.author.username})`)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")")

        message.channel.send(embed)
}};