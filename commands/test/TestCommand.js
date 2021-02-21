const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'Test', []);
  }

  async run(client, message, args) {
    message.channel.send('Test command works');
    message.delete()
    message.channel.send("Message deleted, the bot is working!")
  }
}