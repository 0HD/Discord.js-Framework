module.exports = {
    name: 'kick',
    description: 'Kick a member off the server',
    execute(message, args) {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first(); // get the first mentioned user
        if (!message.mentions.users.size) { // if no one is mentioned
            return message.reply('you need to tag a user in order to kick them!');
        }
        else {message.channel.send(`Kicked ${taggedUser} (demo)`);} // kick the mentioned user
    },
};