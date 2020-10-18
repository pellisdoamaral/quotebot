module.exports = {
    name: 'poolsync',
    description: 'syncs up pool and poolCopy',
    execute(message, args) {

        fs = require('fs');

        // delete the cached pool
        try {
            delete require.cache[require.resolve('../pool.json')];
        } catch (err) {
            return message.channel.send("There is no pool to update. This is bad! Major error!!");
        }

        // delete the cached poolCopy
        try {
            delete require.cache[require.resolve('../poolCopy.json')];
        } catch (err) {
            return message.channel.send("There is no poolCopy file, so I have nothing to update with.");
        }

        
        // load up the current versions of both files
        pool = require('../pool.json');
        poolCopy = require('../poolCopy.json');


        keysArray = Object.keys(poolCopy);

        // run through poolCopy and put everything in it into pool. there should be no duplicates,
        // since anything that's already in pool will just be 'updated'.
        // (there is a danger of overwriting a citation, if a quote is cited to a different person 
        // in each version)
        for (var i = 0; i < keysArray.length; i++){
            pool[keysArray[i]] = poolCopy[keysArray[i]];
        }

        // save the updated pool to the file
        fs.writeFile('./pool.json', JSON.stringify(pool, null, 2), function(err) {
            if (err){
                console.log(err);
            }
        });

        return message.channel.send('pool has been updated');
    },
};
