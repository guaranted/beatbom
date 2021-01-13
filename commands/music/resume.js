module.exports = {
    name: 'resume',
    aliases: ['devam'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynu sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} | Bu şarkı zaten devam ediyor!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} | ${client.player.getQueue(message).playing.title} devam ediyor!`);
    },
};