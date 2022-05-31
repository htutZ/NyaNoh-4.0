const i18n = require("../util/i18n");
const SQLite = require("better-sqlite3");

module.exports = {
  name: "set-role",
  cooldown: 10,
  aliases: ["sr"],
  description: i18n.__("set-role"),
  async execute(message, args) {

    let server_id = message.guild.id
    const role_id = args[0];
    var dbFilePath = __dirname;
    console.log(__dirname)
    const sql = new SQLite(dbFilePath +"/htut.sqlite", SQLite.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log}
      );
    const insertData="insert or replace into kruls values ('"+server_id+"','"+role_id+"')"
    console.log(insertData)
    sql.exec(insertData);
    console.log(role_id)
    message.react('✅')
  }
};