const { canModifyQueue } = require("../util/Util");
const i18n = require("../util/i18n");

module.exports = {
  name: "disconnect",
  aliases: ["dc","quit","leave"],
  description: i18n.__("Disconnect from VC"),
  execute(message) {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Join a VC first before using this command,Kono baka Nyamrade!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) 
    {
      message.guild.me.voice.channel.leave();
         message.react('✅')
         
    return;
    }
     
      message.client.queue.delete(message.guild.id);
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
message.guild.me.voice.channel.leave();

        if (!queue) return message.reply(i18n.__("disconnect.errorNotQueue")).catch(console.error);
    if (!canModifyQueue(message.member)) return i18n.__("common.errorNotChannel");

    if (message.member.voice.channel) {
const connection = message.member.voice.channel.leave();
}
    queue.textChannel.send(i18n.__mf("See ya,Nyamrades!", { author: message.author })).catch(console.error);
  }
}
