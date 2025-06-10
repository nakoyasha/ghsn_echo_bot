import { configDotenv } from "dotenv";

configDotenv();
import { Client, Partials, REST } from "discord.js";

export const client = new Client({
  intents: ["Guilds"],
  partials: [Partials.GuildMember],
});

export const rest = new REST().setToken(process.env.TOKEN as string);
