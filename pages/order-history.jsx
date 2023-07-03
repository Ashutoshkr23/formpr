import React, { useContext, useEffect, useState } from "react";
import { useSession, signIn, getSession, signOut } from "next-auth/react";
import OrderHistoryComp from "@/components/OrderHistory/OrderHistoryComp";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CartNav } from "@/components";

export default function OrderHistory() {
  const { userProfile } = useContext(CartContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async (puuid) => {
      const response = await axios.get(`/api/orderHistory?puuid=${puuid}`);

      if (!response.data.error) {
        setLoading(false);
        if(response.data.result?.length){
        setOrderHistory(response.data.result);
        }
      } else {
        setLoading(false);
      }
    };
    if (userProfile?.puuid) {
      fetchOrderHistory(userProfile.puuid);
    }
  }, [userProfile]);

  return (
    <>
      <div className="w-full  min-h-screen py-5">
        {!loading &&  orderHistory.length ? (
           <>
           <CartNav />
          <OrderHistoryComp orderHistory={orderHistory} />
          </>
        ) : (
            <div>
              <CartNav/>
              <div className="px-4 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto">
              <h2 className="font-bold">Order History</h2>
              <p className='text-[#525252] mx-auto text-base md:text-xl text-center mt-20  w-[300px] md:w-[534px]'>You haven’t ordered anything yet.
                Please go to the store to purchase to view your order history.</p>
              <div className='relative flex justify-center mx-auto mt-20 mb-20 w-[298px] h-[234px] md:h-[515px] md:w-[656px]'>
                <Image fill={true} src={`/assets/images/display/No-Order.png`} alt="icon" />
                <Link href={"/store"} className="absolute top-6 md:top-12  inset-x-0 mx-auto w-28 md:w-36 rounded-md bg-black text-white px-2 h-8 md:h-10">
                <div className="mx-auto my-1 md:my-2 text-center">Go to Store</div></Link>
              </div>
              </div>
            </div>
        )}
      </div>
    </>
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
