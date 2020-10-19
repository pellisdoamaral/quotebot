# quotebot
This is code for a Discord bot that you can run on your computer. Whenever someone says something fun in your group chat, you can chuck it at the bot and it'll be saved to a pool of quotes. The bot can then be summoned to get a random quote from the pool.

(Note: this group chat needs to be in a server, not just a group DM. The bot likes servers.)

There are three steps to getting this bot up and running:
1) Create a Discord Bot Application and invite the bot to your server
2) Download this git repo and set the bot token
3) Install NodeJS and DiscordJS, then run the bot!


Create a Discord Bot Application
------------------------

**Quick version for experienced users:**

Make a Discord bot in the <a href=https://discord.com/developers/applications/>developer portal</a> and invite it to your server, with permissions to send messages and read message history.

**For those unfamiliar with making Discord bots:**

Use your regular Discord account to log in to <a href=https://discord.com/developers/applications/>Discord's developer portal</a>.

Once there, click on the blue button in the top right corner of the screen to make a New Application. Name it whatever you like! 
Clicking "Create" will take you to an app page where you can add an icon, change the bot's name, add a description, and so on. 

At this point you've made a Discord Application, which is not quite a bot. On the left side of the screen, you'll find a list of Settings pages. Currently you're on "General Information"; click on "Bot" to go to the bot settings page, and then click the button to Add Bot.

On the bot page, right under the Username field, you'll see the word "Token" and a blue text saying "Click to reveal token". A bot interacts with Discord a lot like a human user, which means it needs to log in, and the bot token is the bot's password. We'll need this later.

Now that you have a live bot, you need to invite it to your server. The simplest way to do this is to generate a bot url. Click on "OAuth2" on the left side of the screen to go to the authentication page, and scroll down. You'll see a bunch of checkboxes in a box labeled "Scopes" – select the one for "bot" and ignore all the rest. Now scroll down some more, and you'll find a box of bot permissions. Check the options for "Send Messages" and "Read Message History." This bot does not need any other permissions, and in general it's good practice not to allow applications more permissions than they need to function normally. For safety reasons, you know.

Now look at the bottom of the "Scopes" box, where there's a text field. A url will have auto-generated there. Paste that url into your web browser, and you'll be able to add the bot to any server where you have permission to add users.



Download the Bot Files
----
This one's pretty straightforward. At the top of this repository's main page, just above the file list and on the right hand side, is a green button that says "Code". Click on it for a dropdown menu, and pick the last item on that menu, "Download zip". This will download the whole repository to your computer as a zipped file.

On Mac, you can unzip the file by opening it with the Archive Utility, which should be the default option. On Windows, right-click on the zipped file and select "Extract All". On Linux, right click on the file and select "Extract Here".

The file will unzip into a folder containing all the bot's files. Put that folder somewhere handy – wherever you want it to live long-term – before moving on to the next step. (Nothing bad happens if you don't, you'll just have to do the whole command line navigation all over again once you move it to its permanent home.)

**IMPORTANT:** The bot folder contains a file called "config.json". Open that file in a text editor and replace the string "[your bot token here]" with the bot token from the bot's page on the developer portal. Make sure that the bot token is within "double quotation marks." 



Install Packages and Run the Bot
------

**Quick version for more experienced users:**

Download NodeJS from <a href=https://nodejs.org/en/>its website</a> (the "Recommended" version will do). In the command line, navigate into the bot's folder and enter "npm init -y", followed by "npm install discord.js". It may throw up warnings, which you can safely ignore. (_Errors_ should not be ignored.) Enter "node index.js" to run the bot. It should respond with "Ready!" In your discord server, enter +help to get a commands list.

**For those unfamiliar with the command line:**

