exports.run = async (client, message, args) => {

  if(!message.member.hasPermission('MANAGE_GUILD'))
    return message.channel.send(':no_entry_sign: Only people with Manage Server permission are allowed to use this command')

  const channel = message.guild.channels.get(client.utils.parseMention(args[0] || ''))

  if(!channel || channel.type !== 'text')
    return message.channel.send(':warning: Please provide a valid text channel')

  try {
    client.db.set('radiochannel', channel.id)

    message.channel.send(`:white_check_mark: Messages sent in ${channel} that do not contain a Spotify or YouTube link will be deleted`)
  } catch(e) {
    console.error(e)
    return message.channel.send(':x: Something went wrong while trying to setup the channel')
  }


}

exports.help = {
  name: 'setup',
  info: 'Setups the server',
  usage: ' <#channel>',
  unlisted: false
}

exports.config = {
  guildOnly: true,
  ownerOnly: false,
  aliases: ['config']
}
