import { Command } from "../../lib/def";
import { commands } from "../../lib/commandHandler";

export default new Command({
    name: "help",
    description: "Lists all valid commands",
    callback: async (message, args) => {
        return message.reply(commands.map(c => c.name).join(", "));
    }
});