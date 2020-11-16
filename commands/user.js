module.exports = {
    name: 'user',
    description: 'User information',
    execute(message, args) {
        message.channel.send(`Your name: ${message.author.username}\n
        Your ID: ${message.author.id}`);
    },
};