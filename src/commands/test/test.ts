import { Command } from "../../lib/def";

export default new Command({
    name: "test",
    description: "Test command",
    callback: async (message, args) => {
        return message.reply("Test command executed!");
    }
});