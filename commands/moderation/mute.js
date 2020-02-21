const Discord = require('discord.js');
const ms = require("ms");

module.exports = { 
    name: "mute",
    description: "reports a user of the guild",
    run: async (client, message, args) => {

        const errormsgargs0 = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setDescription(`<:alert:662430929716903938> You must explain the bug to report the bug.\n\nExample: -mute ${message.member} 1h Breaking the rules`)

        const errorcantmute = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setDescription(`<:alert:662430929716903938> You didn't specify a time!\n\nExample: -mute ${message.member} 1h Breaking the rules`)

        const errornotime = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setDescription(`<:alert:662430929716903938> I cant mute that person!`)

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(errormsgargs0);
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorcantmute);
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }

    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply(errornotime);
  
    await(tomute.addRole(muterole.id));
    const muted = new Discord.RichEmbed()
    .setColor("#0099ff")
    .setDescription(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`)
    message.channel.send(muted);
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      const unmuted = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setDescription(`<@${tomute.id}> has been unmuted!`)
      message.channel.send(unmuted);
    }, ms(mutetime));

   }
}