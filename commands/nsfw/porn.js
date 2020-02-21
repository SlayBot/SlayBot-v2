const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "porn",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'pgif'})
            .end((err, response) => {
              message.channel.send({ file: response.body.message });
            });
          } else {
            message.channel.send("This isn't NSFW channel!")
          }

    }
}