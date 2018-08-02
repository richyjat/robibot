const Discord = require('discord.js');
const client = new Discord.Client();
var sucky = 'pepyta';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
            game: {
                name: 'with ${sucky}\'s kolbice'
            },
            status: 'online'
        })
        .then(console.log)
        .catch(console.error);
});

client.on('message', msg => {
    if (msg.content === 'sucky sucky') {
        msg.reply('10 dollars!');
    } else if (msg.content === '10 dollars') {
        msg.reply('I sucky sucky');
        var sucky = msg.author;
        
        client.user.setPresence({
            game: {
                name: 'with ${sucky}\'s kolbice'
            },
            status: 'online'
        })
        .then(console.log)
        .catch(console.error);
        
    }
});

client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkTeug.tFEmKjsi1oFGeQxTERJoaSihjuw');
