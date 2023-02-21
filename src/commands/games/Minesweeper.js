//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Minesweeper } = require('discord-gamecord');
module.exports = {
  cmd: ["minesweeper"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Minesweeper) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new Minesweeper({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Minesweeper',
          color: '#5865F2',
          description: 'Click on the buttons to reveal the blocks except mines.'
        },
        emojis: { flag: '🚩', mine: '💣' },
        mines: 5,
        timeoutTime: 60000,
        winMessage: 'You won the Game! You successfully avoided all the mines.',
        loseMessage: 'You lost the Game! Beaware of the mines next time.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};