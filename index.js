const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
            game: {
                name: 'with pepyta\'s kolbice'
            },
            status: 'online'
        })
        .then(console.log)
        .catch(console.error);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkTeug.tFEmKjsi1oFGeQxTERJoaSihjuw');
