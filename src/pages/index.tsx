import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Github from "../assets/svgs/github.svg";
import { Button } from "../components/button";
import { HomepageWrapper } from "../styles";

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

      <HomepageWrapper>
        <Button onClick={() => {}} Icon={Github}>
          {t("main-button")}
        </Button>
      </HomepageWrapper>
    </div>
  );
};

export default Home;
