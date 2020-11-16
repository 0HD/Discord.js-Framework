module.exports = {
    name: 'args',
    description: 'Command arguments testing',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`${message.author}, you didn't provide any arguments.`);
        }
        else if (args[0] === '0') {
            return message.channel.send('1');
        }

        message.channel.send(`First argument: ${args[0]}`);
    },
};