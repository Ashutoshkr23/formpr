import React from "react";
import Head from "next/head";
import {
  LandingNav,
  Products,
  Story,
  Android,
  Hero,
  FAQ,
  Benefits,
  LoopBlack,
  Partners,
} from "@/components";

const Landing = () => {
  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className=" max-w-[1440px]  mx-auto">
      <Head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <title>Loop: Visting Cards Reimagined on Web3</title>
        <meta
          property="og:title"
          content="NFC Visting Cards Reimagined on Web3"
          key="title"
          description="Discover Loop, the effortless, eco-friendly networking solution designed to elevate your networking game. With cutting-edge designs and a seamless user experience, Loop offers classy and luxurious products that leave a lasting impression. Experience the app-free advantage of Loop Connections, edit and adapt your digital card with limitless flexibility, and enjoy seamless connections across Android and iOS platforms. Join the Web3.0 revolution and unlock the limitless possibilities with Loop. Make networking beautifully simple today."
        />
      </Head>
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />
      <LoopBlack />
      <Story />
      <Partners />
      <Android />
      <FAQ />
    </div>
  );
};

export default Landing;
