//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { MatchPairs } = require('discord-gamecord');
module.exports = {
  cmd: ["matchpairs"],
  run: async (client, message, args, cmd) => {
    if(!config.games.MatchPairs) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new MatchPairs({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Match Pairs',
          color: '#5865F2',
          description: '**Click on the buttons to match emojis with their pairs.**'
        },
        timeoutTime: 60000,
        emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🍌', '🍍', '🥕', '🥔'],
        winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
        loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
  },
};