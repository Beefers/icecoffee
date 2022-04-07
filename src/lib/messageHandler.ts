import { client } from "..";
import { commands } from "../lib/commandHandler";

export default async function() {
    client.on("message", async (message) => {
        if (message.author?.bot || !message.content.toString().startsWith(client.config.prefix)) return;
    
        const args = message.content.toString().slice(client.config.prefix.length).trim().split(/ +/);
        const commandName = args.shift()?.toLowerCase();
        const command = commands.find(i => i.name === commandName);
    
        if (!command) return message.reply(`${commandName} is not a valid command!`);
    
        if (command.su && !client.config.superUserIds.includes(message.author_id)) return message.reply(`${message.author?.username} is not in the sudoers file. This incident will be reported.`);
    
        try {
            await command.callback(message, args);
        } catch (e) {
            console.error(e);
            message.reply("An error occured while executing the command!");
        }
    })
}