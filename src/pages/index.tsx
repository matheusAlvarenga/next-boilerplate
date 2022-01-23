import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/space.json";

import Activity from "../assets/activity.svg";
import { exampleGreeting } from "../services/api/example_greeting";

export type HomeProps = { locale: string; greeting: string };

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { greeting } = await exampleGreeting({ name: "Matheus" });

  return {
    props: { ...(await serverSideTranslations(locale)), greeting },
  };
};

const Home: React.FC<HomeProps> = ({ greeting }) => {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        Welcome to Next.js Boilerplate
        <h1>{t("home.text1")}</h1>
        <h1>{greeting}</h1>
        <Activity alt="test" />
        <Lottie options={defaultOptions} height={400} width={400} />
      </main>
    </div>
  );
};

export default Home;
