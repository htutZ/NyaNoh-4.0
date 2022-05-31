const { canModifyQueue } = require("../util/Util");
const i18n = require("../util/i18n");

module.exports = {
  name: "stop",
  description: i18n.__("stop.description"),
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply(i18n.__("⏹ You're so cruel hooman.You stopped Nya's singing!")).catch(console.error);
    if (!canModifyQueue(message.member)) return i18n.__("common.errorNotChannel");

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(i18n.__mf("⏹ You're so cruel hooman.You stopped Nya's singing!", { author: message.author })).catch(console.error);
  }
};
