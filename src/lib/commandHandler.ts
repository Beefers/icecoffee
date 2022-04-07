import { dirname, join } from "path";
import { pathToFileURL } from "url";
import { readdirSync } from "fs";
const __dirname = dirname(new URL(import.meta.url).pathname).slice(1);

import { Command } from "./def";

export const commands = new Array<Command>();

export default async function() {
    const rootCommandsDir = join(__dirname, "../", "commands/").trim();
    const commandSubDirs = readdirSync(rootCommandsDir);

    for (const subDir of commandSubDirs) {
        const commandFiles = readdirSync(join(rootCommandsDir, subDir)).filter(i => i.endsWith(".js"));
        for (const commandFile of commandFiles) {
            const command = (await import(pathToFileURL(join(rootCommandsDir, subDir, commandFile)).toString())).default;
            commands.push(command);
        }
    }

    console.log(`Loaded ${commands.length} command(s).`);
}