const Discord = require("discord.js")
class wybierz {
  constructor(){
    this.name = "wybierz-lepsze",
    this.alias = ["wybierz"]
  }
  async run (client, msg, args) {
    let arg2 = args[0]
    let arg3 = args[1]
    let decyzja = Math.floor((Math.random() * 10) + 1);
    if (decyzja > 5){
        msg.channel.send("Wybieram " + arg2);
    }
    else {
        msg.channel.send("Wybieram " + arg3);
    }
  }
}
module.exports = wybierz;
