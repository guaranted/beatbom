module.exports = {
    name: 'help',
    aliases: ['yardım'],
    category: 'genel',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Yardım Paneli' },
                    footer: { text: 'Bip bop' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Şarkı', value: music },
                        { name: 'Filtre', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Filtre kullanımı, ${client.config.discord.prefix}filtre. Örnek : ${client.config.discord.prefix}filtre 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Komutu bulamadım!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Yardım Paneli' },
                    footer: { text: message.member.displayName +   ' tarafından istendi ' },
                    fields: [
                        { name: 'İsim', value: command.name, inline: true },
                        { name: 'Kategori', value: command.category, inline: true },
                        { name: 'Diğer Kullanımlar', value: command.aliases.length < 1 ? 'Yok' : command.aliases.join(', '), inline: true },
                        { name: 'Kullanım', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: '31',
                }
            });
        };
    },
};