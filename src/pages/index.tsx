import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Activity from "../assets/activity.svg";
import { Button } from "../components/button";

export type HomeProps = { locale: string; greeting: string };

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale)) },
});

const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Button onClick={() => {}} Icon={Activity}>
          {t("main-button")}
        </Button>
      </main>
    </div>
  );
};

export default Home;
