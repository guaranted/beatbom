module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Bip bop' },
                fields: [
                    { name: 'Kanal', value: track.author, inline: true },
                    { name: 'İsteyen', value: track.requestedBy.username, inline: true },
                    { name: 'Playlist mi?', value: track.fromPlaylist ? 'Evet' : 'Hayır', inline: true },

                    { name: 'İzlenme', value: track.views, inline: true },
                    { name: 'Süre', value: track.duration, inline: true },
                    { name: 'Filtre var mı?', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Ses Seviyesi', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Tekrarlama Modu', value: client.player.getQueue(message).repeatMode ? 'Açık' : 'Kapalı', inline: true },
                    { name: 'Şarkı Durdurulmuş mu?', value: client.player.getQueue(message).paused ? 'Evet' : 'Hayır', inline: true },

                    { name: 'İlerleme', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};