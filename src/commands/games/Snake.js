//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Snake } = require('discord-gamecord');
module.exports = {
  cmd: ["snake"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Snake) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new Snake({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Snake Game',
          overTitle: 'Game Over',
          color: '#5865F2'
        },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️', 
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
        foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
        stopButton: 'Stop',
        timeoutTime: 60000,
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};