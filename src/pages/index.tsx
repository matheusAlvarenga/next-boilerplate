import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Github from "../assets/svgs/github.svg";
import { Button } from "../components/button";
import {
  AbsoluteDiv,
  HomepageWrapper,
  MainTitle,
  SubTitle,
  VerticalFlex,
} from "../styles";
import { AbsoluteLottie } from "../components/absoluteLottie";
import spaceLottie from "../assets/lotties/space.json";
import { Spacer32 } from "../styles/layout/spacers.styles";
import { Features } from "../components/features";
import { builtInFeatures, nextFeatures } from "../constants";

export type HomeProps = { locale: string };

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale)), locale },
});

const Home: React.FC<HomeProps> = ({ locale }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <HomepageWrapper>
        <AbsoluteLottie lottieData={spaceLottie} />
        <VerticalFlex>
          <Features title={t("builtin-features")} features={builtInFeatures} />
        </VerticalFlex>
        <VerticalFlex>
          <MainTitle data-testid="main-title">{t("main-title")}</MainTitle>
          <SubTitle data-testid="sub-title">{t("sub-title")}</SubTitle>
          <Spacer32 />
          <Button
            data_testid="main-button"
            onClick={() =>
              router.push(
                "https://github.com/matheusAlvarenga/next-boilerplate"
              )
            }
            Icon={Github}
          >
            {t("main-button")}
          </Button>
        </VerticalFlex>
        <VerticalFlex>
          <Features
            title={t("next-features")}
            features={nextFeatures}
            side="right"
            bottom
          />
        </VerticalFlex>
        <AbsoluteDiv bottom="40px" left="40px">
          <Button
            data_testid="lang-changer"
            styling="clear"
            onClick={() =>
              router.push("/", "/", { locale: locale === "en" ? "pt" : "en" })
            }
          >
            {locale === "en" ? "PT-BR" : "EN-US"}
          </Button>
        </AbsoluteDiv>
      </HomepageWrapper>
    </div>
  );
};

export default Home;
