//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Slots } = require('discord-gamecord');
module.exports = {
  cmd: [`slots`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`slots`)
      .setDescription(`Play a game of slots`),
  run: async (client, interaction, options, cmd) => {
    if(!config.games.Slots) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    const Game = new Slots({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Slot Machine',
        color: '#5865F2'
      },
      slots: ['🍇', '🍊', '🍋', '🍌']
    });
      
    Game.startGame();
  },
};