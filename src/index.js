const { Client } = require('discord.js');
require("dotenv").config();
const { YUUREI_TOKEN } = process.env;

const client = new Client({disableEveryone:true});

client.on('ready', () => {
    console.log('im ready');
});

client.once("ready", () => {
    client.user.setActivity('HOTEL DIABLO',{type:'LISTENING'});
    client.user.setStatus('idle');
});

client.login(YUUREI_TOKEN);