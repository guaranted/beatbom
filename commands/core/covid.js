const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: 'covid',
    aliases: ['corona'],
    category: 'genel',
    utilisation: '{prefix}covid',
    execute(client, message, args) {
        let countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Eksik Komut')
        .setColor(0xFF0000)
        .setDescription('Ülke belirtmediniz.')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`🌎 Dünya Vakaları`)
                .addField('Onaylanmış Vakalar:', confirmed)
                .addField('İyileşenler:', recovered)
                .addField('Ölümler:', deaths)
                .setColor('RED')

                message.channel.send(embed)
            })
        
          } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`**${countries}** için Covid-19 durumu.`)
                .addField('Onaylanmış Vakalar:', confirmed)
                .addField('İyileşenler:', recovered)
                .addField('Ölümler:', deaths)
                .setColor('RED')

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Yanlış ülke belirttiniz.')
            })
        }
    }
}