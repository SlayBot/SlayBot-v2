// dont use these commands because theyre shitty af and broken.
const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "credits",
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
        if(err) console.log("Database error:", err);
      });
      
      var id = message.author.id;
      
      con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
        if(err) throw err;
        
        if(!rows[0]) return message.channel.send("You dont have any <:money:663094285423476775> credits on record!\nYou have to use -formatcoins to have a record!");
        
        var coinsx = rows[0].coins;
        
        const embedcoins = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setDescription('<:info:663094315568070657> You have '+coinsx+' <:money:663094285423476775> credits.')
            message.channel.send(embedcoins)
        });     
  }
}