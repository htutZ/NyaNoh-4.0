const i18n = require("../util/i18n");
const SQLite = require("better-sqlite3");

module.exports = {
  name: "set-verification-channel",
  cooldown: 10,
  aliases: ["sv"],
  description: i18n.__("verify"),
  async execute(message, args) {

    let server_name = message.guild.name
    let server_id = message.guild.id
    const channel_id = args[0];
    var dbFilePath = __dirname;
    console.log(__dirname)
    const sql = new SQLite(dbFilePath +"/htut.sqlite", SQLite.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log}
      );
    const insertData="insert or replace into channel values ('"+server_id+"', '"+channel_id+"')"
    sql.exec(insertData);
    message.react('✅')
  }
};
