//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { MatchPairs } = require('discord-gamecord');
module.exports = {
  cmd: [`matchpairs`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`matchpairs`)
      .setDescription(`Play a game of matchpairs`),
  run: async (client, interaction, options, cmdd) => {
    if(!config.games.MatchPairs) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    const Game = new MatchPairs({
      message: interaction,
      isSlashGame: true,
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