const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    name: "fakeban",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

        let user;
        if (message.mentions.users.size) {
          user = message.mentions.users.first();
        }
        else if (args.id) {
          user = await Bastion.fetchUser(args.id);
        }
        if (!user) {
          return Bastion.emit('commandUsage', message, this.help);
        }
      
        await message.channel.send({
          embed: {
            color: Bastion.colors.RED,
            description: `**${message.author.tag}** has banned **${user.tag}** from this server.*`,
            footer: {
              text: '* Oh, just kidding! XD'
            }
          }
        });
    }
}