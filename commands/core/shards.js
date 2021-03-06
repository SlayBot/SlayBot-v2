const Discord = require('discord.js');

module.exports = {
    name: "shards",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

        // For each shard, get the shard ID and the number of guilds it owns
let values = await client.shard.broadcastEval(`
[
    this.shard.id,
    this.guilds.size
]
`);
// Make a final string which will be sent in the channel
let finalString = "**SHARD STATUS**\n\n";
// For each shard data
values.forEach((value) => {
// Add the shard infos to the final string
finalString += "• Shard "+value[0]+" | Servers: "+value[1]+"\n";
});
// Send the final string in the channel
message.channel.send(finalString);
    }
}