const { Channel } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('invite', 'Invite', []);
  }

  async run(client, message, args) {
    message.reply("My invite link is: http://bit.ly/InviteShadow")
      }

   }

      
      