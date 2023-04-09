//functions used to load all commands and events into the bot
const config = require('../../config.json')
const fs = require("fs");
const path = require("path");
const srcPath = path.join(__dirname, "../");
const { REST, Routes } = require('discord.js')
const rest = new REST({version : "10"}).setToken(config.token);

function splitPath(path) {
  var dirPart, filePart;
  path.replace(/^(.*\/)?([^/]*)$/, function (_, dir, file) {
    dirPart = dir;
    filePart = file;
  });
  return { dirPart: dirPart, filePart: filePart };
}

async function eventLoader(client) {

  //event loader
  await fs.readdir(
    `${srcPath}/events`,
    { withFileTypes: true },
    (err, files) => {
      if (err) return console.error(err);
      console.log(`=================\n     events\n=================`);
      for (let file of files)
        if (file.isFile()) {
          require(`${srcPath}/events/${file.name}`)(client);
          console.log(`(events) - Loaded event: ${file.name}`);
        }
    }
  );
}

async function commandLoader(client) {
  let cmdPath = `${srcPath}/commands`;
  await fs.readdir(cmdPath, { withFileTypes: true }, async (err, files) => {
    if (err) return console.error(err);
    console.log(`=================\n    commands\n=================`);
    for (let file of files) {
      if (file.isFile()) {
        let cmdFile = require(`${cmdPath}/${file.name}`);
        let cmd = cmdFile.cmd;
        if (Array.isArray(cmd)){
          for (let c of cmd) client.commands.set(c, cmdFile); 
        } else {
          client.commands.set(cmd, cmdFile);
        }
        //slashcommand
        client.slashCommands.push(cmdFile.slashcommand.toJSON())
        console.log(`Loaded command: "${cmd}"`);
      } else {
        fs.readdir(`${cmdPath}/${file.name}`, {withFileTypes: true }, (err, files) => {
            let newPath = `${cmdPath}/${file.name}`;
            if (err) return console.error(err);
            for (let file of files){
              if (file.isFile()) {
                let cmdFile = require(`${newPath}/${file.name}`);
                //console.log(cmdFile)
                let cmd = cmdFile.cmd;
                let dir = splitPath(newPath);
                if (Array.isArray(cmd)) {
                  for (let c of cmd) client.commands.set(c, cmdFile);
                } else {
                  client.commands.set(cmd, cmdFile);
                }
                //slashcommand
                client.slashCommands.push(cmdFile.slashcommand.toJSON())
                console.log(`(${dir.filePart}) - Loaded command: ${cmd}`);
              }
            }
        });
      } 
    }
  });
}
async function slashCommandRegister (client) {
  (async () => {
    try {
      console.log(`Started refreshing ${client.commands.size} application (/) commands.`);
  
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationCommands("866307047485603861", "891056722788098118"),
        { body: client.slashCommands },
      );
  
      console.log(`Successfully reloaded ${data.length || 0} application (/) commands.`);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
}
module.exports.eventLoader = eventLoader;
module.exports.commandLoader = commandLoader;
module.exports.slashCommandRegister = slashCommandRegister;
