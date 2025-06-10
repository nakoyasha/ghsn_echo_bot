import type { Interaction } from "discord.js";
import { commands } from "../commands";

export default async function InteractionCreate(interaction: Interaction) {
  if (interaction.isCommand()) {
    const command = commands.find(
      (command) => command.name == interaction.commandName
    );

    if (command) {
      await command.execute(interaction);
    }
  }
}
