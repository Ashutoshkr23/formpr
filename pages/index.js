import First from "@/components/First";
import { useSession, signIn, getSession, signOut } from "next-auth/react"
import axios from "axios";
import { useEffect } from "react";
import React from "react";



export default function Home () {
  const { data: session } = useSession()

  

  const getUserProfile = async() => { 
    
    let postdata = {
      email : session.user.email
    }

    const response = await axios.post('api/userprofile', postdata);
    console.log(response)

  }

  useEffect(()=> {
     getUserProfile()
  },[])



  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  return (
    <div>
      <First />
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

  return {
    props: {
      session,

    },
  };
}