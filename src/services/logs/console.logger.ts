/* eslint-disable no-console */
import chalk from "chalk";
import { LogSystem } from ".";

export const consoleLog: LogSystem = data => {
  console.log(chalk.bgMagenta("==/==/==/==/==/==/=="));

  switch (data.type) {
    case "error":
      console.log(chalk.bold.red(data.slug));
      break;
    case "info":
      console.log(chalk.bold.blue(data.slug));
      break;
    case "warning":
      console.log(chalk.bold.yellow(data.slug));
      break;
    default:
      console.log(chalk.bold.white(data.slug));
  }

  console.log(chalk.white("Route: ", data.route));

  console.log(chalk.white("Date: ", new Date()));

  console.log(chalk.white("Body: ", JSON.stringify(data.body)));

  console.log(chalk.bgMagenta("==/==/==/==/==/==/=="));
};
