module.exports = {
    name: 'queue',
    aliases: ['liste', 'kuyruk'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        message.channel.send(`**Server Listesi - ${message.guild.name} ${client.emotes.queue}**\n Çalan : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (İsteyen : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `ve **${queue.tracks.length - 5}** diğer...` : `Listede **${queue.tracks.length}** şarkı var`}`));
    },
};