const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('owner', 'Owner', []);
  }

  async run(client, message, args) {
    message.reply("My creator is Incisivity#6519!")
  }
}