//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { WouldYouRather } = require('discord-gamecord');
module.exports = {
  cmd: [`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`)
      .setDescription(`Play a game of ${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`),
  run: async (client, interaction, options, cmd) => {
    if(!config.games.WouldYouRather) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})

    const Game = new WouldYouRather({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Would You Rather',
        color: '#5865F2',
      },
      buttons: {
        option1: 'Option 1',
        option2: 'Option 2',
      },
      timeoutTime: 60000,
      errMessage: 'Unable to fetch question data! Please try again.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
  },
};