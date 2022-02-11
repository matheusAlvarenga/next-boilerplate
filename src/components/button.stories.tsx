import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "./button";

export default {
  title: "Example/Header",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Test</Button>
);
