import { ExampleGreeting } from ".";
import { freeze } from "../../../utils/freeze";

export const exampleGreeting: ExampleGreeting = async ({ name }) => {
  await freeze(2500);

  return {
    greeting: `Hello, mocked ${name}!`,
  };
};
