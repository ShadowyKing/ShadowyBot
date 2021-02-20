const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'Help', []);
  }

  async run(client, message, args) {
    const embed = {
        "title": "Commands",
        "footer": {
          "text": "Prefix is s!"
        },
        "fields": [
          {
            "name": "No-Perm Commands",
            "value": "help, discord, owner"
          },
          {
            "name": "Moderator Commands",
            "value": "N/A"
          }
        ]
      };
      message.channel.send({ embed });
  }
}

