//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { TwoZeroFourEight } = require('discord-gamecord');
module.exports.cmdName = ["2048"]
module.exports = {
  cmd: [`2048`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`2048`)
      .setDescription(`Play a game of 2048`),
  run: async (client, interaction, options, cmd) => {
    if(!config.games[2048]) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    const Game = new TwoZeroFourEight({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: '2048',
        color: '#5865F2'
      },
      emojis: {
        up: '⬆️',
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};