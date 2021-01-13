module.exports = {
    name: 'play',
    aliases: ['p', 'oynat'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | Aynı sesli kanalda değiliz!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} | Bir müzik seç!`);

        client.player.play(message, args.join(" "));
    },
};