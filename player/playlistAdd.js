module.exports = (client, message, playlist) => {
    message.channel.send(`${client.emotes.music} | ${playlist.title} listeye eklendi (**${playlist.items.length}** songs) !`);
};