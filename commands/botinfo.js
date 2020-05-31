const prefix = process.env.PREFIX
const Discord = require("discord.js")

module.exports = {
        name: 'botinfo',
        execute(message, args) {
                const embed = new Discord.MessageEmbed()
                        .setColor(process.env.EMBEDCOLOR)
                        .setAuthor("Bot Information", message.client.user.avatarURL())
                        .setDescription("Zing Tech Licensing System - OS Edition")
                        .setImage("https://cdn.discordapp.com/attachments/539579135786352652/716464714053320714/yes.png")
                        .addField("Discord API Latency",Math.round(message.client.ping) + " ms")
                        .addField("Source Code","https://github.com/iPanda969/whitelistbot")
                        .setFooter("made with love by @axivlRBX on twitter")
                message.channel.send(embed)
        },
};