import First from "@/components/First";
import { useSession, signIn, getSession,signOut } from "next-auth/react"
import axios from "axios";
import { useEffect } from "react";
import React from "react";


useEffect(() => {
  async function getUserProfile(){
    const { data: session } = useSession()
    console.log(session)
    const response = await axios.post('/api/userprofile', {email:session.user.email});
  
  console.log(response)
  
  }
    getUserProfile()    
     }, []);

export default  function Home () {
 
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
    <First/>
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