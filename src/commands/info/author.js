//Please, leave this command alone, just gives me some credit.
const config = require("../../../config.json");
const { EmbedBuilder} = require('discord.js')
module.exports = {
  cmd: ["author"],
  run: async (client, message, args, cmd) => {
    const embed = new EmbedBuilder()
            .setTitle(`The author of this code`)
            .setDescription(`BonoJansen_#3176`)
            .addFields(
                { name : `My Discord`, value : `[BonoJansen_#3176 on discord](https://discord.com/users/624934684597551116 "BonoJansen_#3176's discord account")`},
                { name : `My Github`, value : `[BonoJansen_#3176 on github](https://github.com/BonoJansen "BonoJansen_#3176's github page")` },
                { name : `The soure of this bot`, value : `[This bot's code on github](https://github.com/BonoJansen/Gamecord-Example-Bot/ "This bot's ripo")` },
                { name : `Support me over on Buy Me a Coffee`, value : `[Support BonoJansen_#3176 on Buy Me a Coffee](https://www.buymeacoffee.com/bonojansen "BonoJansen_#3176's Buy Me a Coffee page")` }
            )
            .setThumbnail("https://cdn.discordapp.com/avatars/624934684597551116/1f8f278896d7147939b2befb3196370c.png")
            .setColor("#8d3e95")
            .setFooter({text : `Discord Bot made by BonoJansen_#3176`, iconURL : "https://cdn.discordapp.com/avatars/624934684597551116/1f8f278896d7147939b2befb3196370c.png"})
            .setTimestamp()
        
        return message.reply({ embeds : [ embed ]});
  },
};