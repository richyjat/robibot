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
    if (msg.channel.id == '473941158851248189') {
        if (msg.content == '/engedjbepatrik') {
            let role = msg.guild.roles.find("name", "Lávkómás");
            msg.member.addRole(role).catch(console.error);

            /*var d = new Date() + 3600000;
            var m = d.getMinutes();
            var h = d.getHours();
            var day = d.getDay();
            var month = d.getMonth();
            var year = d.getYear();

            msg.reply(`Az időpontja ${year}. ${month}. ${day}. ${h}:${m}-ig szól.`);*/

            msg.reply('Az időpontja egy órán keresztül szól.');

            setTimeout(szerelemdoktorremove(role), 3600000);
        } else {
            let myRole = msg.guild.roles.find("name", "Lávkómás");
            if (msg.member.roles.has(myRole.id)) {} else {
                msg.delete();
                msg.reply('A szerelem doktor számát hívta. Nincs joga ahhoz hogy vele beszélhessen. Kérjen időpontot! (/engedjbepatrik)');
            }
        }
    }
});

function szerelemdoktorremove(role) {
    member.removeRole(role).catch(console.error);
}

client.login(process.env.TOKEN);
