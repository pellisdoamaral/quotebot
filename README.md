# quotebot
This is code for a Discord bot that you can run on your computer. Whenever someone says something fun in your group chat, you can chuck it at the bot and it'll be saved to a pool of quotes. The bot can then be summoned to get a random quote from the pool.

It's meant for small servers; I have no idea how the functionality scales to really large groups. I don't expect there would be any problems beyond the unwieldy size of the quote pool, but I can make no promises.




There are three steps to getting this bot up and running on your server:
1) Create a Discord Bot Application and invite the bot to your server
2) Download all the files in this git repo to your computer
3) Install NodeJS and run the bot

Read on for detailed instructions! 


Create a Discord Bot Application
------------------------

Use your regular Discord account to log in to <a href=https://discord.com/developers/applications/>Discord's developer portal</a>.

Once there, click on the blue button in the top right corner of the screen to make a New Application. Name it whatever you like! 
Clicking "Create" will take you to an app page where you can add an icon, change the bot's name, add a description, and so on. 

This will make a Discord Application, which is not quite a bot. We're going to add a bot to this application, which means  On the left side of the screen, you'll find a list of Settings pages. Currently you're on "General Information"; click on "Bot" to go to the bot settings page, and then click the button to Add Bot.

On the bot page, right under the Username field, you'll see the word "Token" and a blue text saying "Click to reveal token". We'll need this later - the bot token is basically the bot's password to log into Discord.

Now that you have a live bot, you need to invite it to your server. The simplest way to do this is to generate a bot url. Click on OAuth2 on the left side of the screen to go to the authentication page, and scroll down. You'll see a bunch of checkboxes in a box labeled "Scopes" – select the one for "bot" and ignore all the rest. Now scroll down some more, and you'll find a box of bot permissions. Check the options for "Send Messages" and "Read Message History." This bot does not need any other permissions, and in general it's good practice not to allow applications more permissions than they need to function normally. For safety reasons, you know.

Now look at the bottom of the "Scopes" box, where there's a text field. A url will have auto-generated there. Paste that url into your web browser, and you'll be able to add the bot to any server where you have permission to add users.



---
This is the first time I've ever touched JavaScript, so I followed <a href=https://discordjs.guide/>this incredibly helpful tutorial for all of the setup</a>. Also helpful was the <a href=https://discordjs-fork.readthedocs.io/en/latest/index.html>discord.js documentation</a> and the <a href=https://discord.com/developers/docs/intro>Discord developer documentation</a>.
