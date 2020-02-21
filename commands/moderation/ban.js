const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs", "log") || message.channel;

        if (message.deletable) message.delete();

        let user = message.mentions.users.first();
        
        // No args
        if (!args[0]) {
            return message.reply("<:alert:662430929716903938> Please provide a person to ban.")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("<:alert:662430929716903938> You do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("<:alert:662430929716903938> I do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("<:alert:662430929716903938> Couldn't find that member, try again")
                .then(m => m.delete(5000));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("<:alert:662430929716903938> You can't ban yourself")
                .then(m => m.delete(5000));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("<:alert:662430929716903938> I can't ban that person due to role hierarchy, i suppose.")
                .then(m => m.delete(5000));
        }
        
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`You've been banned from  \`${message.guild.name}\`\n
            **- Banned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}` || 'No reason');

            user.send(embed)

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
        });
    }
};