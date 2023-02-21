//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Wordle } = require('discord-gamecord');
module.exports = {
  cmd: ["wordle"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Wordle) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new Wordle({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Wordle',
          color: '#5865F2',
        },
        customWord: null,
        timeoutTime: 60000,
        winMessage: 'You won! The word was **{word}**.',
        loseMessage: 'You lost! The word was **{word}**.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};