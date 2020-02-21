const Discord = require('discord.js');
const beautify = require('beautify');

module.exports = {
    name: "eval",
    description: "Näyttää kaikki komennot",
    usage: "<code to eval>",
    run: async (client, message, args) => {
        if (message.author.id !== "267386908382855169") {
            return message.chanel.send("You're not the owner of this bot!");
        }

        if (!args[0]) {
            message.channel.send("Inform something please!")
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }

            const toEval = args.join(" ");
            const evaluated = eval(toEval)
 
            let embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('List of Commands')
                .addField("To evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated))

            message.channel.send(embed);
        } 
        
        catch (e) {
            let error = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setDescription(e)

            message.channel.send(error);
        }
    }
}