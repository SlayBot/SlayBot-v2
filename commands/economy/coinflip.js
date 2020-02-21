// dont use these commands because theyre shitty af and broken.
const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "coinflip",
    description: "...",
    run: (client, message, args) => {

      var con = mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
      });
      
      con.connect(err => {
        if(err) throw err;
      });
    
      
      const embederr2 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('Coinflip')
          .addField("**Wrong input**", "Please give amount of coins to use in coinflipping!")
      
      const embederr3 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('Coinflip')
          .addField("**Wrong input**", "Please give valid amount of coins to coinflip!")
      
      if(args[1].startsWith(0)){
      }
      else if(args[1].startsWith(2)){
      }
      else if(args[1].startsWith(3)){
      }
      else if(args[1].startsWith(4)){
      }
      else if(args[1].startsWith(5)){
      }
      else if(args[1].startsWith(6)){
      }
      else if(args[1].startsWith(7)){
      }
      else if(args[1].startsWith(8)){
      }
      else if(args[1].startsWith(9)){
      }
      
      if(!args[0]){
        const embederr = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setDescription("<:alert:662430929716903938> You must choose Heads or Tails and coin amount!\n\nExample: -coinflip t 50")
        return message.channel.send(embederr);
      }
      if(!args[1]){
        return message.channel.send(embederr2);
      }
      else{
        var choice = args[0];
        var coinsamount = args[1];
        var coinsamt = parseInt(coinsamount);
        
        if (choice == 'heads' || choice == 'h' || choice == 'head') {
            choice = 'Heads';
        }

        else if (choice == 'tails' || choice == 't' || choice == 'tail') {
            choice = 'Tails';
        }else
          return message.channel.send(embederr)
        } 
    
        
        var coins = [
          "Heads",
          "Tails"
        ];
          var coinz = coins[Math.floor(Math.random() * coins.length)];
        
          var id = message.author.id;
      
          con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
            if(err) throw err;
          
            var coinshave = rows[0].coins;
          
            const errcoins = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Coins**", "You don't have enough <:money:663094285423476775> credits to coinflip with that amount!")
          
            if(coinsamt > coinshave){
              message.channel.send(errcoins);
            }else{
              var coinslose = rows[0].coins - coinsamt;
            var coinswon = rows[0].coins + coinsamt;
        
            const embedlose = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Bot flipped**", coinz)
            .addField("**Coins**", "You lose "+coinsamount+" <:money:663094285423476775> credits!")
          
            const embedlose2 = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Bot flipped**", coinz)
            .addField("**Coins**", "You lose "+coinsamount+" <:money:663094285423476775> credits!")
      
            const embedwin = new Discord.RichEmbed()
	          .setColor('#00ff00')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Bot flipped**", coinz)
            .addField("**Coins**", "You got "+coinsamount+" <:money:663094285423476775> credits!")
          
            const embedwin2 = new Discord.RichEmbed()
	          .setColor('#00ff00')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Bot flipped**", coinz)
            .addField("**Coins**", "You won "+coinsamount+" <:money:663094285423476775> credits!")
          
            if (choice != coinz) {
              message.channel.send(embedlose);
              con.query(`UPDATE userCoins SET coins = ${coinslose} WHERE userID = ${id}`)
            } else {
              message.channel.send(embedwin);
              con.query(`UPDATE userCoins SET coins = ${coinswon} WHERE userID = ${id}`)
            };
          }
        });
      }
}