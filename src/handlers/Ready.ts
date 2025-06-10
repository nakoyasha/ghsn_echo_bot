import { commands } from "../commands";
import { rest } from "../system/client";
import { Routes } from "discord.js";

export default async function Ready() {
  rest
    .put(Routes.applicationCommands("1382113366226637055"), { body: commands })
    .catch((err) => {
      console.log(err);
    });

  console.log("popbob ready!");
}
