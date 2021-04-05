const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'Help', []);
  }

  async run(client, message, args) {
    const embed = {
        "title": "Commands (all commands are caps sensitive)",
        "footer": {
          "text": "Prefix is s!"
        },
        "fields": [
          {
            "name": "No-Perm Commands",
            "value": "help, discord, owner, invite"
          },
          {
            "name": "Moderator Commands",
            "value": "ban"
          }
        ]
      };
      message.channel.send({ embed });
  }
}

