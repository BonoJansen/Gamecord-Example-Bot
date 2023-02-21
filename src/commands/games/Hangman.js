//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Hangman } = require('discord-gamecord');
module.exports = {
  cmd: ["hangman"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Hangman) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new Hangman({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Hangman',
          color: '#5865F2'
        },
        hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
        customWord: undefined,
        timeoutTime: 60000,
        theme: 'nature',
        winMessage: 'You won! The word was **{word}**.',
        loseMessage: 'You lost! The word was **{word}**.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};