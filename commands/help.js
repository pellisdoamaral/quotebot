module.exports = {
    name: 'help',
    description: 'help menu for everyone',
    execute(message, args) {

        config = require('../config.json');

        // build help text
        helpText = `These are your options:\n`;
        helpText += `\`` + config.prefix + `quote\`: spits out a random quote from the pool\n`;
        helpText += `\`` + config.prefix + `add\` *followed by text:* saves that text as a quote to the pool\n`;
        helpText += `\`` + config.prefix + `add @username\` *followed by text:* saves that text as a quote cited to that user\n`;
        helpText += `\`` + config.prefix + `fuckor\`: experience fuckor\n`;
        helpText += `\`` + config.prefix + `clear\`: dodge spoilers\n`;
        
        // send help text
        return message.channel.send(helpText);

    },
};
