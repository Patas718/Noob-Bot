const Discord = require('discord.js');
const {prefix, token} = require("./config.json")

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Patas#1107 is join on my discord server');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'patas'){
       message.channel.send('Im Patrik'); 
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/c/PatrikSimek0');
});




client.login(token);
