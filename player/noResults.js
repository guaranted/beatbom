module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} | ${query} hakkında Youtube'da bir şey bulamadım!`);
};