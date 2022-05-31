/**
 * Module Imports
 */
var krul = 0;
const SQLite = require("better-sqlite3");
var emojis = require('emoji.json')
const { Client, Collection, MessageActionRow, MessageEmbed, Intents, MessageButton } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./util/Util");
const i18n = require("./util/i18n");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const { ReactionCollector } = require('discord.js-collector');
const disbut = require('discord-buttons');
emojis = Object.values(emojis)

function rdm(max) {
  return Math.floor(Math.random() * max);
} 

/**
 * Client Events
 */
client.on("ready", () => {
  const createTable = "CREATE TABLE IF NOT EXISTS users( 'server_name' varchar,'server_id' varchar,'user_id' varchar);"
sql.exec(createTable);
  const krul = "CREATE TABLE IF NOT EXISTS kruls( 'server_id' varchar,'role_id' varchar  );"
sql.exec(krul);
const rushia = "CREATE TABLE IF NOT EXISTS channel( 'server_id' varchar,'channel_id' varchar  );"
sql.exec(rushia);
  const totegyi = "CREATE TABLE IF NOT EXISTS verified( 'use  r_id' varchar,'otp' varchar  );"
sql.exec(totegyi);
   const sora = "CREATE TABLE IF NOT EXISTS unverified( 'user_id' varchar );"
sql.exec(sora);
  console.log(`${client.user.username} ready!`);
  
  const arrayOfStatus = [
    `${PREFIX}help`, 
    `${client.guilds.cache.size} Guilds!`,
];

let index = 0;  
setInterval(() => {
    if(index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
  client.user.setActivity(status, { type: "LISTENING" })
  index++;
}, 5000)
})

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
 var dbFilePath = __dirname+"/commands";
 console.log(dbFilePath)
 const sql = new SQLite(dbFilePath +"/htut.sqlite", SQLite.OPEN_READWRITE, (err) => {
   if (err) {
       console.error(err.message);
   }
   verbose: console.log}
 );

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

let emoji = emojis[parseInt(Math.random() * emojis.length)]
let bad = emojis[parseInt(Math.random() * emojis.length)]
if (bad == emoji) {
    bad = emojis[parseInt(Math.random() * emojis.length)]
    if (bad == emoji) {
        bad = emojis[parseInt(Math.random() * emojis.length)]
        if (bad == emoji) {
            bad = emojis[parseInt(Math.random() * emojis.length)]
        }
        if (bad == emoji) {
            bad = {
                'char': 'ok',
                'name': 'ok'
            }
        } 
    }
}

  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  krul = makeid();
  var noname = makeid();
// });

//         for(var i=0;i<2;i++){
//           let emojia = emojis[parseInt(Math.random() * emojis.length)]
//           row.addComponents(
//             new MessageButton()
//               .setCustomId(i+'htut')
//               .setLabel(emojia['char'])
//               .setStyle('PRIMARY'),
//           );
//         }  

//       }
//  })

// client.on('clickButton', async (button) => {
//     if (button.id === 'v_bot') {
//         if (acm[button.clicker.user.id.toString()]) {
//             var m = acm[button.clicker.user.id.toString()]['message']
//             var role = m.guild.roles.cache.find(role => role.name === "Verified");
//             await m.member.roles.add(role)
//             button.channel.send(`Verified.`);
//             button.message.delete()

//             console.log(acm[button.clicker.user.id.toString()])
//             setTimeout(() => {
//                 acm[button.clicker.user.id.toString()] = null
//             }, 30000);
//         } else {
//             button.channel.send('Invalid verification request, try again.')
//         }
//     } else {
//         if (acm[button.clicker.user.id.toString()]) {

//             console.log('failed')
//             button.message.delete()
//             button.channel.send('Verification Failed - Wait 30 seconds to try again after rejoining.')
//             var men = acm[button.clicker.user.id.toString()]['message'].member
//             men.kick('Verification Failed - Wait 30 seconds to try again after rejoining.')
//             setTimeout(() => {
//                 acm[button.clicker.user.id.toString()] = null
//             }, 30000);
//         } else {
//             button.channel.send('Invalid verification request, try again.')
//         }
//     }
// });

const NyaNoh = new MessageEmbed()
.setAuthor(
  `Human Verification!`,
  "https://media.giphy.com/media/jt4T61XA7JkGokWHal/giphy.gif"
)
.setColor('#FFD1DC')
.addField('Captcha: ', noname)
.setTimestamp()
// });

// let role = message.guild.roles.cache.find(r => r.id === "Role ID");
// client.on('interactionCreate', async (interaction) => {
//   if(interaction.isButton()){
    
//     verifiedRoleId = "967497564066807888";
//     member = interaction.member;

//     if(interaction.customId == "verified"){
//         interaction.guild.roles.fetch(verifiedRoleId)
//         .then(role => member.roles.add(role))
//         .catch(console.error());
//     }
//   }

client.on("message", async (message) => {

  if (message.channel.type === 'dm'){ 
    //userid console.log(message.author.id)
    const suisei = sql.prepare('SELECT otp FROM verified WHERE user_id = ? ').get(message.author.id);
    if (typeof suisei !== 'undefined'){
      const otp = suisei['otp']
      if ( message.content == otp){
        const cereal="insert or replace into unverified values ('"+message.author.id+"')"
        sql.exec(cereal);
        // const user = message.users.cache.get('<id>');
        // user.send('<content>');

        message.author.send("Please send -nyanoh in server ");
      } else {
        message.author.send("Your writtern otp is wrong! ");

      }
    }

}
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        i18n.__mf("common.cooldownMessage", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(i18n.__("common.errorCommand")).catch(console.error);
  }
});

client.on('guildMemberAdd', member => {
    let server_name = member.guild.name
    let server_id = member.guild.id
    let user_id   = member.id
    console.log(user_id)
    var dbFilePath = __dirname;
    console.log(__dirname)
    const sql = new SQLite(dbFilePath +"/commands/htut.sqlite", SQLite.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log}
      );
    const htut = sql.prepare('SELECT * FROM users WHERE server_id = ? and user_id = ? ').get(server_id,user_id);
    const role = sql.prepare('SELECT role_id FROM kruls WHERE server_id = ? ').get(server_id);
    var value = role.role_id;
    var numberPattern = /\d+/g;
    value = value.match( numberPattern ).join([]);
    if (typeof htut == 'undefined'){

    const insertData="insert or replace into users values ('"+server_name+"' ,'"+server_id+"','"+user_id+"')"
    sql.exec(insertData);

    member.send(NyaNoh);
    const cereal="insert or replace into verified values ('"+user_id+"' ,'"+noname+"')"
    sql.exec(cereal);
  } else{
    member.roles.add(member.guild.roles.cache.get(value));
  } 
  
});

client.on('message', message => {
  switch(message.content.toUpperCase()) {
      case '-RESET':
          reset(message);
          break;  
  }
});

function reset(message) {

 var doc = message.channel.send('Restarting nya~~~');
 message.react('👾')
  doc.then(msg => client.destroy());
  doc.then(() => client.login(TOKEN));
  
}
