const { DiscordAPIError } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
  }
}
client.on('ready', () => {
  console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
      client.user.setStatus('online')
      client.user.setPresence({
          game: {
              name: 'Use s!help',
              type: "Watching",
          }
      });
  });