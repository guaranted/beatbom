module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} | Çalan şarkı yok!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} | Sesli kanalda değilsin!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} | Bulunduğun kanala bağlanamıyorum!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} | Ups. Bir hata oluştu : ${error}`);
    };
};
