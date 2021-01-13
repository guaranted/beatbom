module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send(`${client.emotes.error} | **1** ve **${tracks.length}** arasında bir değer belirt!`);
};