import { Client, ClientOptions } from "revolt.js";

import config from "../data/config.json" assert { type: "json" };
import { Config } from "./lib/def";

export class IceCoffeeBot extends Client {
    public config: Config;

    public constructor(co?: ClientOptions) {
        super(co);
        this.config = config;
    }
}

export const client = new IceCoffeeBot();

client.on("ready", async() => {
    console.log("Ready!");
})

client.loginBot(config.token);