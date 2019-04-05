const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
    console.log("je suis connecté!")
})

bot.on('message', function (message) {
    if (message.content === 'CMFP') {
        message.reply('',File)
    }
    if (message.content === '!PIZZA') {
        message.reply('Mamithé adore ça!')
    }
})







bot.login('NTYzNzQ2Mzc3NzcyMDQwMjE5.XKePoA.xFrctpn45UgkzRPeFH6JTONDqh0');
