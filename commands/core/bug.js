const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "bug",
    category: "moderation",
    description: "Reports a member",
    run: async (client, message, args) => {

        const moreinfo = new RichEmbed()
            .setColor("#0099ff")
            .setDescription("<:alert:662430929716903938> You must explain the bug to report the bug.\n\nExample: -bug The help command is not working")

        if (!args[1])
            return message.channel.send(moreinfo);
    
        const msgtostaff = new RichEmbed()
            .setColor("#0099ff")
            .setDescription(stripIndents`
            **- Bug found by:** ${message.member} | ${message.member.id}
            **- Bug reported in:** ${message.guild.name} | (${message.guild.id})
            **- Bug:** ${args.slice(0).join(" ")}`);

        const confirmation = new RichEmbed()
            .setColor("#0099ff")
            .setDescription("The bug has been sent to SlayBot Staff")

        client.users.get("267386908382855169").send(msgtostaff).then(message.channel.send(confirmation))

    }
}