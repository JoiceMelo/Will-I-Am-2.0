import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


const cliente = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

cliente.on('ready', () => {
    console.log('Will I Am 2.0 is ready')
})

cliente.on('messageCreate', (message) => {
    if (message.content === 'Olá') {
        message.reply('Carai, véi');
    }
});

cliente.on('messageCreate', (message) => {
    if (message.content === 'Tudo bem?') {
        message.reply('Se o cruzeiro tiver bem, eu to bem, cara. E você?');
    }
});

cliente.login(process.env.TOKEN)
