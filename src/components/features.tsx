import React from "react";
import { FeaturesItem, FeaturesTitle, FeaturesWrapper } from "../styles";

export type FeaturesProps = {
  title: string;
  features: string[];
  side?: "right" | "left";
  bottom?: boolean;
};

export const Features: React.FC<FeaturesProps> = ({
  features,
  title,
  side = "left",
  bottom = false,
}) => (
  <FeaturesWrapper bottom={bottom} side={side}>
    <FeaturesTitle>{title}</FeaturesTitle>
    {features.map(feature => (
      <FeaturesItem>{feature}</FeaturesItem>
    ))}
  </FeaturesWrapper>
);
