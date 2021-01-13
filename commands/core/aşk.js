const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: 'aşk',
    aliases: ['aşkölçer'],
    category: 'genel',
    utilisation: '{prefix}aşk',
    execute(client, message) {
      
      
      
      let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Evlenecek Kadar Sevgi Var Aranızda.`
    if(anasonuc < 80) {
        var yorum = 'Biraz Daha Uğraşırsan Olacak.'
        
    }
    if(anasonuc < 60) {
        var yorum = 'Eh İşte Arada Trip Atıyor.'
        
    }
    if(anasonuc < 40) {
        var yorum = 'Az Da Olsa Bişeycikler Hissediyor Sana.'
    
    }
    if(anasonuc < 20) {
        var yorum = 'Maalesef Neredeyse İmkansız.'
        
    }
      
      if(anasonuc > 81) {
        var gif = "https://media.tenor.com/images/8a35d0f0a27c40d8886740a8b8e15592/tenor.gif"
      }
      
    if(anasonuc < 80) {
        var gif = 'https://media.tenor.com/images/e5396fee46afed5947595514348670c9/tenor.gif'
        
    }
    if(anasonuc < 60) {
        var gif = 'https://media.tenor.com/images/d7f6849b07da0532c7dc3aab538d42d4/tenor.gif'
        
    }
    if(anasonuc < 40) {
        var gif = 'https://media.tenor.com/images/1255662c238f26f6b19c4ce8a65faa93/tenor.gif'
    
    }
    if(anasonuc < 20) {
        var gif = 'https://media.tenor.com/images/c8f6d1972f6051cf40fec17da7b18a53/tenor.gif '
        
    }
      
      
      
      
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.tag} Ve ${s.tag} Arasındaki Aşk Sonucu.`)
        .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
    .setImage(gif)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
    
    
    
    
    
    }
