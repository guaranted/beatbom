module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat', 'tekrarla'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} | Tekrarlama **açık**!`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} | Tekrarlama **kapalı**!`);
        };
    },
};