module.exports = {
    name: 'sesli',
    aliases: [],
    category: 'bilgi',
    utilisation: '{prefix}sesli',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} botunun bağlı olduğu sesli kanal sayısı: **${client.voice.connections.size}**!`);
    },
};