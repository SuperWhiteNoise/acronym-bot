//Dependencies
const Discord = require('discord.js');
const config = require('./config.json');
const { acronyms } = require('./acronyms.js');

//Launch bot section
const acronymBot = new Discord.Client();
acronymBot.on(`ready`, () => {
    console.log(`acronymBot Started...`);
});
acronymBot.login(config.token);

//Bot messaging section
acronymBot.on(`message`, (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(config.prefix)) return;

    switch (command) {
        case "a":
            let acronym = args.join(" ");
            if (args.length == 0) {
                const acronymMessage = new Discord.MessageEmbed()
                    .setColor('#0000FF')
                    .setDescription(`${message.author.username}, that command requires an acronym to work.`)
                    .addFields(
                        { name: `eg. Try !ac FOMO`, value: "Fear of Missing Out" }
                    )
                message.channel.send(acronymMessage);
                return;
            }
            if (acronym === 'help') {
                const acronymHelp = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle(`__Acronym Bot Help__`)
                    .setDescription(`Hello ${message.author.username}, I'm here to help you with any g4m acronyms. Just enter an acronym prefixed with "!a" and I'll try to tell you more. Here are some example commands...`)
                    .addFields(
                        { name: `Acronym Example Commands:`, value: `!a CDO, !a PA` },
                    )
                message.channel.send(acronymHelp);
                return;
            }

            let acronymMatch = acronyms.filter(acronyms => acronyms.ac === acronym);

            const acronymMessage = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle(`__Acronym Found__`)
                .setDescription(`You searched for : ${acronym}`)
                .addFields(
                    { name: `${acronymMatch[0].ac} means : ${acronymMatch[0].desc}\n${acronymMatch[0].link}` }
                )
            message.channel.send(acronymMessage);
            break;
    }
});