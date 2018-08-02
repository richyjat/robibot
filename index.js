const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
client.user.setPresence({ activity: { name: 'with pepyta\'s duck' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDc0NTA1MTMzMjQyMzE4ODQ5.DkSd6g.WT6zQO5nKCQ54AOGXxND4ELwEjU');