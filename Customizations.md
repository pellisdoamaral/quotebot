There are a few easy changes you can make to the bot's code to tailor it to your server's preferences. If you want to make more extensive changes, check out the links at the bottom of the ReadMe file for documentations and an in-depth bot-making tutorial.

**Summoning character**

By default, the bot can be summoned by any message starting with a +. You can change that to any character you want, or indeed to multiple characters, in the config.json file. Just find the "+" and replace it with whatever you want (make sure to put the new summoning character inside double quotes as well), and then restart the bot.

**Error messages**

If someone sends the bot a message it can't parse, its default response is, "That's no way to talk to a hard-working bot." You can change this in the nope.js file in the commands folder. Just change that sentence to whatever you want your error message to be, and then restart the bot or reload the nope command.

There's also a message for actual errors, which is by default "Ah heck, something's gone wrong." To change this, replace that sentence in the index.js file with whatever you want the error message to be, then restart the bot.

**Rename commands**

To change the name of any command, just rename that command's file in the commands folder. For instance, if you want to get quotes by sending +speak, just rename the quote.js file to speak.js. (Whatever you do, don't rename the nope.js file. Things WILL break.)

You can also give a command multiple names, all of which will invoke that command. To do this, go into the code file for that particular command and find the section at the top that lists the name and description. Add a line between those two with this format:

```
aliases: ['alternate-name-1', 'alternate-name-2'],
```

Make sure that you get all the punctuation right. You can have as many alternate names as you want – just put all of them in quotation marks (either single or double will do, just be consistent), in a comma-separated list. (This is also a great workaround for the bot's inability to handle punctuation after commands.)

For instance, if you want to give the quote command a few aliases, the top of the file would look like this: 

```
name: 'quote',
    aliases: ['speak', 'speak!', 'quote!'],
    description: 'spits out a random quote',
```

**Quote citations**

Quotes with attributions will be cited to a username, which can look kind of clunky with some usernames. You can choose instead to hard-code people's names into your code.

In quote.js, which is in the commands folder, look for the namesDict. A dictionary is an object that stores key-value pairs, such that you can find any value in the dictionary by searching for its key. It's a bit like a numbered list, only instead of numbers, the keys can be just about anything. In this case, the values are names, and the keys are unique Discord IDs. 

To get the IDs, you'll have to send the bot a +add message with a @mention for each user in the server. This will save all of these usernames to the pool.json file, which you can then open up and extract the IDs from. For instance, if you send the message +add @gobbleking Jareth, then you'll find an entry in the pool file for "Jareth", with a string of numbers attached. That string of numbers is Jareth's unique Discord ID.

Fill up the names dictionary with your friend's names and IDs, like this:

```
namesDict = {
  "id-1" : "Taako",
  "id-2" : "Magnus",
  "id-3" : "Merle"
};
```

Note that the names and IDs are _all_ encased in quotation marks, and that there's a comma after every entry except the last one.

Then scroll down to the bottom of the quotes file and fine the line that starts with ``cite = message``. Put two slashes // in front of that line, turning it into a comment. Just below it, you'll find a line starting with ``//cite = namesDict``. Remove the two slashes from the start of that line, un-commenting it. (If you ever want to go back to using usernames, instead of the names dictionary, just undo what you did in this paragraph.)

Save the file, reload quote or restart the bot, and quotes will henceforth be cited by name!