This bot is written in javascript, which means that for your computer to run the bot, it needs to know how to parse javascript. Specifically, it was written in a javascript extension called NodeJS, so that's what you're going to download, right off of <a href=https://nodejs.org/en/>NodeJS's home page</a>. Pick the "Recommended For Most Users" version – this bot doesn't need anything fancy. I wrote it in version 12.18.3, so it should be compatible with any versions later than that.

Now you'll need to open the command line, which is what you'll use to download DiscordJS and run the bot. On Mac, you'll need the program called "Terminal", which you can find with the Spotlight Search (cmd+space) or by opening the Launchpad and then the "Other" box. On Windows, you'll want the program called "Command Prompt", which you can find by opening the Start Menu and typing in "cmd" or "command". On Linux, it's also called "Terminal", and you can find it in the Applications panel on the left of your desktop, or by typing "terminal" into the Applications search bar. (And let me just say, if you're using Linux when you don't even know how to use the command line, you are a far braver person than I and you have my sincere admiration.)

First things first: let's make sure NodeJS installed properly. Enter "node -v" into the command line. You should get a response that looks something like "v12.18.3".

The command line is primarily a tool to move through and manipulate the file tree, which is to say, all the files and folders on your computer. By default, the command line will open to a high-level folder – probably your user folder, which contains such fan favorites as "Documents", "Downloads", and "Desktop". (I'm not positive that's where the Linux terminal will open to, but I'd expect so.)

To see all the files and folders in your current folder, enter "ls" (Mac & Linux) or "dir" (Windows). (Folders are also called directories; hence, 'dir'.) To move to one of those folders, enter "cd" ('change directory') followed by a space, and then the name of the folder you want to move to. To move back, enter "cd .." - the two dots indicate the parent of the current folder. 

Use "cd" to navigate to wherever you put the unzipped bot folder, and then into that folder. Enter "ls" or "dir", and you should see these items:
* commands [a folder, not a file]
* config.json
* index.js
* pool.json

If you don't see these items, you're in the wrong folder. Keep navigating until you're in the right one.

Now enter the command "npm init -y". This creates a package.json file, which keeps track of the bot's dependencies. Then enter "npm install discord.js". This installs the DiscordJS API, which is what the bot uses to interact with Discord. The installation may throw up a number of warnings, but unless it actually says "error" anywhere, there's nothing to worry about. 

If you check the contents of your current folder, you'll see that there are some new files and folders there now. You shouldn't mess with them, but if your curiosity absolutely compels you to fiddle with their contents, just remember you can always toss them all out and re-install them with those two "npm" commands if anything should go wrong.

Now you're ready to run the bot! All you have to do is enter "node index.js", and the bot will respond with "Ready!" To kill the bot, just type "ctrl+C" or close the command line. To restart the bot, just enter "node index.js" again. (If you closed the command line, then you'll have to navigate back to the bot folder before you enter "node index.js".)

Open the discord server to which you've invited the bot, and send a message starting with a + to get a response from the bot! Send +help for a list of basic bot commands, or see the CommandsList file for a more detailed list.

Check out the Customizations file for a few simple ways to tailor the bot to your group chat's preferences!

**NOTE:** The bot will only be online while your computer is awake. If that's a problem, for instance if your friends are in multiple time zones or sleep schedules, then you can just host the bot on multiple computers. Just have someone else in the group follow steps 2 and 3 of these instructions, making sure to use the exact same bot token that you used. (If you do this, you'll want to look at the poolCopy command description in the CommandsList file.)



---

This is the first time I've ever touched JavaScript, so I followed <a href=https://discordjs.guide/>this incredibly helpful tutorial</a> for all of the setup. Also helpful was the <a href=https://discordjs-fork.readthedocs.io/en/latest/index.html>discord.js documentation</a> and the <a href=https://discord.com/developers/docs/intro>Discord developer documentation</a>.

This bot is meant for small servers; I have no idea how the functionality scales to really large groups. I don't expect there would be any problems beyond the unwieldy size of the quote pool, but I've had no chance to test it. Do let me know if you run into any interesting errors.
