const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const BotName = "시험작";

client.on("ready", () => {
    console.log(BotName + "봇 작동");
});

client.on('message', (msg) => {
    if (msg.content === (config.prefix + 'ping')) {
        msg.reply("pong");
    }
    if (msg.content === (config.prefix + '공지')) {
        const embed = new Discord.MessageEmbed()
            .setColor(`${config.col}`)
            .setTitle(`${config.title}`)
            .addFields(
                {
                    name: `${config.msg1}`,
                    value: `${config.msg2}`
                },
                {
                    name: `${config.msg3}`,
                    value: `${config.msg4}`
                },
                {
                    name: `${config.msg5}`,
                    value: `${config.msg6}`
                },     
            )
            .setFooter(msg.guild.name)
        msg.channel.send(embed);
    }
});

client.login(config.token)
