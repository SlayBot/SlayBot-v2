const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "suggest",
    description: "Reports a member",
    run: async (client, message, args) => {

        const noargs = new RichEmbed()
            .setColor("#0099ff")
            .setDescription("<:alert:662430929716903938> You must explain the thing you want to suggest .\n\nExample: -suggest Please make more Game commands!")

        if (!args[0])
            return message.channel.send(noargs);

        const moreinfo = new RichEmbed()
            .setColor("#0099ff")
            .setDescription("<:alert:662430929716903938> You must give more information about the thing you want to suggest .\n\nExample: -suggest Please make more Game commands!")

        if (!args[1])
            return message.channel.send(moreinfo);
    
        const suggestion = new RichEmbed()
            .setColor("#0099ff")
            .setDescription(stripIndents`
            **Suggested by:** ${message.member} | ${message.member.id}
            **Suggestion:** ${args.slice(0).join(" ")}`);

        const confirmation = new RichEmbed()
            .setColor("#0099ff")
            .setDescription("The suggestion has been sent successfully!")

        client.channels.get("675797948927311899").send(suggestion).then(message.channel.send(confirmation))

    }
}