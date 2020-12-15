const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let codare = "desteksunucusulinki"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `v!yardım-genel`\n**Örnek:** `v!yardım-eglence`\n[Victory Botunu Hemen Ekle](https://discord.gg/s7enzpAQsc)')
    .addField('Komutlar:', 
    `
    [v!yardım-genel](${codare})
    `)
    .addField('» Sponsor', 
    `Bize Verdikleri Destek İçin Victorye'e Teşşekür Ederiz Discordlarına [Katılın!](https://discord.gg/s7enzpAQsc)`)
    .setImage('')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.gg/s7enzpAQsc) | [Destek Sunucusu](https://discord.gg/s7enzpAQsc) | [Oy Ver](https://discord.gg/s7enzpAQsc) | [Web Sitesi](https://discord.gg/s7enzpAQsc)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
message.channel.send('')
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım"
}