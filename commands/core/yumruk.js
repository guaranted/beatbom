const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: 'yumruk',
    aliases: [],
    category: 'eğlence',
    utilisation: '{prefix}yumruk',
    execute(client, message, args) {
      
      
      
       if (!message.mentions.users.first()) return message.reply("Birini etiketlemelisin"); //if no one is mentions , lets reply as
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('https://media.tenor.com/images/e8168c4b7f61d6428b35a8d85c3209b9/tenor.gif');
      
      
      
      
   

const resim = ['https://media.tenor.com/images/b6a5e629bf02c52979dc348bafc1c0c8/tenor.gif',

'https://media.tenor.com/images/84f3292dc09119aba08638f679aaee97/tenor.gif' ,

'https://media.tenor.com/images/07107874d4e4ccc6bc63108a19fc8bab/tenor.gif' ,

'https://media.tenor.com/images/b3701dcada582b6980d4efb9fd8efc7b/tenor.gif' ,

'https://media.tenor.com/images/00a3cca756b4bbae191ac33ccc6d7bcf/tenor.gif' ,

'https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif',
               
'https://media.tenor.com/images/3d95f0ee1f044518cbfd3f4ee12d26bd/tenor.gif',

    'https://media.tenor.com/images/18872fc3b8090ce5c7b486665b30cf58/tenor.gif',
               
               'https://media.tenor.com/images/38f765c3ab17364391febf1d985590fb/tenor.gif',
               'https://media.tenor.com/images/95fadce08619136ec90dc820aaf405a1/tenor.gif',
               'https://media.tenor.com/images/7d03adfffcc15f5491e2031d06fde73b/tenor.gif'
               
]
    
   message.channel.send(

  new Discord.MessageEmbed()

  .setColor("RANDOM")

  

  .setImage(resim[Math.floor(Math.random() * resim.length)])
  
  

  .setTimestamp()

  )

}
    
    
    
    
    
    }
