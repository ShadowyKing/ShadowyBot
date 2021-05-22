const { Channel } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('code', 'Code', []);
  }

  async run(client, message, args) {
      if (message.author = "Incisivity#6519"){
        message.delete()
        message.channel.send("Hello, the code is in your dms!")
        message.author.send("FDSUIDSHYIGFSGYUYUG")
      }
   else {
    message.channel.send("Dont try to trick me, you are not my creator!");
   }

      
      




  }}