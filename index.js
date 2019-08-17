const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NjEwODY2MDUyNDIyODI4MTA3.XVLfew.BEJAeD1-ThKI_tiOcohSdM4f2pc';

bot.login(token)
bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'E ai galera!') {
        msg.reply('Olá! Bem vindo ao nosso canal!')
    }
})