module.exports = {
    name: 'delete',
    description: 'Deletes up to 100 messages in one go',
    execute(message, args) {
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
    },
};