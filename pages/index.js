import First from "@/components/First";
import { useSession, getSession } from "next-auth/react"


export default function Home() {
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