/* eslint-disable no-inline-comments */
/* eslint-disable spaced-comment */

console.log('Starting...');

// imports modules and config file
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    // prints to the console when it's ready
    console.log('Ready.');
});

// when the client receives a message
client.on('message', message => {

    // checks if a message is prefixed, then arranges the arguments into "args"
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // puts all arguments from the message (separated by spaces) into an array
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    // puts the command name into a variable
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'args') {
        client.commands.get('args').execute(message, args);
    }
    else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args);
    }
    else if (command === 'delete') {
        client.commands.get('delete').execute(message, args);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'server') {
        client.commands.get('server').execute(message, args);
    }
    else if (command === 'user') {
        client.commands.get('user').execute(message, args);
    }

    // prints messages to the console
    console.log(`(MESSAGE FROM ${message.author.username}) ${message.content}`);
});


// login to discord with your bot token
client.login(token);