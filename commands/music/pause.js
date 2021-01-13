module.exports = {
    name: 'pause',
    aliases: ['durdur'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} | Bu şarkı zaten duraklatılmış!`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} | ${client.player.getQueue(message).playing.title} duraklatıldı!`);
    },
};