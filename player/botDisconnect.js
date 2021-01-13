module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} | Şarkı bittiği için kanaldan ayrıldım!`);
};