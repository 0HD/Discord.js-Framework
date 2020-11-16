module.exports = {
    name: 'server',
    description: 'Server information',
    execute(message, args) {
        message.channel.send(`Server: ${message.guild.name}\n
        Total members: ${message.guild.memberCount}`);
    },
};