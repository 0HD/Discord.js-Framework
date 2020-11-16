console.log("Starting...")

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    // prints to the console when it's ready
    console.log('Ready.');
});
////

// when the client receives a message
client.on('message', message => {
    // prints messages to the console
    console.log(`(MESSAGE FROM ${message.author.username}) ${message.content}`);
    ////

    // sends a response message when someone sends a command
    if (message.content === (`${prefix}ping`)) {
        message.channel.send('Pong.'); // response to "!ping"
    } else if (message.content === (`${prefix}beep`)) {
        message.channel.send('Boop.'); // response to "!beep"
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if (message.content === `${prefix}user`) {
        message.channel.send(`Your name: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    ////
});


// login to discord with your bot token
client.login(token);