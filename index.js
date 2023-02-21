//main file of the bot.
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});
const config = require("./config.json");
const { eventLoader, commandLoader } = require("./src/functions/loaders");
client.commands = new Discord.Collection();

eventLoader(client);
commandLoader(client);

client.login(config.token);
