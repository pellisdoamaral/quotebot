module.exports = {
    name: 'nope',
    description: 'user said some nonsense',
    execute(message, args){

        // the user sent the bot a nonsense command
        
        // change the contents of toSend to change the error message
        toSend = `That's no way to talk to a hard-working bot.\n`;
        return message.channel.send(toSend);

    },
};
