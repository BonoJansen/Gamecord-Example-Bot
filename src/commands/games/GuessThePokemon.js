//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { GuessThePokemon } = require('discord-gamecord');
module.exports = {
  cmd: ["guessthepokemon"],
  run: async (client, message, args, cmd) => {
    if(!config.games.GuessThePokemon) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new GuessThePokemon({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Who\'s The Pokemon',
        color: '#5865F2'
      },
      timeoutTime: 60000,
      winMessage: 'You guessed it right! It was a {pokemon}.',
      loseMessage: 'Better luck next time! It was a {pokemon}.',
      errMessage: 'Unable to fetch pokemon data! Please try again.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    
    Game.startGame();
  },
};