//Gets fired when the bot is logged in to it's account and is ready to use
const config = require("../../config.json");
const { slashCommandRegister } = require("../functions/loaders");
module.exports = (client) => {
    client.once("ready", async () => {
        console.log(
            `\n[Info]`,
            `Client connection to Discord established. As: ${
                client.user.username + " • " + client.user.id
            }\n${new Date()} `
        );
        slashCommandRegister(client)
    });
};
