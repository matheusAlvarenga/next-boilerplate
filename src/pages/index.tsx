import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Activity from "../assets/activity.svg";

export type HomeProps = { locale: string };

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale)) },
});

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        Welcome to Next.js Boilerplate
        <h1>{t("home.text1")}</h1>
        <Activity alt="test" />
      </main>
    </div>
  );
};

export default Home;
