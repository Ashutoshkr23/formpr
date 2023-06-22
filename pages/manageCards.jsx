import { CartNav } from "@/components"
import ManageCardComps from "@/components/manageCards/ManageCardComps"
import { getSession } from "next-auth/react"

const manageCards = () => {

    return (
        <>
            <div className='w-full  min-h-screen py-5'>
                <CartNav />
                <ManageCardComps />
            </div>
        </>
    )
}

export default manageCards



export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (!session) {
      return {
        redirect: {
          destination: "/login",
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