const config = require("../../config.json")
module.exports = client => {
  
client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()){
         
        let cmd = interaction.commandName
        let options = interaction.options

        let req = client.commands.get(cmd)
        if (!req) return
        req.run(client, interaction, options, cmd).catch(console.error)
    }
    return
})
}