import React from "react";
import Lottie from "react-lottie";
import { LottieWrapper } from "../styles";

export type AbsoluteLottieProps = {
  lottieData: any;
};

export const AbsoluteLottie: React.FC<AbsoluteLottieProps> = ({
  lottieData,
}) => (
  <LottieWrapper>
    <Lottie
      options={{
        animationData: lottieData,
        autoplay: true,
        loop: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  </LottieWrapper>
);
