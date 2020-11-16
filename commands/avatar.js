module.exports = {
    name: 'avatar',
    description: 'Show a user\'s avatar',
    execute(message, args) {
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
    },
};