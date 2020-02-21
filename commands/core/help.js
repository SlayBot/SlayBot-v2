const Discord = require('discord.js');

module.exports = {
    name: "help",
    run: (client, message, args) => {

    const embedhelp = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('SlayBot V2 - Help')
        .setDescription("Hello! I'm SlayBot and im developed by Drivet Development!\nI'm currently running on Version 2!\n\nSlayBot's Prefix is: `s!`. SlayBot's Website: https://slaybot.tk")
        .setThumbnail("https://cdn.drivet.tk/web-assets/images/slaybotnew.png")
        .addField("**Core Commands**", "`help` `bug` `invite` `ping` `shards` `stats` `status` `suggest` `support`")
        .addField("**Miscellaneous Commands**", "`avatar` `csgoranks` `serverinfo` `userinfo`")
        .addField("**Fun Commands**", "`dankmeme` `faketexts` `meme` `osha` `scottish` `spongebob` `woooosh`")
        .addField("**Game Commands**", "`8ball` `coinflip`")
        .addField("**Economy Commands**", "`credits` `daily` `formatcoins`")
        .addField("**Music Commands (BETA)**", "`pause` `play` `queue` `resume` `skip` `volume`")
        .addField("**NSFW Commands**", "Hided from non-**NSFW** channels.")
        .addField("**Moderation Commands**", "`ban` `kick` `mute` `purge` `warn`")

    const embedhelpnsfw = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('SlayBot V2 - Help')
        .setDescription("Hello! I'm SlayBot and im developed by Drivet Development!\nI'm currently running on Version 2!\n\nSlayBot's Prefix is: `s!`. SlayBot's Website: https://slaybot.tk")
        .setThumbnail("https://cdn.drivet.tk/web-assets/images/slaybotnew.png")
        .addField("**Core Commands**", "`help` `bug` `invite` `ping` `shards` `stats` `status` `suggest` `support`")
        .addField("**Miscellaneous Commands**", "`avatar` `csgoranks` `serverinfo` `userinfo`")
        .addField("**Fun Commands**", "`dankmeme` `faketexts` `meme` `osha` `scottish` `spongebob` `woooosh`")
        .addField("**Game Commands**", "`coinflip`")
        .addField("**Economy Commands**", "`credits` `daily` `formatcoins`")
        .addField("**Music Commands (BETA)**", "`pause` `play` `queue` `resume` `skip` `volume`")
        .addField("**NSFW Commands**", "`ass` `boobs` `booty` `hentai` `porn` `pussy` `realgirls` `rule34` `thighs`")
        .addField("**Moderation Commands**", "`ban` `kick` `mute` `purge` `warn`")

if (message.channel.nsfw === false) {
        message.channel.send(embedhelp);
    }

if (message.channel.nsfw === true) {
        message.channel.send(embedhelpnsfw);
    }

}}



