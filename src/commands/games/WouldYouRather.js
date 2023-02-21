//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { WouldYouRather } = require('discord-gamecord');
module.exports = {
  cmd: ["wouldyourather"],
  run: async (client, message, args, cmd) => {
    if(!config.games.WouldYouRather) return message.reply({ content : `${config.commandDisabledMessage}`})

    const Game = new WouldYouRather({
        message: message,
        isSlashGame: false,
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