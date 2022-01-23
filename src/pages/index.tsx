import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Github from "../assets/svgs/github.svg";
import { Button } from "../components/button";
import { HomepageWrapper, MainTitle, SubTitle, VerticalFlex } from "../styles";
import { AbsoluteLottie } from "../components/absoluteLottie";
import spaceLottie from "../assets/lotties/space.json";
import { Spacer32 } from "../styles/layout/spacers.styles";

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
        <AbsoluteLottie lottieData={spaceLottie} />
        <VerticalFlex>
          <MainTitle>{t("main-title")}</MainTitle>
          <SubTitle>{t("sub-title")}</SubTitle>
          <Spacer32 />
          <Button onClick={() => {}} Icon={Github}>
            {t("main-button")}
          </Button>
        </VerticalFlex>
      </HomepageWrapper>
    </div>
  );
};

export default Home;
