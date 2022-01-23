import { ExampleGreeting } from ".";
import { axiosApi } from "..";

export const exampleGreeting: ExampleGreeting = async ({ name }) => {
  const response = await axiosApi.post("/greeting", { name });

  return {
    greeting: response.data.greeting,
  };
};
