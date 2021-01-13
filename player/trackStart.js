module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} | Çalan: ${track.title}\n Kanal: ${message.member.voice.channel.name} ...`);
};