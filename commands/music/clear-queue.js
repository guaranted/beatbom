module.exports = {
    name: 'clear-queue',
    aliases: ['liste-temizle'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} | Liste temizlendi!`);
    },
};