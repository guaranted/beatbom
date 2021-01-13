module.exports = {
    name: 'ban',
    aliases: ['uçur'],
    category: 'yetkili',
    utilisation: '{prefix}ban',
    execute(client, message, args) {
      
      var gif = ['https://tenor.com/view/kivanc-kuzey-gif-9197199',
                'https://media.giphy.com/media/hc4EQws8rmUPdUGcWy/giphy.gif',
                 'https://media.giphy.com/media/hc4EQws8rmUPdUGcWy/giphy.gif'
                ]
      
      let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('Lütfen sebep giriniz');
      
       const user = message.mentions.users.first();
   
    if (user) {
      
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        
        member
          .ban({
            
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(gif[Math.floor(Math.random() * gif.length)]);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
          if(member.id === "771674804909637632") return message.reply('Beni banlayamazsın :)')
      if(member.id === message.author.id) return message.reply('Kendini banlayamazsın!')
      if(member.id === "432150936534646805") return message.reply('Sahibi banlayamazsın.')
          
          
            message.reply('Üyeyi banlayamadım./Benden daha yüksek bir rolü olabilir.');
          
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Üyeyi bulamadım");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Banlamam için birini etiketlemen lazım!");
    }
  }
}