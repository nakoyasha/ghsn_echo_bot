import { configDotenv } from "dotenv";

configDotenv();
import { Events } from "discord.js";
import { client } from "./system/client";

import InteractionCreate from "./handlers/InteractionCreate";
import Ready from "./handlers/Ready";

client.on(Events.ClientReady, Ready);
client.on(Events.InteractionCreate, InteractionCreate);

client.login(process.env.TOKEN);
