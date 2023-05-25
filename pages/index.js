import First from "@/components/First";
import { useSession, signIn, getSession, signOut } from "next-auth/react"
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import React from "react";
import HomeComp from "@/components/HomeComp";

export default function Home({ cardType }) {
  // const { data: session } = useSession()
  // const hasFetchedUserProfileRef = useRef(false);

  // const getUserProfile = async () => {
  //   let postdata = {
  //     email: session.user.email
  //   }
  //   const response = await axios.post('api/userprofile', postdata);
  //   console.log(response)
  // }
  // useEffect(() => {
  //   console.log('Session object:', session);
  //   if (session && session.user && !hasFetchedUserProfileRef.current) {
  //     getUserProfile();
  //     hasFetchedUserProfileRef.current = true;
  //     console.log("useEffect Runned");
  //   }
  // }, [session]);
  return (
    <div>
      {/* <First cardType={cardType} /> */}
      <HomeComp cardType={cardType} />
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session, "session")
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  // else {
  //   // console.log()
  //   const requestData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cardType`)
  //   const data = await requestData.json()
  //   const cardType = !data.error ? data.result : []
  //   console.log(cardType, "cardType")
  //   return {
  //     props: {
  //       session,
  //       cardType: cardType
  //     },
  //   };
  // }
  return {
    props: {
      session,
    },
  };


}