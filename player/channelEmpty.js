module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} | Kanalda kimse olmadığı için ayrıldım!`);
};