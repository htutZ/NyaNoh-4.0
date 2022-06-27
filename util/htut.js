const { MessageEmbed } = require("discord.js");

module.exports = {
 async htut(member) {

    let nco = new MessageEmbed()
      .setTitle("You must be in the Same Voice Channel as me!")
      .setColor("RANDOM")

    if (member.voice.channel !== member.guild.me.voice.channel) {
  
      member.send(nco);

      return false;
    }

    return true;
  }
};