const { Channel } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('invite', 'Invite', []);
  }

  async run(client, message, args) {
     channel.message.send("My invite link is: http://bit.ly/InviteShadow")
      }

   }

      
      