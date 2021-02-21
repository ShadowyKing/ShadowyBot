const { User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('1311', '1311', []);
  }

  async run(client, message, args) {
      message.reply("Congrats you found a secret command, please check your dms and send my creator the code for reward!")
      message.delete()
      User.dm("Code is: 3846129462508362")




  }}