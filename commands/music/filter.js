module.exports = {
    name: 'filter',
    aliases: ['filtre'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} | Lütfen **etkinleştirmek** veya **devre dışı** bırakmak için bir şey belirtin!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} | Bu filtre çalışmadı! Denemen gereken (8D, vibrato, pulsator...)!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} | Bu filtreyi şarkıya **ekledim**! Lütfen biraz bekle! Not : Şarkı ne kadar uzunsa filtre o kadar sürer!`);
        else message.channel.send(`${client.emotes.music} |  Bu filtreyi şarkıdan **çıkardım**! Lütfen biraz bekle! Not : Şarkı ne kadar uzunsa filtre o kadar sürer!`);
    },
};