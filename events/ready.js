module.exports = async (client) => {
    console.log(`${client.guilds.cache.size} sunucu,  ${client.users.cache.size} kullanıcı`);

    client.user.setActivity(client.config.discord.activity);
};