//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { TicTacToe } = require('discord-gamecord');
module.exports = {
  cmd: ["tictactoe"],
  run: async (client, message, args, cmd) => {
    if(!config.games.TicTacToe) return message.reply({ content : `${config.commandDisabledMessage}`})
    if(!message.mentions.users.first()) return message.reply({ content : `You need to **tag/mention** someone in the command as your opponent. This is a multiplayer game!`})
    
    const Game = new TicTacToe({
        message: message,
        isSlashGame: false,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Tic Tac Toe',
          color: '#5865F2',
          statusTitle: 'Status',
          overTitle: 'Game Over'
        },
        emojis: {
          xButton: '❌',
          oButton: '🔵',
          blankButton: '➖'
        },
        mentionUser: true,
        timeoutTime: 60000,
        xButtonStyle: 'DANGER',
        oButtonStyle: 'PRIMARY',
        turnMessage: '{emoji} | Its turn of player **{player}**.',
        winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};