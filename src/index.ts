import { Client, ClientOptions } from "revolt.js";

import config from "../data/config.json" assert { type: "json" };
import { Config } from "./lib/def";

import initCommandHandler from "./lib/commandHandler";
import initMessageHandler from "./lib/messageHandler"

export class IceCoffeeBot extends Client {
    public config: Config;

    public constructor(options?: ClientOptions) {
        super(options);
        this.config = config;
    }
}

export const client = new IceCoffeeBot();

client.on("ready", async() => {
    await initCommandHandler();
    await initMessageHandler();
    console.log("Ready!");
})

client.loginBot(config.token);