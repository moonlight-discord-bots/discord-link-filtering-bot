exports.run = async (client, message, args) => {

  if(!args || args.size < 1) return message.channel.send(`Please specify a command name`)
  const commandName = args[0]
  if(!client.commands.has(commandName)) {
    try {
      const props = require(`./${commandName}.js`)

        client.commands.set(commandName, props)
        message.channel.send(`Command \`${commandName}\` has been loaded`)
      }
      catch (error) {
        message.channel.send(`An error occured while reloading the command:
\`\`\`${error.name}: ${error.message}\`\`\``)
      }

  } else {

  delete require.cache[require.resolve(`./${commandName}.js`)]

  client.commands.delete(commandName)
  const props = require(`./${commandName}.js`)
  client.commands.set(commandName, props);
  message.channel.send(`Command \`${commandName}\` has been reloaded`)
}
};

exports.help = {
  name: 'reload',
  info: 'Reloads a command',
  usage: '<command>',
  unlisted: true
}

exports.config = {
  guildOnly: false,
  ownerOnly: true,
  aliases: []
}
