//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Slots } = require('discord-gamecord');
module.exports = {
  cmd: ["slots"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Slots) return message.reply({ content : `${config.commandDisabledMessage}`})
    const Game = new Slots({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Slot Machine',
          color: '#5865F2'
        },
        slots: ['🍇', '🍊', '🍋', '🍌']
    });
      
    Game.startGame();
  },
};