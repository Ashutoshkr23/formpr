"use client"

import React, { useState } from "react";
import Head from "next/head";
import { LandingNav, Products, Story, Android, Hero, FAQ, Benefits, LoopBlack, Partners, LoopMaven } from "@/components";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Landing = () => {

  const router = useRouter();

  const [showHomePage, setshowHomePage] = useState(false)
  const [checkSessionCompleted, setcheckSessionCompleted] = useState(false)

  async function checkUserSession() {
    if (checkSessionCompleted === true) {
      return;
    }

    setcheckSessionCompleted(true)
    const session = await getSession();
    if (session?.user?.email === undefined) {
      setshowHomePage(true)
    } else if (session?.user?.email !== undefined) {
      router.push('/store')
    }
    return;
  }

  checkUserSession()

  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className=" max-w-[1440px]  mx-auto">
      {showHomePage && <Head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <title>Loop: Visting Cards Reimagined on Web3</title>
        <meta
          property="og:title"
          content="NFC Visting Cards Reimagined on Web3"
          key="title"
          description="Discover Loop, the effortless, eco-conscious networking solution designed to elevate your networking game. With cutting-edge designs and a seamless user experience, Loop offers classy and luxurious products that leave a lasting impression. Experience the app-free advantage of Loop Connections, edit and adapt your digital card with limitless flexibility, and enjoy seamless connections across Android and iOS platforms. Join the Web3.0 revolution and unlock the limitless possibilities with Loop. Make networking beautifully simple today."
        />
      </Head>
      }
      {showHomePage && <LandingNav />}
      {showHomePage && <Hero />}
      {showHomePage && <Benefits />}
      {showHomePage && <LoopMaven />}
      {showHomePage && <Products />}
      {showHomePage && <LoopBlack text={"BUY NOW"} />}
      {showHomePage && <Story />}
      {showHomePage && <Partners />}
      {showHomePage && <Android />}
      {showHomePage && <FAQ />}
    </div>

  );
};

export default Landing;
