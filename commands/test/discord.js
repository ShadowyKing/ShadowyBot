const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('discord', 'Discord', []);
  }

  async run(client, message, args) {
    const embed = {
        "title": "*Discord*",
        "description": "**You can join our discord server by pressing the this link: https://discord.gg/PkcreRyC22**",
        "url": "https://discord.gg/PkcreRyC22",
        "color": 5073897,
        "timestamp": "2021-02-20T16:28:50",
        "footer": {
          "icon_url": "",
          "text": "Shadow Bot Discord"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": "Shadow Bot Discord",
          "url": "",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "Backup invite:",
            "value": "https://discord.gg/n7ag3zuvzF",
            "inline": true
          }
        ]
      };
      channel.send({ embed });
  }
}







