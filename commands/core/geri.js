module.exports = {
    name: 'geri-gelsin',
    aliases: [],
    category: 'eğlence',
    utilisation: '{prefix}geri-gelsin',

    execute(message, args) {


const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");
      
      let sonuç = ["``%10``\nZor ama, imkansız değil.","``%20``\nGelmez be kardeşim uğraşma..","``%40``\nGeledebilir, gelmeyedebilir.","``%60``\nGelicek sanırım ya.","``%80``\nGelmesi lazım artık. ","``%100``\nGelmiş bile, bir dm kutusuna bak derim."];
    let result = Math.floor((Math.random() * sonuç.length));
    let gerigelsin = new MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField("Gelir mi acaba?", sonuç[result]);
      
  
    message.channel.send(gerigelsin);
}
}