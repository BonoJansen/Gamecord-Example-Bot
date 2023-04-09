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
const database = require('easy-json-database')
const db = new database("./FishyData/PlayerDatabase.json", {
  snapshots: {
      enabled: false
  }
});
const { eventLoader, commandLoader } = require("./src/functions/loaders");
client.commands = new Discord.Collection();
client.slashCommands = [];
client.database = db;
  
eventLoader(client);
commandLoader(client);

client.login(config.token);