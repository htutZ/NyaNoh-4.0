const { canModifyQueue } = require("../util/Util");
const i18n = require("../util/i18n");

module.exports = {
    name: "join",
    cooldown: 3,
    aliases: ["j"],
    description: i18n.__("Join a Voice Channel"),
    async execute(message, args) {
      const { channel } = message.member.voice;
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!channel) return message.reply(i18n.__("Join a voice channel first, Kono Baka Nyamrade!")).catch(console.error);
  
      if (serverQueue && channel !== message.guild.me.voice.channel)
        return message
          .reply(i18n.__mf("join.errorNotInSameChannel", { user: message.client.user }))
          .catch(console.error);
  
      const permissions = channel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT")) return message.reply(i18n.__("join.missingPermissionConnect"));
      if (!permissions.has("SPEAK")) return message.reply(i18n.__("That's how you treat a nyajesty?Give me the proper permissions to speak in this voice channel nyaaa!"));
  
      const voiceChannel = message.member.voice.channel
      voiceChannel.join()
      .then(connection => {
         connection.play("./sounds/Smol_nyanoh.wav")
              });         
    }
}    
