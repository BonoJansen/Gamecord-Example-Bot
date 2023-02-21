//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { Flood } = require('discord-gamecord');
module.exports = {
  cmd: ["flood"],
  run: async (client, message, args, cmd) => {
    if(!config.games.Flood) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new Flood({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Flood',
          color: '#5865F2',
        },
        difficulty: 13,
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
        winMessage: 'You won! You took **{turns}** turns.',
        loseMessage: 'You lost! You took **{turns}** turns.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};