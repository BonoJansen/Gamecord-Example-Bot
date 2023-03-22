//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { RockPaperScissors } = require('discord-gamecord');
module.exports = {
  cmd: ["rockpaperscissors"],
  run: async (client, message, args, cmd) => {
    if(!config.games.RockPaperScissors) return message.reply({ content : `${config.commandDisabledMessage}`})
    if(!message.mentions.users.first()) return message.reply({ content : `You need to **tag/mention** someone in the command as your opponent. This is a multiplayer game!`})
    
    const Game = new RockPaperScissors({
        message: message,
        isSlashGame: false,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Rock Paper Scissors',
          color: '#5865F2',
          description: 'Press a button below to make a choice.'
        },
        buttons: {
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors'
        },
        emojis: {
          rock: '🌑',
          paper: '📰',
          scissors: '✂️'
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        pickMessage: 'You chose {emoji}.',
        winMessage: '**{player}** won the Game! Congratulations!',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};