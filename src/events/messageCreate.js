//Gets fired when a message is send in a channel the bot can see.
const { prefix } = require("../../config.json");
module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ");
    let cmd = args.shift().toLowerCase();
    let req = client.commands.get(cmd);

    if (!req) return;
    req.run(client, message, args, cmd).catch(console.error);
  });
};
