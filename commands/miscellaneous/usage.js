const Discord = require('discord.js');

module.exports = {
    name: "usage",
    description: "Näyttää kaikki komennot",
    run: async (client, message, args) => {

      const argszero = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setDescription("<:alert:662430929716903938> You must provide a command. Type -help to see all the commands\n\nExample: -usage coinflip");

      const nousage = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setDescription("<:alert:662430929716903938> That command doesnt have any usage or that is invalid command");

      if(!args[0]){
        return message.channel.send(argszero)
      }
      
      var com = args[0];
      
      if(com == "ban"){
        const embedban = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for ban command')
        .addField("**Usage**", "-ban [@User] [Reason]")
         message.channel.send(embedban);
      }
      else if(com == "kick"){        
        const embedkick = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for kick command')
        .addField("**Usage**", "-kick [@User] [Reason]")
         message.channel.send(embedkick);
      }
      else if(com == "purge" || com == "clear" || com == "nuke"){
        const embedpurge = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for '+com+' command')
        .addField("**Usage**", "-"+com+" [message amount]")
         message.channel.send(embedpurge);
      }
      else if(com == "report"){
        const embedreport = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for warn command')
        .addField("**Usage**", "-report [@User] [Reason]")
         message.channel.send(embedreport);
      }
      else if(com == "warn"){
        const embedwarn = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for warn command')
        .addField("**Usage**", "-warn [@User] [Reason]")
         message.channel.send(embedwarn);
      }
      else if(com == "avatar"){
        const embedavatar = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for avatar command')
        .addField("**Usage**", "-avatar [@User]")
         message.channel.send(embedavatar);
      }
      else if(com == "userinfo"){
        const embeduserinfo = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for userinfo command')
        .addField("**Usage**", "-userinfo [@User]")
         message.channel.send(embeduserinfo);
      }
      else if(com == "play"){
        const embedplay = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for play command')
        .addField("**Usage**", "-play [Youtube Link]")
         message.channel.send(embedplay);
      }
      else if(com == "image"){
        const embedimage = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for image command')
        .addField("**Usage**", "-image [Name]")
         message.channel.send(embedimage);
      }
      else if(com == "coinflip"){
        const embedcoinflip = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for coinflip command')
        .addField("**Usage**", "-coinflip [Heads or Tails] [Coin amount]")
         message.channel.send(embedcoinflip);
      }
      else if(com == "csgoranks"){
        const embedranks = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for csgoranks command')
        .addField("**Usage**", "-csgoranks [1-18]")
         message.channel.send(embedranks);
      }
      else if(com == "buylevels"){
        const embedlvl = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for buylevels command')
        .addField("**Usage**", "-buylevels [Level amount]")
         message.channel.send(embedlvl);
      }
      else if(com == "bug"){
        const embedbug = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for bug command')
        .addField("**Usage**", "-bug [text]")
         message.channel.send(embedbug);
      }
      else{
        message.channel.send(nousage)
      }
    }
}