module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} | Bir değer belirtmedin. Komutu tekrar dene!`);
};