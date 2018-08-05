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

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel


    if (oldUserChannel === undefined && newUserChannel !== undefined) {

        if (isReady) {
            if (newMember.voiceChannel) {
                isReady = false;
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
                                isReady = true;
                            });
                        })
                        .catch(console.error);
                }
            }
        }

    } else if (newUserChannel === undefined) {

        // User leaves a voice channel

    }
});

client.on('message', msg => {
    if (msg.author.client) return;
    if (msg.channel.id == '473941158851248189') {
        var objDate = new Date();
        var hours = objDate.getHours();
        if (hours >= 19 && hours <= 20 && msg.member.id !== '474505133242318849') {
            if (msg.content == '/engedjbepatrik') {
                let role = msg.guild.roles.find("name", "Lávkómás");
                msg.member.addRole(role, msg).catch(console.error);

                msg.reply('Az időpontja egy órán keresztül szól.');

                setTimeout(function () {
                    msg.member.removeRole(role).catch(console.error);
                }, 3600000);
            } else {
                let myRole = msg.guild.roles.find("name", "Lávkómás");
                if (msg.member.roles.has(myRole.id)) {} else {
                    msg.delete();
                    msg.reply('A szerelem doktor számát hívta. Nincs joga ahhoz hogy vele beszélhessen. Kérjen időpontot! (/engedjbepatrik)');
                }
            }
        } else {
            msg.delete();
            msg.reply('A szerelem doktor csak 21-22 közt rendel.');
        }
    }

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

client.login(process.env.TOKEN);
