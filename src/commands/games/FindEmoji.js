//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
const { FindEmoji } = require('discord-gamecord');
module.exports = {
  cmd: ["findemoji"],
  run: async (client, message, args, cmd) => {
    if(!config.games.FindEmoji) return message.reply({ content : `${config.commandDisabledMessage}`})
    
    const Game = new FindEmoji({
        message: message,
        isSlashGame: false,
        embed: {
            title: 'Find Emoji',
            color: '#5865F2',
            description: 'Remember the emojis from the board below.',
            findDescription: 'Find the {emoji} emoji before the time runs out.'
        },
        timeoutTime: 60000,
        hideEmojiTime: 5000,
        buttonStyle: 'PRIMARY',
        emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
        winMessage: 'You won! You selected the correct emoji. {emoji}',
        loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
        timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
        
    Game.startGame();
  },
};