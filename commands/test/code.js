const { Channel } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('code', 'Code', []);
  }

  async run(client, message, args) {
      if (message.author = "TheShadowyDev#6519"){
        message.author.send("Hello, the code is: 3846129462508362")
      }
   else {
    message.Channel.send("Dont try to trick me, you are not my creator!");
   }

      
      




  }}