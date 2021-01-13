module.exports = {
    name: 'emoji-ekle',
    aliases: [],
    category: 'yetkili',
    utilisation: '{prefix}emoji-ekle',

    execute(client, message, args) {
   const Discord = require('discord.js');
      const {MessageEmbed} = require('discord.js')
    
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');
if(!args[0]) return message.channel.send('Bir link ve ad yazmalısın. `!emoji-ekle \link\ \ad\`');
if(!args[0].endsWith('.png')) return message.channel.send('Doğru bir link yazmalısın.');
if(!args[1]) return message.channel.send('Bir emoji adı yazmalısın. `!emoji-ekle \link\ \ad\`');
if(['ç', 'ö', 'ü', 'ş', 'İ', 'I', 'ğ', 'Ç', 'Ö', 'Ü', 'Ş', 'Ğ'].includes(args[1])) return message.channel.send('**Emoji adını yazarken Türkçe karakter kullanmamalısın!**');
message.guild.emojis.create(args[0], args.slice(1).join(' ')).then(s => {
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${s.name} adında emoji oluşturuldu. (${s})`)
message.channel.send(embed)
    
    
    
    
    
    
    });

    
    
    
    }
}