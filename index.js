// require the config file (basically an include/import; this command is specific to NodeJS, not all of javascript)
const { prefix, token } = require('./config.json');

const Discord = require('discord.js');
const fs = require('fs');


// create a new Discord client (ie the bot)
const client = new Discord.Client();


// when the bot is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});


// dynamically set commands from the commands folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// this event will trigger every time a message is sent in the server
client.on('message', message => {

    // if message doesn't start with the prefix OR was sent by a bot, ignore it utterly
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // turn the incoming message into an array of args, split by whitespace (the prefix gets sliced)
    const args = message.content.slice(prefix.length).trim().split(' ');
    // pop off the top arg (shift) and toLowerCase it; this first arg is the command
    var commandName = args.shift().toLowerCase();

    // did the user even say anything other than the prefix? if not, return
    if (!commandName) {
        return message.channel.send("You called?");
    }

    // this line goes to the client.commands collection, finds the right command, and stores it in the 'command' var.
    // the 'or' part looks through the commands and picks one IF: a. it has aliases and b. its aliases include commandName
    command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // check if we actually found a command with this name; if not, use the 'error message' command
    if (!command) {
        command = client.commands.get("nope")
    }

    // finally, we get down to business
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send("Ah heck, something's gone wrong.")
    }
});

// log in to Discord with your app's token
client.login(token);
