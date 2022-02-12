import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "./button";

export default {
  title: "Example/Header",
  component: Button,
} as Meta;

const Template: Story<ButtonProps & { label: string }> = args => (
  // eslint-disable-next-line react/destructuring-assignment
  <Button {...args}>{args.label}</Button>
);

export const Default = Template.bind({});
Default.args = {
  styling: "main",
  label: "Example Button",
};
