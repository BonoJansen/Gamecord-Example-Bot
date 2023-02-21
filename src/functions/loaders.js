//functions used to load all commands and events into the bot
const fs = require("fs");
const path = require("path");
const srcPath = path.join(__dirname, "../");

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
  await fs.readdir(cmdPath, { withFileTypes: true }, (err, files) => {
    if (err) return console.error(err);
    console.log(`=================\n    commands\n=================`);
    for (let file of files)
      if (file.isFile()) {
        let cmdFile = require(`${cmdPath}/${file.name}`);
        let cmd = cmdFile.cmd;
        if (Array.isArray(cmd))
          for (let c of cmd) client.commands.set(c, cmdFile);
        else client.commands.set(cmd, cmdFile);
        console.log(`Loaded command: "${cmd}"`);
      } else
        fs.readdir(
          `${cmdPath}/${file.name}`,
          { withFileTypes: true },
          (err, files) => {
            let newPath = `${cmdPath}/${file.name}`;
            if (err) return console.error(err);
            for (let file of files)
              if (file.isFile()) {
                let cmdFile = require(`${newPath}/${file.name}`);
                let cmd = cmdFile.cmd;
                let dir = splitPath(newPath);
                if (Array.isArray(cmd))
                  for (let c of cmd) client.commands.set(c, cmdFile);
                else client.commands.set(cmd, cmdFile);
                console.log(`(${dir.filePart}) - Loaded command: ${cmd}`);
              }
          }
        );
  });
}
module.exports.eventLoader = eventLoader;
module.exports.commandLoader = commandLoader;
