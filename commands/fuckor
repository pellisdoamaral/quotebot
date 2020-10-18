module.exports = {
    name: 'fuckor',
    description: 'grabs a quote cited to you',

    execute(message, args){

        const pool = require('../pool.json');

        // get the sender's user ID
        sender = message.author.id;

        // get an array of all quotes sourced to the sender
        keysArray = Object.keys(pool);
        quotes = []
        for (var i = 0; i < keysArray.length; i++){
            if (pool[keysArray[i]] === sender){
                quotes.push(keysArray[i])
            }
        }

        // get a random quote
        if (quotes.length > 0){
            toSend = quotes[Math.floor(Math.random() * quotes.length)];
        }
        else { // unless there are none
            toSend = 'There is nothing memorable attached to your name.';
        }

        return message.channel.send(toSend);

    },
};
