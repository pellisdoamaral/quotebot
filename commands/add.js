module.exports = {
    name: 'add',
    description: 'adds a quote to the pool',
    execute(message, args) {

        if (!args.length) {
            return message.channel.send(`I don't know what you want from me here.`);
        }

        pool = require('../pool.json');
        fs = require('fs');

        // if there's a username attached to the quote, catch it
        cite = '';
        if (args[0].startsWith('<@') && args[0].endsWith('>')){

            // extract the user ID from the mention
            cite = args.shift();
            cite = cite.slice(2, -1);
            if (cite.startsWith('!')) {
                cite = cite.slice(1);
            }
        }

        // if they just sent a username and nothing else, tell them off
        if (!args.length) {
            return message.channel.send(`I don't know what you want from me here.`);
        }

        // put the quote string back together from the args array
        var quote = args[0];
        for (let i = 1; i <= args.length - 1; i++) {
            quote += ' ';
            quote += args[i];
        }

        // put the quote & username (if present; if not, an empty string) in the pool
        pool[quote] = cite;

        //save the whole pool
        fs.writeFile('./pool.json', JSON.stringify(pool, null, 2), function(err) {
            if (err){
                console.log(err);
            }
        });

        return message.channel.send('Quote added!');
    },
};