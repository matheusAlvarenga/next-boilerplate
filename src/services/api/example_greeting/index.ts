/* eslint-disable import/no-cycle */
import * as integration from "./integration";
import * as mock from "./mock";

const selectedModule =
  process.env.NEXT_APP_USE_MOCKS === "true" ? mock : integration;

export const { exampleGreeting } = selectedModule;

export type ExampleGreetingData = {
  name: string;
};

export type ExampleGreetingResponse = {
  greeting: string;
};

export type ExampleGreeting = (
  data: ExampleGreetingData
) => Promise<ExampleGreetingResponse>;
