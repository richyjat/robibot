const Discord = require('discord.js');
const client = new Discord.Client();
var sucky = 'pepyta';
var isReady = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
            game: {
                name: `with ${sucky}\'s kolbice`
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
        sucky = msg.author.username;

        client.user.setPresence({
                game: {
                    name: `with ${sucky}\'s kolbice`
                },
                status: 'online'
            })
            .then(console.log)
            .catch(console.error);

    }
});

client.on('message', message => {
    if (isReady && message.content === 'reee') {
        isReady = false;
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('./itt_vagyok.mp3');
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        });
    }
});

client.login(process.env.TOKEN);
