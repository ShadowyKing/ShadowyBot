const { Channel } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('code', 'Code', []);
  }

  async run(client, message, args) {
      if (message.author = "TheShadowyDev#6519"){
        message.channel.send("Hello, the code is in your dms!")
        message.author.send("Test")
      }
   else {
    message.Channel.send("Dont try to trick me, you are not my creator!");
   }

      
      




  }}