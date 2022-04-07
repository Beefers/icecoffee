import { Message } from "revolt.js";

export interface Config {
    token: string;
    prefix: string;
    superUserIds: string[];
}

export interface CommandOptions {
    name: string;
    description?: string;
    args?: string[];
    su?: true;
    callback: (msg: Message, args: string[]) => any;
}

export class Command {
    public name: string;
    public description: string;
    public su: boolean;
    public callback: (msg: Message, args: string[]) => any;

    public constructor(options: CommandOptions) {
        this.name = options.name;
        this.description = options.description || "";
        this.su = options.su || false;
        this.callback = options.callback;
    }
}