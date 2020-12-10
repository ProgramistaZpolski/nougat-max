const Discord = require("discord.js")
class help {
  constructor(){
    this.name = "pomoc",
    this.alias = ["pomoc", "help"]
  }
  async run (client, msg, args) {
    // embedy
    let embed = new Discord.MessageEmbed()

    if(!args[0]) {
      embed.setColor(0x198c41)
      embed.setTitle(`Pomoc 📚`)
      embed.setDescription("Problemy z botem? Sprawdź status bota: [Link do Freshstatus](https://nougat.freshstatus.io)\nDołącz do naszego [discorda](https://discord.gg/HP3ZADA)\n\nKomenda \\***pomoc** jest podzielona na kategorię.\nAby zobaczyć wszystkie komendy i ich opisy należy wpisać \\*help <kategoria>\nDostępne kategorie: Rozrywka, Moderacja, Ekonomia, Bot, Muzyka\n\n:link: [Panel Bota](http://83.7.49.211/)")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "ekonomia") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/💰Ekonomia\n\n\`*biedronka\` - Wyświetla listę produktów znajdujących się w niej.\n\n\`*daily\` - Codziennne pieniądze.\n\n\`*kup\` - Kupowanie produktu z biedronki.\nPoprawne użycie: \`*kup <id produktu>\`\n\n\`*money\` - Sprawdza stan konta danego użytkownika\nPoprawne użycie: \`*money <@użytkownik#0000>\`\n\n\`*pay\` - Płacenie innemu użytkownikowi.\nPoprawne użycie: \`*pay <@uzytkownik#0000> <liczba pieniędzy>\`\n\n\`*sprzedaj\` - Komenda dzięki której możesz sprzedać własny produkt w biedronce.\n\n\`*top\` - Ranking 10 użytkowników posiadających najwięcej pieniędzy.")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "rozrywka") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/☺Rozrywka\n\n\`*8ball\` - Losowo odpowiada na pytanie.\nPoprawne użycie: \`*8ball <pytanie>\`\n\n`*ciastko\` - Daje ci ciastko.\n\n\`*cowsay\` - Krowa coś mówi.\nPoprawne użycie: \`*cowsay <tekst>\`\n\n\`*odwroc\` - Odwraca tekst\nPoprawne użycie: \`*odwroc <tekst>\`\n\n\`*pozwij\` - Pozywa użytkownika do sadu.\n\n\`*rps\` - Kamień Papier Nożyce.\nPoprawne użycie: \`*rps <1 - Nożyce, 2 - Papier, 3 - Kamień>\`\n\n`*say\` - Bot mówi coś za ciebie\nPoprawne użycie: \`*say <tekst do powiedzenia>\`\n\n`*sms\` - Wysyła SMS do danej osoby.\n\n\`*statki\` - Shipowanie.\nPoprawne użycie: \`*statki <tekst> <tekst>\`\n\n\`*wybierz\` - Wybiera jedną z dwóch rzeczy\nPoprawnie użycie: \`*wybierz <tekst> <tekst>\`\n\n\`*wyscig\` - Mini gra w której ścigają się pociągi.\n\n\`*zjedz\` - Działa na takiej samej zasadzie co komenda pozwij lecz zamiast pozywania jest jedzenie.")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "moderacja") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚") 
      embed.setDescription("Pomoc/🔩Moderacja\n\n\`*ban\` - Blokuje daną osobę na serwerze.\nPoprawne użycie:\`*ban <@uzytkownik#0000> <powod>\`\n\n\`*kick\` - Wyrzuca daną osobę z serwera.\nPoprawne użycie: \`*kick <@uzytkownik#0000> <powod>\`\n\n\`*userinfo\` - Wyświetla informację o użytkowniku.\nPoprawne użycie: \`*userinfo <@uzytkownik#0000>\`\n\n\`warn\` - Ostrzega osobę.\nPoprawne użycie: \`*warn <@uzytkownik#0000> <powod>\`\n\n\`*kick\` - Wyrzuca daną osobę z serwera.\nPoprawne użycie: \`*kick <@uzytkownik#0000> <powod>\`\n\n\`*userinfo\` - Wyświetla informację o użytkowniku.\nPoprawne użycie: \`*userinfo <@uzytkownik#0000>\`\n\n\`tempban\` - Wycisza osobę na podany okres czasu.\nPoprawne użycie: \`*tempban <@uzytkownik#0000> <czas> <m lub h (minuty (m) lub godziny (h))>\`")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "bot") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/👾Bot\n\n\`*autorzy\` - Autorzy bota, oraz kontakt do nich.\n\n\`*invite\` - Wysyła link do zaproszenia bota na swój serwer.\n\n\`*github\` - Link do rezpozytoria Nougata na Githubie.\n\n\`*uptime\` - Uptime bota.");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "muzyka") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/🎶Muzyka\n\n\`*play\` - Dodaje piosenkę z podanego linku do kolejki.\nPoprawne użycie: \`*play <URL>\`\n\n\`*stop\` - Bot wychodzi z kanału głosowego");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "obrazki") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/🖼️Obrazki\n\n\`*deepfry\` - Grilluje twoje obrazki. \n\n\`*discord\` - Przerabia logo firmy Discord.\nPrawidłowe użycie: \`*discord <tekst>\`\n\n\`*flip\` - Robi odbicie lustrzane obrazka. 🪞\n\n\`*flip2\` - Obraca obrazek do góry nogami. 🙃\n\n\`*gadugadu\` - Przerabia obrazek firmy (a ja wiem czy to firma) GaduGadu.\nPoprawne użycie: \`*gadugadu <tekst>\`\n\n\`*greyscale\` - Twój obrazek staję się czarnobiały \\* magic 🧝‍♀️ \\*\n\n\`*guassian\` - Twój obrazek dostaje depresji.\n\n\`*google\` - Przerabia logo firmy Google.\nPoprawne użycie: \`*google <tekst>\`\n\n\`*invert\` - Twój obrazek przechodzi na ciemną stronę mocy. 👿\n\n\`*messenger\` - Przerabia logo aplikacji Messenger firmy Facebook.\nPoprawne użycie: \`*messenger <tekst>\`\n\n\`*normalize\` - Sprawia że twoje zdjęcie staję się spleśniałe. 🧀\n\n\`*odswiatlo\` - Wywala światło z twojego obrazka. 🕶️\n\n\`*posterization\` - Usuwa większość kolorów widniejących na obrazku. 👰🏿\n\n\`*sepia\` - Wehikuł czasu, przenieś się do lat starożytności.\n\n\`*swiatlo\` - Dodaje światło do twojego obrazka. 🤷🏻\n\n\`*sztrecz\` - Rozciąga twoj obrazek.");
      embed.setFooter("Pomoc");
      embed.setTimestamp();
    } else {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Taka kategoria nie istnieje!");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    }

    // wysyłka pocztą polską
    msg.channel.send(embed);
  }
} // co bo nie widzialem
module.exports = help;
