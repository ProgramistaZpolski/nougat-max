const Discord = require("discord.js")
class stop {
  constructor(){
    this.name = "stop",
    this.alias = []
  }
  async run (client, msg, args) {
      if (!msg.member.voiceChannel) return msg.channel.send("Nie znajdujesz się na żadnym kanale głosowym!");
      //if (!msg.guild.me.voiceChannel) return msg.channel.send("Niestety, już znajduję się na innym kanale głosowym!");

      msg.member.voiceChannel.leave();

      let embed = new Discord.RichEmbed()
      .setColor("#4287f5")
      .setDescription("Pomyślnie wychodzono z kanału ✅")
      .setFooter("Wykonane przez: "+msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
      .setTimestamp();
      msg.channel.send(embed);
  }
}
module.exports = stop;
