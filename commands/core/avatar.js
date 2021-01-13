const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    category: 'genel',
    utilisation: '{prefix}avatar',

    execute(client, message) {
   let Embed = new MessageEmbed()
   if(!message.mentions.users.first()) {
     Embed.setImage(message.author.displayAvatarURL({dynamic : true, size : 512}))
     Embed.setColor("RANDOM")
     Embed.setAuthor('İşte avatarınız.')
     Embed.setFooter(message.member.displayName +  ' tarafından istendi ')
     Embed.setTimestamp()
     return message.channel.send(Embed)
   } else {
     let User = message.mentions.users.first()
     Embed.setImage(User.displayAvatarURL({dynamic : true, size :512}))
     Embed.setColor("RANDOM")
     Embed.setFooter(message.member.displayName +   ' tarafından istendi ')
     Embed.setTimestamp()
     return message.channel.send(Embed)
   }
  }
}
