const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const pythonic = require('quick.db')
const prefix = ayarlar.prefix


exports.run = async(client, message, args) => {

   let toplam1  = pythonic.fetch(`ban.${message.author.id}`)
   
   if(toplam1 === undefined) toplam1 = '0'
  if(toplam1 === null) toplam1 = '0'
 
  
  
  
  
  
  
  
  
  
const embed = new Discord.MessageEmbed()
.setTitle("Victory x Victory")
.addField(`${prefix}cmm`, 'Change My Mind Komududur')
.setFooter(`Victory ! x Victory - ${toplam1} kişiye ban atmışsın`)

message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"],
  permLevel: 0,
}

exports.help = {
  name: "yardım-eglence"
}; // şimdi :D