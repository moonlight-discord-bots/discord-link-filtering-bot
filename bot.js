const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()
const fs = require('fs')

client.config = config
client.dversion = Discord.version
client.utils = require('./utilities')
client.db = require('./database')


//taken from an idiot's guide

// Loading events
const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
  let eventName = file.split(".")[0]
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client))
}

// Loading commands
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    let commandName = file.split(".")[0]
    client.commands.set(commandName, command)
}

client.login(config.token)
