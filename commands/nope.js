module.exports = {
    name: 'nope',
    description: 'user said some nonsense',
    execute(message, args){

        // the user sent the bot a nonsense command

        toSend = `That's no way to talk to a hard-working bot.\n`;
        return message.channel.send(toSend);

    },
};
