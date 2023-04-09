//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { Hangman } = require('discord-gamecord');
module.exports = {
  cmd: [`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`)
      .setDescription(`Play a game of ${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`),
  run: async (client, interaction, options, cmd) => {
    if(!config.games.Hangman) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    const Game = new Hangman({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Hangman',
        color: '#5865F2'
      },
      hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
      customWord: undefined,
      timeoutTime: 60000,
      theme: 'nature',
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};