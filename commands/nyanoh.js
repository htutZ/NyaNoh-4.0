const i18n = require("../util/i18n");
const SQLite = require("better-sqlite3");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: "nyanoh",
  cooldown: 10,
  aliases: ["nya"],
  description: i18n.__("verify"),
  async execute(message, args) {

    let server_name = message.guild.name
    let server_id = message.guild.id
    var dbFilePath = __dirname;
    console.log(__dirname)
    const sql = new SQLite(dbFilePath +"/htut.sqlite", SQLite.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log}
      );
      const suisei = sql.prepare('SELECT * FROM unverified WHERE user_id = ? ').get(message.author.id);
      if (typeof suisei !== 'undefined'){
        const role = sql.prepare('SELECT role_id FROM kruls WHERE server_id = ? ').get(server_id);
        var value = role.role_id;
        var numberPattern = /\d+/g;
        value = value.match( numberPattern ).join([]);
        
            //  const doc = new MessageEmbed();
            //  const row = new MessageActionRow()
            //  .addComponents(
            //    new MessageButton()
            //      .setCustomId('primary')
            //      .setLabel('Primary')
            //      .setStyle('PRIMARY'),
            //  );

        //  message.channel.send([row]);
        //  const row1 = new MessageActionRow()
        //  .addComponents(
        //    new MessageButton()
        //      .setCustomId("false")
        //      .setLabel(emoji['char'])
        //      .setStyle('PRIMARY'),
        //  )
       
        //  const row2 = new MessageActionRow()
        //  .addComponents(
        //    new MessageButton()
        //      .setCustomId("verified")
        //      .setLabel(bad['char'])
        //      .setStyle('PRIMARY'),
        //  );


        message.member.roles.add(value)
      message.react('✅')
    } else {
        message.channel.send("Your verification is failed.Please try again nya~~~!")
    }
  }
};
