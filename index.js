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
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            // check if there is already a voice connection
            if (message.member.voiceChannel.connection) {
                console.log('conn status: ' + message.member.voiceChannel.connection.status);
            }
            console.log('is joinable: ' + message.member.voiceChannel.joinable);
            if (message.member.voiceChannel.joinable) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        message.reply('I have successfully connected to the channel!');
                        const dispatcher = connection.playFile('./itt_vagyok.mp3');
                        dispatcher.on('end', () => {
                            // The song has finished
                        });
                    })
                    .catch(console.error);
            }
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
});



client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel


    if (oldUserChannel === undefined && newUserChannel !== undefined) {


        if (newMember.voiceChannel) {
            // check if there is already a voice connection
            if (newMember.voiceChannel.connection) {
                console.log('conn status: ' + newMember.voiceChannel.connection.status);
            }
            console.log('is joinable: ' + newMember.voiceChannel.joinable);
            if (newMember.voiceChannel.joinable) {
                newMember.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        const dispatcher = connection.playFile('./itt_vagyok.mp3');
                        dispatcher.on('end', () => {
                            // The song has finished
                        });
                    })
                    .catch(console.error);
            }
        }

    } else if (newUserChannel === undefined) {

        // User leaves a voice channel

    }
})

client.login(process.env.TOKEN);
