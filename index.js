/* eslint-disable no-inline-comments */
/* eslint-disable spaced-comment */
console.log('Starting...');

// require the discord.js module and config file
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

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

    // prints messages to the console
    console.log(`(MESSAGE FROM ${message.author.username}) ${message.content}`);

    ////  C O M M A N D S  ////

    // "ping" command //
    if (command === 'ping') {
        message.channel.send('Pong.');
    }
    // "server" command //
    else if (command === 'server') {
        message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    // "user" command //
    else if (command === 'user') {
        message.channel.send(`Your name: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    // "args" command //
    else if (command === 'args') {
        if (!args.length) {
            return message.channel.send(`${message.author}, you didn't provide any arguments.`);
        }
        else if (args[0] === '0') {
            return message.channel.send('1');
        }

        message.channel.send(`First argument: ${args[0]}`);
    }
    // "kick" command //
    else if (command === 'kick') {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first(); // get the first mentioned user
        if (!message.mentions.users.size) { // if no one is mentioned
            return message.reply('you need to tag a user in order to kick them!');
        }
        else {message.channel.send(`Kicked ${taggedUser} (demo)`);} // kick the mentioned user
    }
    else if (command === 'avatar') { // "avatar" command
        if (!message.mentions.users.size) { // if no one is mentioned
            // display the user's avatar (png format or gif format if animated)
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
        }
        const avatarList = message.mentions.users.map(user => { // get mentioned users
            // get avatars of the mentioned user
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
        });
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }
    // delete command //
    else if (command === 'delete') {
        // gets a number from the first argument
        // adds 1 to also delete the user's message with the command
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) { // stop if the first argument is not a number
            return message.reply('that doesn\'t seem to be a valid number.');

        // eslint-disable-next-line brace-style
        } else if (amount <= 1 || amount > 100) { // stop if number is unsupported
            return message.reply('you need to input a number between 1 and 99.');

        // eslint-disable-next-line brace-style
        } else {message.channel.bulkDelete(amount, true).catch(err => { // delete the messages
            console.error(err); // catch any errors in console
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
        }
    }
    ////
});


// login to discord with your bot token
client.login(token);