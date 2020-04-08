

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)


const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();

client.on('ready', () => {
  
    console.log(`---------------------------------\n ON | Usuarios: ${client.users.size} \n---------------------------------`);
});


  
const activities_list = [
    "✏️", 
    "🔧",
    "🔔", 
    "🛡️"
    ]; 

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000); 
});




client.on('message', async message  => {

 


    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);



    if(cmd === '!verificar'){

       let user = message.author;
      message.channel.send("``"+`🔐 ${message.author.username} | Para verificar que é humano clique No ✅` + "``").then(msg=>{
         msg.react('✅').then(r=>{
             msg.react('❌')
         })
         const qualquercoisafilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     const qualquercoisafilter2 = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     const qualquercoisa = msg.createReactionCollector(qualquercoisafilter, { time: 60000 });
     const qualquercoisa2 = msg.createReactionCollector(qualquercoisafilter2, { time: 60000 });
     qualquercoisa.on('collect', r => { 
      let canal = client.channels.get("673237816079286291")
         msg.edit("``"+ `${message.author.username} Verificado com sucesso!`+ "``");	
    
             canal.send("**Total de Membros:**" + "```" + message.guild.memberCount + "```" +  `**Usuario Registrado:**` + "```"+ message.author.tag + "```" + `\n **Entrou em:**` +"```"+ message.member.joinedAt +"```"+ `\n**Criada:**` + "```" + message.author.createdAt + "```"); 
           message.member.addRole("673235973701632000")
      
       })
     qualquercoisa2.on('collect', r2 => { 
         msg.edit(`${message.author.username} Cancelou o captcha e foi kickado!`);
        message.member.kick()
       })
     })
    }

 
if (message.content === "a!listaemojis") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}
if(cmd === "!say") {
  if (message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
    message.delete();
let embed = new Discord.RichEmbed()
.setDescription(args.join(' '))
.setColor([245, 149, 66])
message.channel.send(embed)
  } else {
    message.channel.send("``📍 Você não tem permissão``");
  }
}
if(cmd === "!notification") {

  let canal = client.channels.get("673243285468479502")
  let user = message.mentions.users.first() || message.author;
  if (message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
    message.delete();
let embed = new Discord.RichEmbed()
.setAuthor(`${user.username} Tornou-se um apoiador <3`,`https://flowpodcast.com.br/wp-content/uploads/2019/03/flow-quadrado2.png`)
.setDescription("Exemplo de descrição")
.setThumbnail(user.avatarURL)
.setFooter("@FlowPodcast")
.setColor([245, 149, 66])
canal.send(embed)
user.addRole(673243981370621983)
  } else {
    message.channel.send("``📍 Você não tem permissão``");
  }
}
if(cmd === "!podpost") {
  if (message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
    message.delete();
let embed = new Discord.RichEmbed()
.setAuthor("Novo Video do FlowPodcast!","https://flowpodcast.com.br/wp-content/uploads/2019/03/flow-quadrado2.png")
.setDescription(args.join(' '))
.setImage("https://flowpodcast.com.br/wp-content/uploads/2020/01/94-CID.jpg")
.setColor([245, 149, 66])
.setFooter("@FlowPodcast")
message.channel.send(embed)
  } else {
    message.channel.send("``📍 Você não tem permissão``");
  }
}

if(cmd == "!clear"){
  if (message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
      message.channel.bulkDelete(`${args[0]}`) 
      let i2 = new Discord.RichEmbed()
      .setFooter(`${message.author.username} Usou Sistema de limpeza`,`${message.author.avatarURL}`)
   
      .setDescription("``" + `Mensagens Excluidas: ${args[0]}`+ "``")
      .setColor([135, 66, 245])
      message.channel.send(i2)
      } else {
        let i2 = new Discord.RichEmbed()
        .setFooter(`| ERROR`,"https://cdn.discordapp.com/attachments/666270453744140288/666355080358002714/scout-icon-30.png")
        .setDescription(`${message.author.username}, VOCÊ NÂO POSSUI PERMISSÃO DE EXCLUIR MENSAGENS` )
        .setColor([135, 66, 245])
        message.channel.send(i2)
      }
}

    
});
client.login("")
