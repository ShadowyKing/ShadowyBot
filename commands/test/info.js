const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('owner', 'botowner', []);
  }

  async run(client, message, args) {
    message.channel.reply("My owner is TheShadowyDev#6519!")
  }
}