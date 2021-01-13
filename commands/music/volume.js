module.exports = {
    name: 'volume',
    aliases: ['ses'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {

        if(!client.guilds.cache.get("796029652014465044").members.cache.get(message.author.id).roles.cache.has("798811837612425267")) return message.channel.send("Bu komutu kullanmak için **Premium** olman lazım!");

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} | Bir değer gir!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} | 1 ve 100 arasında bir sayı girmen gerek!`);

        client.player.setVolume(message, args[0]);

        message.channel.send(`${client.emotes.success} | Ses  **${parseInt(args[0])}%** seviyesine ayarlandı!`);
    },
};