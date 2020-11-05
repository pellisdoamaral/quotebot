module.exports = {
    name: 'quote',
    description: 'spits out a random quote',

    execute(message, args) {

        namesDict = {
          'user id' : 'name'
        }; 

        // get pool from the json file where it resides (or throw an error if it's missing)
        try {
            pool = require('../pool.json');
        } catch {
            return message.channel.send("You appear to have lost the quotes file. \nMake sure it's named pool.json, and that it's in the same place as the commands folder.")
        }

        // get keys array (ie quotes array)
        keyArray = Object.keys(pool);

        if (!Array.isArray(keyArray) || !keyArray.length) return message.channel.send('THERE ARE NO QUOTES!!!! WHERE DID THEY GO????');

        // get a random quote from the keys array
        toSend = keyArray[Math.floor(Math.random() * keyArray.length)];

        // if there's a citation, add it at the end of toSend
        if (pool[toSend] != ''){

            // get the username from discord
            cite = message.channel.guild.members.cache.get(pool[toSend]).user.username;

            // use the names dict
            //cite = namesDict[pool[toSend]];

            // add the citation to the end of the quote
            toSend = toSend + '  *\u2014' + cite + '*';

        }


        return message.channel.send(toSend);
    },
};
