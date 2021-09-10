const discord = require("discord.js");
const fs = require("fs");
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const Discord = require("discord.js")
const fetch = require('node-fetch');
const app = express();
const client = new Discord.Client();
const prefix = '/'

setInterval(() => {
const Linkler = db.get('Linkler')
if(!Linkler) return;
const Aventadoria = Linkler.map(Revenge => Revenge.url)
Aventadoria.forEach(Link => {
try {
fetch(Link)
} catch(e) {
console.error(e)
}
})
console.log(`${client.user.username} | ${db.get('Proje') || 1} Proje Hostandı`)
}, 60000)

client.on('ready', () => {
console.log(`${client.user.username} Aktif!`)
if(!Array.isArray(db.get('Linkler'))) {
db.set('Linkler', [])
}
})
client.on('message', async message => {
  if(message.author.bot) return;
  var Split = message.content.split(' ')

  if(Split[0] == prefix+'ekle') {
   const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDQ4NDc3NzU3NDc5MzI2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI5NDYyNDA2fQ.hVXc6YiBPNk2X7j3c6zVZsWv1ROV_osYfB1pkr30pHw', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {	 
  var Link = Split[1]
  fetch(Link).then(() => {
    const Revenge = new Discord.MessageEmbed()
    
    .setColor('RED')
      .setTitle('> Yanlış Kullanım! <:evet:882539148974620683>')
    .setDescription(`
  > <:hata:885193548172001321> **Kayıtlı Bir Link Girdiniz Yada Yeni Bir Link Girmelisiniz.**
  
  > <a:emoji:885223409934532689> **Örnek Kullanım:**
  > <a:emoji:885223410475606026> **\`/ekle <link>\`**
    `)
    .setFooter(`Luisa Plus+ Uptime`)
    .setThumbnail(message.author.avatarURL())  
    if(db.get('Linkler').map(Revenge => Revenge.url).includes(Link)) return message.channel.send(Revenge)
    const Emrecan = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setThumbnail(message.author.avatarURL())
    .setTitle('Başarılı! <:emoji:877939274899681291>')
    .setDescription(`
    > <:emoji:885193548172001321> Botunuz Sistemimize Başarıyla Eklendi.
    
    > <a:emoji:885223409934532689> **Bilgi:**
    > <a:emoji:885223410475606026> **\`Bizi Tercih Ettiğiniz İçin Teşekkürler.\`**
    > <a:emoji:882903918345084958> **\`/linkler\` Komutunu Kullanarak Ekledigin Linklere Erişebilirsin.**
    `)
    .setFooter(`Luisa Plus+ Uptime`)
    message.channel.send(Emrecan)
    db.push('Linkler', { url: Link, owner: message.author.id, owner2: message.author.tag})
    db.add(`Sahiplik_${message.author.id}`,1)
    db.push(`Projesi_${message.author.id}`,Link)
    db.add(`Proje`,1)
  }).catch(Hata => {
  const UpTime = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('> Yanlış Kullanım! <:evet:882539148974620683>')
  .setDescription(`
  > <:hata:885193548172001321> **Kayıtlı Bir Link Girdiniz Yada Yeni Bir Link Girmelisiniz.**
  
  > <a:emoji:885223409934532689> **Örnek Kullanım:**
  > <a:emoji:885223410475606026> **\`/ekle <link>\`**
  `)

  .setFooter(`Luisa Plus+ Uptime`)
  .setThumbnail(message.author.avatarURL())
  message.channel.send(UpTime)
  })
      	      } else {
        message.channel.send(new Discord.MessageEmbed().setColor('#f8f8f9').setImage("https://media.discordapp.net/attachments/882537510574628885/885206508281925673/lak.gif").setTitle('<:hata:882539148974620683> Bip Bop... - Hata Var! -').setDescription('> <:hata:885193548172001321> **Bota Oy Vermeden Uptime Yapamazsın!** \n>  <:hata:885193548172001321>  **- Tek Yapman Gereken Aşağıdaki Linker Basıp Oy Vermek. -** \n\n> <:wait:885194309350080563> **Oy Vermek İçin;**  \n> <:wait:885194309350080563> - **[**[Tıkla!](https://top.gg/bot/764484777574793266/vote)**]** -'));
      }
  })
      }

  if(Split[0] == prefix+'davet') {
  const Revo = new Discord.MessageEmbed()
  .setColor('#20aaba')
  .setDescription(`
${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz\n
	Botu davet etmek istiyorsan yazılara tıklayabilir ve botu sunucuna davet edebilirsin iyi kullanımlar.
  
  <a:emoji:882561657455382539> [Rollü Davet](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
  <a:emoji:882561657455382539> [Rolsuz Davet](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot)
  <a:emoji:882558707261653065> [Destek Sunucusu](https://discord.gg/PN7xmXaHTd)
  `)
  .setThumbnail(message.author.avatarURL())
  message.channel.send(Revo)
  }

  if(Split[0] == prefix+'botbilgi') {
  const Istatistik = new Discord.MessageEmbed()
  .setColor('#20aaba')
  .setThumbnail(message.author.avatarURL())
  .setFooter(`Luisa Plus+ Uptime`)
  .setDescription(`
**<a:emoji:885223409934532689> Isim -** __${client.user.username}__
**<a:emoji:885223409934532689> Kanal Sayısı -** __${client.channels.cache.size}__
**<a:emoji:885223409934532689> Sunucu Sayısı -** __${client.guilds.cache.size}__
**<a:emoji:885223409934532689> Kullanıcı Sayısı -** __${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}__
**<a:emoji:885223409934532689> Link Sayısı -** __${await db.fetch('Proje') || 1}__
`)
message.channel.send(Istatistik)
  }

  if(Split[0] == prefix+'say') {
  const Revoş = new Discord.MessageEmbed()
  .setColor('#20aaba')
  .setThumbnail(message.author.avatarURL())
  .setFooter(`Luisa Plus+ Uptime`)
  .setImage('https://images-ext-1.discordapp.net/external/r6QY35W0AZjVVt7yFDF1vlU9KnTtINIEYvAo4X8PPM0/https/media.discordapp.net/attachments/882537510574628885/885206508281925673/lak.gif')
  .setDescription(`
  > <:emoji:885259881601466388> \`${db.get('Proje')}\` **Adet Bota Ve URL'ye Hizmet Etmektedir.**
  > <:emoji:885259881601466388> \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` **Tanesi Senin Projendir Projene Hizmet Etmekteyiz.**
  
  > <a:emoji:885223409934532689> **Bilgi:**
  > <a:emoji:885223410475606026> **Sende Botunu Eklemek İstersen** \`/ekle\` **Adlı Komudu Kullanabilirsin.**
`)
  message.channel.send(Revoş)
  }

  if(Split[0] == prefix+'yardım') {
        
  const HugoMugo = new Discord.MessageEmbed()
  .setColor('#20aaba')
  .setThumbnail(message.author.avatarURL())
  .setFooter(`Luisa Plus+ Uptime`)
  .setAuthor(client.user.username,client.user.avatarURL())
  .setImage('https://images-ext-1.discordapp.net/external/r6QY35W0AZjVVt7yFDF1vlU9KnTtINIEYvAo4X8PPM0/https/media.discordapp.net/attachments/882537510574628885/885206508281925673/lak.gif')
  .setDescription(`

:battery: [/ekle](https://discord.gg/XnyU2VcFVF*) = **__Botunuzu Aktif Edersiniz!__**
:page_with_curl: [/linkler](https://discord.gg/XnyU2VcFVF) = **__Aktif Linklerin Sayısına Bakarsınız!__**
:link: [/davet](https://discord.gg/XnyU2VcFVF) = **__Botun Davet Linkini Gösterir!__**
:bar_chart: [/botbilgi](https://discord.gg/XnyU2VcFVF) = **__Botun Bilgilerine Bakarsınız!__**
<:emoji:880145134317101096> [/say](https://discord.gg/XnyU2VcFVF) = **__Tüm Projeleri Sayısına Bakarsınız!__**

<a:emoji:885223409934532689> **Bilgi:**
<a:emoji:885223410475606026> **Sende Botunu Eklemek İstersen** \`/ekle\` **Adlı Komudu Kullanabilirsin.**`)
.setThumbnail('https://media-exp1.licdn.com/dms/image/C560BAQEH9TvphW2WeQ/company-logo_200_200/0/1624390779034?e=2159024400&v=beta&t=vHJVE5rsq12RqUP4w5zXIWIfz-huJHgOPsSZHudo6nI')
  message.channel.send(HugoMugo)   
  }

    if(Split[0] == prefix+'linkler') {
    const Linkleri = db.fetch(`Projesi_${message.author.id}`)
    if (!db.get('Linkler').map(Revenge => Revenge.owner).includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed().setColor('#20aaba').setDescription(`**Hiç link eklememişsin. Link Eklemek İçin \`${prefix}ekle\` yazman yeterli**`))
    message.channel.send(new Discord.MessageEmbed().setColor('#20aaba').setDescription(`**Uptime Etmekte Olduğun Linkler Direkt Özeline Gönderildi. 
    Özel mesajlarını kontrol etmeyi unutma! ${message.author}** <a:emoji:877821821561475072>`).setImage('https://images-ext-1.discordapp.net/external/r6QY35W0AZjVVt7yFDF1vlU9KnTtINIEYvAo4X8PPM0/https/media.discordapp.net/attachments/882537510574628885/885206508281925673/lak.gif').setThumbnail(message.author.avatarURL()))
    message.author.send(new Discord.MessageEmbed().setImage('https://images-ext-1.discordapp.net/external/r6QY35W0AZjVVt7yFDF1vlU9KnTtINIEYvAo4X8PPM0/https/media.discordapp.net/attachments/882537510574628885/885206508281925673/lak.gif').setColor('#20aaba').setTitle('Luisa Plus+ Linkler').setDescription(`
    > <a:emoji:882903918345084958> **Sizin Linkleriniz:**
    > \``+Linkleri.join('\n')+`\`
    
    > <a:emoji:877588606083010600> \`${db.get('Proje')}\` ***Adet Projeye Hizmet Etmektedir.***
    > <a:emoji:885223409934532689> **Bilgi:**
    > <a:emoji:885223410475606026> **Sende Botunu Eklemek İstersen** \`/ekle\` **Adlı Komudu Kullanabilirsin.**`).setThumbnail(message.author.avatarURL()))
    }


    if(Split[0] == prefix+'uarıa4212132192121') {
const Megenge = new Discord.MessageEmbed()
.setColor('#20aaba')
.setThumbnail(message.author.avatarURL())
.setFooter(`Luisa Plus+ Uptime`)
.setTitle('🎈 Erişim Kontrol')
.setDescription('**» Erişiminiz Aktif**')
message.channel.send(Megenge)
}
})

client.on('ready', () => {
client.user.setActivity(`📕 - /yardım - /ekle | 📺 ${client.guilds.cache.size} Sunucu! - 🪐 ${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()} Kullanıcı!`, { type: 'WATCHING' })
//client.user.setStatus('dnd')
})

client.on("message", async message => {

  if(!message.content.startsWith("eval")) return;
  if(!["713831710885806125","713831710885806125"].includes(message.author.id)) return;
  var args = message.content.split("eval")[1]
  if(!args) return message.channel.send(":x: ..")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })

const Log = message => {
console.log(`${message}`)
}
client.login(process.env.token)

