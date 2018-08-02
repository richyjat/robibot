const Discord = require('discord.js');
const client = new Discord.Client();

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


client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            const dispatcher = connection.play('https://raw.githubusercontent.com/pepyta/robibot/master/itt_vagyok.mp3');

            dispatcher.on('finish', () => {
                console.log('Finished playing!');
            });

            dispatcher.destroy(); // end the stream
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
});

client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkSd6g.WT6zQO5nKCQ54AOGXxND4ELwEjU');
