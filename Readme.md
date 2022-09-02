# acronymBot
The purpose of 'acronymBot' is to look up Gear4music acronym's and explain what they are.

# Installing the bot
Firstly you'll need a Discord bot to apply this code to, unless you already have one. If you don't create one now and get the super secret token for it, then add it to your Discord server if you are really pumped.


You will need to create an additional .json file called 'config.json' which needs to contain the following goodies;
```
{
    "token": "xxxxx", //Your super secret token for your discord bot
    "prefix": "!", //Recommend don't change, but the prefix can be whatever you want. Its usually ! or . - eg !command.
}
```
# Running the bot
To run the bot...
On Windows; Open CMD in the root folder then; "go" or "start go.bat"

Recommended that you run via PM2 (go.bat will do this) but you can manually do the command if required or on another OS;

pm2 start acronymBot.js

Use "pm2 -h" for a full list of commands, but these are useful;
pm2 list -  to see processes running
pm2 logs -  to see the logs (console outputs etc)
