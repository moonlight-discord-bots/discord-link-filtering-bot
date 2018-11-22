module.exports = async (client) => {

  await client.db.defer
  console.log('Enmap is ready!')

  console.log('I am ready!')
  console.log(`I am logged in as ${client.user.tag}`)
  console.log(`Node version: ${process.version}`)
  console.log(`Discord.JS version: ${client.dversion}`)
  console.log(`===========================`)
};
