//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Emojify } = require('discord-gamecord');
module.exports = {
  cmd: [`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`)
      .setDescription(`Play a game of ${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`),
  run: async (client, interaction, options, cmd) => {
    if(!config.games.Emojify) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    interaction.reply(await Emojify(args));
  },
};