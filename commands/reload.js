module.exports = {
    name: 'reload',
    description: 'lets me reload commands without shutting down the bot',
    execute(message, args){

        // make sure an arg is sent
        if (!args.length) return message.channel.send("You gotta give me a little more to work with.");

        // get the command name & ensure it's actually real
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName);
        if (!command) return message.channel.send("That's not a real command.");

        // ok now we can delete the cached version of the command
        delete require.cache[require.resolve(`./${command.name}.js`)];

        // and load the updated version
        try {
            const updatedCommand = require(`./${command.name}.js`);
            message.client.commands.set(updatedCommand.name, updatedCommand);
            message.channel.send(`Command \`${command.name}\` has been reloaded!`);
        } catch (err){
            console.error(err); 
            message.channel.send(`<@!159076356028628992>! There was an error while reloading the command \`${command.name}\`:\n\`${err.message}\``);
        }

        return;
    },
};
