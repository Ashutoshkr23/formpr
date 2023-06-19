// import First from "@/components/First";
import { useSession, getSession } from 'next-auth/react';
import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
import React from "react";
import ProductComp from "@/components/landing/ProductComp";
import { Footer, LoopBlack } from "@/components";
import CartNav from "@/components/CartComps/CartNav";
import { CartContext } from "@/context/CartContext";

export default function Home() {

  const { data: session } = useSession();

  async function sendMailToNewUser() {
    const userEmail = session.user.email;
    const data = { userEmail }
    const response = await axios.post("/api/sendMailToNewUser", data);
  }

  useEffect(() => {
    sendMailToNewUser()
  }, [])


  const { cartItems } = useContext(CartContext)
  // console.log(cartItems, "cartItems")
  return (
    <div>
      <CartNav />
      <div className="sm:px-8 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto mb-20 lg:mb-28">
        <h2>Store</h2>
        <div className="flex w-[280px] mobile:w-[320px] lg:w-auto mx-auto gap-4 flex-col py-12 mb-4 lg:flex-row lg:justify-between">
          <ProductComp
            text={"Loop Lite"}
            img={"/assets/images/landing/Lite.png"}
            content={
              "Sleek and vibrant, our Loop Lite cards offer a range of solid color options with contrasting Loop logo that adds a bold touch of distinction"
            }
            cardtype={"Basic"}
            text2={"Whisper your brand, shoutout ours. "}
            offering1={"Solid Colors"}
            offering2={"Contrasting Logo"}
            price={"₹ 899"}
            color={"text-[#4FD86D]"}
            index={1}
          />
          <ProductComp
            text={"Loop Elevate "}
            img={"/assets/images/landing/ElevateCards.png"}
            content={
              "Elevate your style with Loop Elevate cards. Featuring a selection of solid colors and gradient options, our cards are designed with a Loop logo that seamlessly blends in, exuding sophistication."
            }
            cardtype={"Pro"}
            text2={"Whisper your brand, we blend in.  "}
            offering1={"Solid + Gradient Colors"}
            offering2={"Blending Logo"}
            price={"₹ 999"}
            color={"text-[#3BCBDD]"}
            index={2}
          />
          <ProductComp
            text={"Loop Supreme"}
            img={"/assets/images/landing/SupremeCard.png"}
            content={
              "Unleash your creativity with Loop Supreme cards. Offering unlimited color options, these cards boast a bold and eye-catching version of your logo on the back, making a statement that's impossible to ignore."
            }
            cardtype={"Elite"}
            text2={"Shoutout your brand, whisper ours. "}
            offering1={"Unlimited Colors"}
            offering2={"Standout Logo"}
            price={"₹ 1499"}
            color={"text-[#F16869]"}
            index={3}
          />
        </div>
        <LoopBlack text={"Coming Soon"} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
