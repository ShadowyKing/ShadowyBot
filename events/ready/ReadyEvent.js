const { DiscordAPIError } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
const client = new Discord.Client();

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
  }
}
client.user.setActivity("s!")