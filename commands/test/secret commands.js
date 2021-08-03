const { User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('3846129462508362', '3846129462508362', []);
  }

  async run(client, message, args) {
      message.reply("Great, check your dms!")
      message.delete()
      message.author.send("Roblox Id: 854449010 ")




  }}