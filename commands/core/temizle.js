module.exports = {
    name: 'temizle',
    aliases: ['sil'],
    category: 'yetkili',
    utilisation: '{prefix}temizle',
    execute(client, message, args) {
   
   
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  
  message.channel.bulkDelete(args[0]).then(() => {
    message.reply(`✔️  ${args[0]} tane mesaj silindi`)
  })
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['temizle'],
    permLevel: 0
}

