## Discord-Gamecord Example Bot

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1031573856277762058/1077618142668406805/gamecordBanner.png" alt="gamecord example bot" />
</p>

## 🤖 This discord bot is based on [Discord-Gamecord](https://www.npmjs.com/package/discord-gamecord) 

[![Button npm package]](https://www.npmjs.com/package/discord-gamecord)

That package is made by [aniket091](https://github.com/aniket091). 
This bot is based on discord.js V14.7.1 and Discord-Gamecord V4.3.0

[![Button github aniket091]](https://github.com/aniket091)

## 📝 Usage/Configuration



Configuring this bot isn't hard. Just fill in the config.json file.
If you don't own a discord bot account, create your discord bot on the discord developer portal and copy-paste the token in the config file.

[![Button discord developer portal]](https://discord.com/developers/applications)

Make sure to enable "MESSAGE CONTENT INTENT" at the "bot" tab.

Make sure to install all used NPM packages in the root folder of the bot
```bash
npm install
```
If this doesn't work, please try this
```bash
npm install discord.js@14.7.1 discord-gamecord@4.3.0
```
To start the bot, run ``` node .``` in the terminal open from the root folder

This bot may be update when a new version of [Discord-Gamecord](https://www.npmjs.com/package/discord-gamecord) is released. 

## 📝 Supported commands
The default prefix is: ```!```. 
Commands included in this bot:

| Command name               | Explanation                                                           |
| -------------------------- |:-------------------------------------------------------------------------------:|
| 2048                       | play a game of 2048                                                             |
| author                     | Get the links to all the platforms of the bots creator.                         |
| connect4 ```tag```         | play a game of Connect 4, ```tag``` the user you want to play against           |
| emojify  ```text```        | play a game of Emojify, type the ```text``` you want in emojis                  |
| fasttype                   | play a game of Fast Type, ```tag``` the user you want to play against           |
| findemoji                  | play a game of Find Emoji                                                       |
| flood                      | play a game of Flood                                                            |
| guessthepokemon            | play a game of Guess The Pokemon                                                |
| hangman                    | play a game of Hangman                                                          |
| matchpairs                 | play a game of Match Pairs                                                      |
| minesweeper                | play a game of Minesweeper                                                      |
| rockpaperscissors ```tag```| play a game of Rock Paper scissors, ```tag``` the user you want to play against |
| slots                      | play a game of Slots                                                            |
| snake                      | play a game of Snake                                                            |
| tictactoe ```tag```        | play a game of Tic Tac Toe, ```tag``` the user you want to play against         |
| wordle                     | play a game of Wordle                                                           |
| wouldyourather             | play a game of Would You Rather                                                 |

## 📝 Disabling games
In this bot you can disable games you don't want your users to be playing.
This can be done by setting ```false``` as the value of a certain game in the config file.

By default the config looks like this:

```
{
    "token" : "yourSuperSecretBotTokenHere",
    "prefix" : "!",
    "commandDisabledMessage" : "This game has been disabled in the bot's config. If you think this is an error, please contact the server owner.",
    "games" : {
        "2048" : true,
        "Connect4" : true,
        "Emojify" : true,
        "FastType" : true,
        "FindEmoji" : true,
        "Fishy" : true,
        "Flood" : true,
        "GuessThePokemon" : true,
        "Hangman" : true,
        "MatchPairs" : true,
        "Minesweeper" : true,
        "RockPaperScissors" : true,
        "Slots" : true,
        "Snake" : true,
        "TicTacToe" : true,
        "Trivia" : true,
        "Wordle" : true,
        "WouldYouRather" : true
    }
}
```

If you would like to disable game, just set ``true`` to ``false`` of the game you want to disable. For example disabling 2048, connect4, flood, snake and wordle:

```
{
    "token" : "yourSuperSecretBotTokenHere",
    "prefix" : "!",
    "commandDisabledMessage" : "This game has been disabled in the bot's config. If you think this is an error, please contact the server owner.",
    "games" : {
        "2048" : false,
        "Connect4" : false,
        "Emojify" : true,
        "FastType" : true,
        "FindEmoji" : true,
        "Fishy" : true,
        "Flood" : false,
        "GuessThePokemon" : true,
        "Hangman" : true,
        "MatchPairs" : true,
        "Minesweeper" : true,
        "RockPaperScissors" : true,
        "Slots" : true,
        "Snake" : false,
        "TicTacToe" : true,
        "Trivia" : true,
        "Wordle" : false,
        "WouldYouRather" : true
    }
}
```

## 🔗 links

- Support my work  through

[![Button Buy Me A Coffee]](https://www.buymeacoffee.com/bonojansen)

- Gamecord support server:

[![Button Join Suppor Server]](https://discord.gg/xGCnGcNTGb)




[Button npm package]: https://img.shields.io/badge/Discord_Gamecord-CB3837?style=for-the-badge&logoColor=white&logo=npm
[Button github aniket091]: https://img.shields.io/badge/Aniket095-000000?style=for-the-badge&logoColor=white&logo=github
[Button discord developer portal]: https://img.shields.io/badge/Discord_developer_portal-7289DA?style=for-the-badge&logoColor=white&logo=Discord
[Button Buy Me A Coffee]: https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logoColor=black&logo=buymeacoffee
[Button Join Suppor Server]: https://img.shields.io/badge/Feel_free_to_join_here-7289DA?style=for-the-badge&logoColor=white&logo=Discord