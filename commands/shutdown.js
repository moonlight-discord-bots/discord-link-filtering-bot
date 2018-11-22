exports.run = async (client, message, args) => {

  await message.channel.send('Shutting down...');

  process.exit();
}

exports.help = {
  name: 'shutdown',
  info: 'Shuts the bot down',
  usage: '',
  unlisted: true
}

exports.config = {
  guildOnly: false,
  ownerOnly: true,
  aliases: ['restart', 'reboot']
}
