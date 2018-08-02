const Discord = require('discord.js');
const client = new Discord.Client();
var isReady = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
            game: {
                name: 'with pepyta\'s duck',
                type: 0
            }
        })
        .then(console.log)
        .catch(console.error);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

});


client.on('message', message => {
    if (isReady && message.content === 'itt vagy?') {
        isReady = false;
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('https://raw.githubusercontent.com/pepyta/robibot/master/itt_vagyok.mp3');
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }
});


client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkSd6g.WT6zQO5nKCQ54AOGXxND4ELwEjU');
