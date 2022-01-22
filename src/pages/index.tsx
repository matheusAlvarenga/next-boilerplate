import React from "react";
import Head from "next/head";
import Activity from "../assets/activity.svg";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      Welcome to Next.js Boilerplate
      <Activity alt="test" />
    </main>
  </div>
);

export default Home;
