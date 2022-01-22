import React from "react";
import { AppProps } from "next/app";
import { ResetStyle } from "../styles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ResetStyle />
  </>
);

export default MyApp;
