const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkTeug.tFEmKjsi1oFGeQxTERJoaSihjuw');
