//Please, leave this command alone, just gives me some credit. 
const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Fishy } = require('discord-gamecord');
module.exports = {
  cmd: [`sellfish`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`sellfish`)
      .setDescription(`Play a game of sellfish`)
      .addStringOption(options => options.setName("fishtype").setDescription("The type of fish you want to sell.").setRequired(true).addChoices({ name: "junk", value : "junk" }, { name: "common", value : "common" }, { name: "uncommon", value : "uncommon" }, { name: "rare", value : "rare" }))
      .addNumberOption(options => options.setName("amount").setDescription("The amount of this type you want to sell.").setRequired(true)),
  run: async (client, interaction, options, cmd) => {
    if(!config.games.Fishy) return interaction.reply({ content : `${config.commandDisabledMessage}`, ephemeral: true})
    
    let player;
    let fishType = options.getString('fishtype')
    let amount = options.getNumber('amount')
    if(client.database.has(`${interaction.guild.id}-${interaction.user.id}`)){
      player = client.database.get(`${interaction.guild.id}-${interaction.user.id}`)
    } else {
        if( interaction.deferred || interaction.replied){
            return interaction.editReply({ content : `The database doenst contain any catched fishes by you. Please catch some fish before selling them.`, ephemeral : true})
        } else {
            return interaction.reply({ content : `The database doenst contain any catched fishes by you. Please catch some fish before selling them.`, ephemeral : true})
        }
        
    }

    const Game = new Fishy({
      message: interaction,
      isSlashGame: true,
      player: player,
      embed: {
        title: 'Fishy Inventory',
        color: '#5865F2'
      },
      fishes: {
        junk: { emoji: '🔧', price: 5 },
        common: { emoji: '🐟', price: 10 },
        uncommon: { emoji: '🐠', price: 20 },
        rare: { emoji: '🐡', price: 50 }
      },
      fishyRodPrice: 10,
      catchMessage: 'You caught a {fish}. You paid {amount} for the fishing rod.',
      sellMessage: 'You sold {amount}x {fish} {type} items for a total of {price}.',
      noBalanceMessage: 'You don\'t have enough balance to rent a fishing rod.',
      invalidTypeMessage: 'Fish type can only be junk, common, uncommon or rare.',
      invalidAmountMessage: 'Amount must be between 0 and fish max amount.',
      noItemMessage: 'You don\'t have any of this item in your inventory.'
    });
    
    // Sell Fish
    Game.on('sellFish', fishy => { 
      player = fishy.player
      client.database.set(`${interaction.guild.id}-${interaction.user.id}`, player)
    });
    Game.sellFish(fishType, amount);
    // FishType: junk || common || uncommon || rare
  },
};