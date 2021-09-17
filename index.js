

  const TOKEN = 'ODg3Njk1MTMzNjYxODU5OTUw.YUH4hA.hmPRdFgrMm5TBGCi4j3bAs4fRjw';

const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})


/* quand il est pret (connecté tout ça) il envoie un message sur le channel XXXXXXXXXX */
client.once('ready', () => {
    console.log(`Connecté : ${client.user.username}`);
    client.channels.fetch('887999990100795414')
        .then(channel => {
            channel.send(`${client.user.username} Issou !`);
        })
});


// create a message event
client.on('message', (message) => {
    if (message.author.bot) {
     // if the message is a bot
     console.log(`${message.author.username} sent: '${message.content}'`); // you can fetch the message text through `message.content`
   
     if (message.embeds[0])
      // if the message includes an embed
      console.log(
       `${message.author.username} Me el banadores ${message.embeds[0].title}`
      ); // you can fetch the embed content through `message.embeds[0]`
    }
   });



        if(m.content.includes("attaque")){
            m.channel.send("😏 😏 😏, https://tenor.com/view/issou-risitas-moulaland-gif-20794110");
        }


client.on('message', msg => {
    if (msg.content === 'Un petit café ?') {
      msg.reply('https://tenor.com/view/risitas-the-serieux-gif-9505856');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'paypal') {
      msg.reply('https://tenor.com/view/risitas-issous-jvc-1825-gif-7635091');
    }
  });



  client.on('message', msg => {
    if (msg.content === 'J ai faim') {
      msg.reply('https://tenor.com/view/1825-issou-tiramisu-tiram-issou-el-risitas-gif-15551125');
    }
  });

/* blip boup */
client.login(TOKEN);