const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('selfkick', 'Selfkick', []);
  }

  async run(client, message, args) {
      message.reply("You wanted this, bye!")
      message.author.kick("You wanted this!")
      message.delete()
  }



  }