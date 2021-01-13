module.exports = {
    name: 'ping',
    aliases: [],
    category: 'bilgi',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`:table_tennis: Pong! Botun pingi **${client.ws.ping}ms**!`);
    },
};