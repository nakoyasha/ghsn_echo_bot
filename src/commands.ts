import {
  ApplicationIntegrationType,
  CommandInteraction,
  InteractionContextType,
  SlashCommandBuilder,
} from "discord.js";

export const commands = [
  {
    async execute(interaction: CommandInteraction) {
      const message = interaction.options.get("message", true)?.value as string;
      const attachment = interaction.options.get("file")?.attachment;
      const channel = interaction.channel;

      if (channel != null && channel.isSendable()) {
        interaction.reply({
          content: message,
          files: (attachment != undefined && [attachment]) || [],
        });
      }
    },
    ...new SlashCommandBuilder()
      .setName("echo-message")
      .setDescription("yeah")
      .addStringOption((option) =>
        option
          .setName("message")
          .setDescription("Message to send")
          .setRequired(true)
      )
      .setContexts([
        InteractionContextType.BotDM,
        InteractionContextType.Guild,
        InteractionContextType.PrivateChannel,
      ])
      .setIntegrationTypes([
        ApplicationIntegrationType.GuildInstall,
        ApplicationIntegrationType.UserInstall,
      ])
      .addAttachmentOption((option) =>
        option
          .setName("file")
          .setDescription("Image, file and etc to send")
          .setRequired(false)
      ),
  },
];
