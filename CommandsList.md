If you look in the folder called "commands", you'll see a bunch of .js files. The title of each file is a command you can send the bot. Commands are not case-sensitive, but they don't play well punctuation – +quOTE is fine, but +quote! will not work.

**quote**

_get a random quote from the pool of stored quotes_


**add**

_add a quote to the pool of stored quotes_

Type +add, followed by _exactly_ what you want to store as a quote. Formatting will be preserved.

> +add One does not simply _walk_ into Mordor.

Optionally, @mention someone before you write the quote, to attribute that quote to them:
> +add @Boromir One does not simply _walk_ into Mordor.


**fuckor**

_grabs a quote cited to the sender_

Anyone who sends +fuckor to the bot will be presented with a random quote attributed to them. This function is named after [that tumblr post](https://fireballandfailure.tumblr.com/post/168986071680/kaylapocalypse-ysera-horreurscopes).


**clear**

_fills up the screen, hiding previous messages_

Specifically, it fills up the screen with periods. I tried just doing newlines, but it turns out that doesn't work on Android phones, which just correct it to a single newline, defeating the entire purpose.


**cookie**

_give the bot a cookie! bots love cookies_


**help**

_help menu_

The help menu only lists the commands above this point. The rest are not meant for casual use.


**reload**

_reload a command's code_

If you change the bot's code while the bot is already running, the changes won't take effect unless you either kill and restart the bot, or reload whatever command you were editing. For instance, if you make changes in quote.js:

> +reload quote

This really isn't necessary – it's easy and fast to just restart the bot – but it's handy when you're troubleshooting. Do note, however, that this only works for command files. If you make changes to index.js, you'll just have to restart the bot. 


**poolSync**

_sync up two pool files_

If you run this bot on two computers, and the computers are online at different times, then the bots' quote pools will end up out of sync with each other. To resynchronize them, get a copy of the other computer's pool.json file, rename it to poolCopy.json, and put it in the bot folder right next to index.js. Then, in Discord, send the command +poolSync. This will run through poolCopy.json, look for any quotes not stored in pool.json, and then store them in pool.json. At the end of this, pool.json will contain a complete list of all the quotes in both files. Throw away poolCopy.json, and send your buddy the updated pool. (If you're running the bot on more than two computers, gather up all the pool files, and then do this process with each of them, one at a time.) 

How frequently you run poolSync really depends on how quickly the two bots become out of sync with each other, and how much of a problem it is. My groupchat has the bot running on two computers, and we sync up about once a month. 

Incidentally, you can also run this without a poolCopy file. In that case, it'll behave exactly like the reload command, described above, except what it'll reload is the pool.


**nope**

_error response for when user types in a bad command_

When the bot gets a message that isn't a valid command, this is the command that runs.

