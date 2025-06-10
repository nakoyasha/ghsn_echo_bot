"use strict";

// src/index.ts
var import_dotenv3 = require("dotenv");
var import_discord4 = require("discord.js");

// src/system/client.ts
var import_dotenv = require("dotenv");
var import_discord = require("discord.js");
(0, import_dotenv.configDotenv)();
var client = new import_discord.Client({
  intents: ["Guilds"],
  partials: [import_discord.Partials.GuildMember]
});
var rest = new import_discord.REST().setToken(process.env.TOKEN);

// src/commands.ts
var import_discord2 = require("discord.js");
var commands = [
  {
    async execute(interaction) {
      const message = interaction.options.get("message")?.value;
      const channel = interaction.channel;
      if (channel != null && channel.isSendable()) {
        interaction.reply(message);
      }
    },
    ...new import_discord2.SlashCommandBuilder().setName("echo-message").setDescription("yeah").addStringOption(
      (option) => option.setName("message").setDescription("Message to send").setRequired(true)
    )
  }
];

// src/handlers/InteractionCreate.ts
async function InteractionCreate(interaction) {
  if (interaction.isCommand()) {
    const command = commands.find(
      (command2) => command2.name == interaction.commandName
    );
    if (command) {
      await command.execute(interaction);
    }
  }
}

// src/handlers/Ready.ts
var import_dotenv2 = require("dotenv");
var import_discord3 = require("discord.js");
(0, import_dotenv2.configDotenv)();
async function Ready() {
  rest.put(import_discord3.Routes.applicationCommands("1382113366226637055"), { body: commands }).catch((err) => {
    console.log(err);
  });
  console.log("popbob ready!");
}

// src/index.ts
(0, import_dotenv3.configDotenv)();
client.on(import_discord4.Events.ClientReady, Ready);
client.on(import_discord4.Events.InteractionCreate, InteractionCreate);
client.login(process.env.TOKEN);
