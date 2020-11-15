// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const config = require('./config.json');
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// Sends any message it sees to the console
client.on('message', message => {
    console.log(`(MESSAGE FROM ${message.author}) ${message.content}`);
    
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});


// login to Discord with your app's token
client.login(config.token);