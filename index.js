/* eslint-disable no-inline-comments */
/* eslint-disable spaced-comment */
console.log('Starting...');

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
// //


// when the client receives a message
client.on('message', message => {

    // checks if a message is prefixed, then arranges the arguments into "args"
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    // using the new `command` variable, this makes it easier to manage!
    // you can switch your other commands to this format as well

    // prints messages to the console
    console.log(`(MESSAGE FROM ${message.author.username}) ${message.content}`);
    ////

    // sends a response message when someone sends a command
    if (message.content === (`${prefix}ping`)) { // "ping" command
        message.channel.send('Pong.');
    }
    else if (message.content === (`${prefix}beep`)) { // "beep" command
        message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}server`) { // "server" command
        message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if (message.content === `${prefix}user`) { // "user" command
        message.channel.send(`Your name: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    else if (command === 'args') { // "args" command
        if (!args.length) {
            return message.channel.send(`${message.author}, you didn't provide any arguments.`);
        }
        else if (args[0] === '0') {
            return message.channel.send('1');
        }

        message.channel.send(`First argument: ${args[0]}`);
    }
    else if (command === 'kick') { // "kick" command
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        message.channel.send(`Kicked ${taggedUser} (demo)`);
    }

    ////
});


// login to discord with your bot token
client.login(token);