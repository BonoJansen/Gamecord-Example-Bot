//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Emojify } = require('discord-gamecord');
module.exports = {
  cmd: ["emojify"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Emojify) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    message.channel.send(await Emojify(args));
  },
};