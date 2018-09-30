# RobiBot
Easy to use Discord Music bot that keeps running on [Glitch.com](https://glitch.com)

Library: [Discord.js](https://discord.js.org)

## Installation:
  - Login into Glitch with Gihtub
  - Create a new project
  - Import my repo (pepyta/robibot)
  - Set up your .env file (watch below)
  - Set up an Uptime robot page (watch below)

## Set up .env file
  A .env file is where you can store your private informations.
  Here is the plain .env file:
  `TOKEN=*YOUR DISCORD BOT TOKEN*
  YOUTUBE_API=*YOUR YOUTUBE API TOKEN*
  PROJECT_DOMAIN=*YOUR PROJECT NAME (WITHOUT .glitch.me)`
  
  ### Getting Discord Bot token
  [Discord developers page](https://discordapp.com/developers) > Create an application > Bot > Build a Bot > Token > Copy
  
  ### Getting Youtube API token
  [Youtube Data API V3](https://console.cloud.google.com/apis/api/youtube.googleapis.com/overview) > Enable API
  [Google API Dashboard](console.cloud.google.com/apis/credentials) > Create credentials > API key > Copy

## Setting up UptimeRobot
  [UptimeRobot](https://uptimerobot.com) > Register > Add New Monitor > Monitor Type: HTTP(s) > Friendly Name: Whatever you want > URL (or IP): Your glitch.me address for you project > Monitoring Interval: default (every 5 minutes)
  
## Invite your Bot!

## Commands:

### Admin Commands
  - `listgroup`: List groups that have admin access
  - `addgroup [group_name]`: Add a group to use admin access
  - `remgroup [group_name]`: Remove a group from admin access
  - `setusername [NAME]`: Set a username for the bot
  - `setavatar [URL]`: Set a avatar for the bot to use
  - `setgame [name]`: Sets the name of the game the bot is playing
  - `setinit [command]`: Sets the initial command the bot needs to enter commands e.g The "." in ".play"
  - `reports`: View reports that have been filed
  - `delreports`: Clear any reports that have been read
  - `exit`: disconnects bot from discord  

### General
  - `about`: About this bot
  - `stats`: View Stats
  - `report`: File a report
  - `uptime`: Uptime of the bot
  - `source`: Source link
  - `invite`: Get invite link for your bot
  - `setvc`: set the default voice channel this bot joins when ever the bot connects
  - `join`: Bot joins your voice channel

### Music
  - `queue` or `playing`: To view songs in queue
  - `play [YT_URL]`: Plays a song from a youtube link
  - `play [index_number]` : Plays a song from a file that has been saved to the bot
  - `play [search key term]`: Plays the first result of youtube search
  - `play [playlist_name or playlist_index]`: Loads a playlist to queue
  - `play`: Plays song in queue if it has been stopped  
  - `stop`: Stops the song from playing
  - `skip`: Skips to the next song
  - `replay`: Stops and replays song from the start
  - `readd`: Adds the current song back into queue
  - `loop`: Loops the entire queue, putting the current song back into queue
  - `local`: Displays all the songs saved by the bot
  - `remove [index_number]`: Removes a specific song from queue
  - `remove [#,#,#]`: Removes specific songs from the queue using it's index numbers seperated by commas
  - `save [YT_URL]`: Saves a song from youtube and stores it
  - `save`: Saves current song to local instead of downloading it from YT (faster)
  - `remlocal [index_number]`: Removes a song that has been saved locally
  - `playlist`: List all playlist
  - `playlist [playlist_index]`: List the songs of a playlist
  - `playlist save [playlist_name]`: Saves everything that is queued into a playlist
  - `playlist remove [playlist_index]`: Removes a playlist
  - `playlist remove [playlist_index] [playlist_track_index]`: Removes a playlist track from specified playlist
  - `playlist add [playlist_index] [YT_URL]`: Adds YouTube track into a playlist without having it queued
  - `playlist rename [playlist_name or playlist_index] [new_playlist_name]`: Renames a playlist
