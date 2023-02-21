//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Connect4 } = require('discord-gamecord');
module.exports = {
  cmd: ["connect4"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Connect4) return message.reply({ content : `${config.commandDisabledMessage}`})
    if(!message.mention.users.first()) return message.reply({ content : `You need to **tag/mention** someone in the command as your opponent. This is a multiplayer game!`})
    
    const Game = new Connect4({
        message: message,
        isSlashGame: false,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Connect4 Game',
          statusTitle: 'Status',
          color: '#5865F2'
        },
        emojis: {
          board: '⚪',
          player1: '🔴',
          player2: '🟡'
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        turnMessage: '{emoji} | Its turn of player **{player}**.',
        winMessage: '{emoji} | **{player}** won the Connect4 Game.',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};