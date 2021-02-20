const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('kick', 'Kick', []);
  }

  async run(client, message, args) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().kick();
            } catch {
                msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
            }
        } else {
            msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
        }
    }
}
}