//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { TwoZeroFourEight } = require('discord-gamecord');
module.exports = {
  cmd: ["2048"],
  run: async (client, message, args, cmd) => {
    if(!config.games[2048]) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new TwoZeroFourEight({
        message: message,
        isSlashGame: false,
        embed: {
          title: '2048',
          color: '#5865F2'
        },
        emojis: {
          up: '⬆️',
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};