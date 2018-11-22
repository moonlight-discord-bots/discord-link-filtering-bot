exports.run = async (client, message, args) => {

  await message.channel.send('Pong!')

}

exports.help = {
  name: 'ping',
  info: 'Checks if bot responds',
  usage: '',
  unlisted: false
}

exports.config = {
  guildOnly: false,
  ownerOnly: false,
  aliases: ['pong']
}
