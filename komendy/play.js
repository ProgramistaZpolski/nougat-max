const Discord = require("discord.js") 
const ytdl = require("ytdl-core");
class plej {
  constructor(){
    this.name = "play",
    this.alias = []
  }
  async run (client, msg, args, active) {
      if (!msg.member.voiceChannel) return msg.channel.send("Nie znajdujesz się na żadnym kanale głosowym!");
      if (!args[0]) return msg.channel.send("Nieprawidłowy adres URL");

      let validate = await ytdl.validateURL(args[0]);
      if (!validate) return msg.channel.send("Nieprawidłowy adres URL");

      //let info = await ytdl.getInfo(args[0]);
      //let connection = await msg.member.voiceChannel.join();
      //let dispatcher = await connection.playStream(ytdl(args[0], { filter: "audioonly" }));

      //let embed = new Discord.RichEmbed()
      //.setColor("#4287f5")
      //.setDescription("Teraz gramy: **" + info.title + "** [\[link]\](" + info.video_url + ")")   dlaczego nie lubisz radia zet
      //.setFooter("Dodane przez: "+msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
      //.setTimestamp();
      //msg.channel.send(embed);

      let info = await ytdl.getInfo(args[0]);

      let data = active.get(msg.guild.id) || {};

      if (!data.connection) data.connection = await msg.member.voiceChannel.join();
      if (!data.queue) data.queue = [];
      data.guildID = msg.guild.id;

      data.queue.push({
        songTitle: info.title,
        url: args[0],
        requester: msg.author.username + "#" + msg.author.discriminator,
        requesterAvatar: msg.author.displayAvatarURL,
        channel: msg.channel
      });

      if (!data.dispatcher) play(client, active, data, data.queue[0].channel);
      else {

        let embed = new Discord.RichEmbed()
        .setColor("#4287f5")
        .setDescription("Dodano do kolejki: **" + info.title + "** [\[link]\](" + info.video_url + ")") 
        .setFooter("Dodane przez: "+msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
        .setTimestamp();
        msg.channel.send(embed);        

      }

      active.set(msg.guild.id, data);
  }
}

async function play(client, active, data, kanau) {
    let embed = new Discord.RichEmbed()
    .setColor("#4287f5")
    .setDescription("Teraz gramy: **" + data.queue[0].songTitle + "** [\[link]\](" + data.queue[0].url + ")")
    .setFooter("Dodane przez: "+data.queue[0].requester, data.queue[0].requesterAvatar)
    .setTimestamp();
    kanau.send(embed);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly" }));
    data.dispatcher.guildID = data.guildID;
    data.dispatcher.once("finish", function(){
        finish(client, active, this);
    });
}

function finish(client, active, dispatcher) {
    let fetched = active.get(dispatcher.guildID);
    fetched.queue.shift();
    if (fetched.queue.length > 0) {
        active.set(dispatcher.guildID, fetched);

        play(client, active, fetched);
    } else {
        active.delete(dispatcher.guildID);
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave()
    }
}

module.exports = plej;
