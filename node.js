let Discord = require("discord.js")
let client = new Discord.Client()

console.log('Booting up....')
console.log('Successfully Booted!')

client.on('guildMemberRemove', member => {
 member.guild.channels.get('your-channel-id').send("Someone left the server")
})

client.on("message", message => {
if(message.content.toLowerCase() === "Insert here") {
let role = message.guild.roles.cache.find(role => role.name === "the name of the role")
message.member.roles.add(role)
}
if (message.content === 'Insert here') {
 message.reply(message.author.id());
}
if(message.content.startsWith("command here")) {
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('what to send')
member.send(whattosend.slice(1).join(" "))
}
if(message.content.startsWith("badword here")) {
message.delete()
message.channel.send("bots reply")
}
client.on("message", async message => {
if(message.content.startsWith("purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages!`)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("no perms")
} 
}
 if (message.content.startsWith('kick')) {
 const user = message.mentions.users.first();
 if (user) {
 const member = message.guild.member(user);
 if (member) { 
 member
 .kick(`BOT NAME: I've kicked ${user.tag}. This was requsted by: ${message.author}`)
 .then(() => {
 message.author.send(`Successfully kicked ${user.tag}.`);
 })
 .catch(err => {
 message.author.send('I was unable to kick the member');
 console.error(err);
 });
 } else {
 message.author.send("That user isn't in this guild!");
 }
 } else {
 message.author.send("You didn't mention the user to kick!");
 }
 }
})
})

client.login("token here")
