const Discord = require('discord.js');

module.exports = {
    name: "csgoranks",
    description: "...",
    run: async (client, message, args) => {
      
      const embederr = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setTitle('CS:GO Ranks')
          .setDescription("Please choose one of following:")
          .addField("**Silver I**", "1")
          .addField("**Silver II**", "2")
          .addField("**Silver III**", "3")
          .addField("**Silver IV**", "4")
          .addField("**Silver Elite**", "5")
          .addField("**Silver Elite Master**", "6")
          .addField("**Gold Nova I**", "7")
          .addField("**Gold Nova II**", "8")
          .addField("**Gold Nova III**", "9")
          .addField("**Gold Nova Master**", "10")
          .addField("**Master Guardian**", "11")
          .addField("**Master Guardian II**", "12")
          .addField("**Master Guardian Elite**", "13")
          .addField("**Distinguished Master Guardian**", "14")
          .addField("**Legendary Eagle**", "15")
          .addField("**Legendary Eagle Master**", "16")
          .addField("**Supreme Master First Class**", "17")
          .addField("**The Global Elite**", "18")
      
      if(!args[0]){
        message.channel.send(embederr);
      }
      else{
        
        if (message.content.startsWith("-csgoranks")){
          message.delete({timeout: 1000});
        }
        
        var choice = args[0];
        
        var ch = parseInt(choice);
        
        switch(ch) {
          case 1:
            var rank = "Silver I";
            break;
          case 2:
            var rank = "Silver II";
            break;
          case 3:
            var rank = "Silver III";
            break;
          case 4:
            var rank = "Silver IV";
            break;
          case 5:
            var rank = "Silver Elite";
            break;
          case 6:
            var rank = "Silver Elite Master";
            break;
          case 7:
            var rank = "Gold Nova I";
            break;
          case 8:
            var rank = "Gold Nova II";
            break;
          case 9:
            var rank = "Gold Nova III";
            break;
          case 10:
            var rank = "Gold Nova Master";
            break;
          case 11:
            var rank = "Master Guardian";
            break;
          case 12:
            var rank = "Master Guardian II";
            break;
          case 13:
            var rank = "Master Guardian Elite";
            break;
          case 14:
            var rank = "Distinguished Master Guardian";
            break;
          case 15:
            var rank = "Legendary Eagle";
            break;
          case 16:
            var rank = "Legendary Eagle Master";
            break;
          case 17:
            var rank = "Supreme Master First Class";
            break;
          case 18:
            var rank = "The Global Elite";
            break;
          default:
            var rank = embederr;
        }

        const embedrank = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setTitle(rank)
          .setImage("https://raw.githubusercontent.com/SteamDatabase/GameTracking-CSGO/0e457516ba13817a45b6c2a1d262fe7d0599bcbc/csgo/pak01_dir/resource/flash/econ/status_icons/skillgroup" + choice + ".png")
        
        message.channel.send(embedrank)
      }
  }
}
