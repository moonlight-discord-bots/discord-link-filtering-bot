module.exports = async (client, message) => {

  const channel = client.db.get('radiochannel')

  const pattern = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be|open\.spotify\.com)\/[\w?=]*$/gmi

  if(!message.content.match(pattern) && message.channel.id === channel && message.deletable && !message.author.bot) {
    message.channel.send(`:information_source: ${message.author}, only YouTube and Spotify links are allowed in this channel`)
    .then(m=>m.delete(10000))
    return message.delete()
  }

  if(client.config.allowMentionPrefix)
    message.content = message.content.replace(new RegExp(`^<@!?${client.user.id}> `), client.config.prefix)
  if (!message.content.startsWith(client.config.prefix)) return
  if (message.author.bot) return

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  const cmd = client.commands.get(command) || client.commands.find(c=>c.config.aliases.includes(command))
  if (!cmd) return

  if(cmd.config.guildOnly && !message.guild) return
  if(cmd.config.ownerOnly && !client.config.owners.includes(message.author.id)) return

  try {
    cmd.run(client, message, args)
  }
  catch (error) {
    console.error(error)
    message.channel.send(':x: Something went wrong while executing the command').catch(console.error)
  }
};
