import React, { useContext, useEffect, useState } from "react";
import { useSession, signIn, getSession, signOut } from "next-auth/react";
import OrderHistoryComp from "@/components/OrderHistory/OrderHistoryComp";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CartNav } from "@/components";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

  const divArray = [1, 2, 3]; // Array to iterate over

  if(loading){
    return (
      <div className="w-full  min-h-screen py-5">
        <CartNav />
        <div className="px-4 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto">
        <p className="text-4xl font-bold  text-black mt-20 mb-8">
          Order history
        </p>
          <div
            className="grid grid-cols-6 gap-4 bg-white rounded-[10px] py-2 text-center h-[40px] mt-10"
            style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
          >
            <div className="">ORDER NUMBER</div>
            <div className="">ORDER DATE</div>
            <div className="">CARD TYPE</div>
            <div className="">QUANTITY</div>
            <div className="">TOTAL QUANTITY</div>
            <div className="">TOTAL PRICE</div>
          </div>
          <div>
            {divArray.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-4 space-x-4 bg-white rounded-[10px] text-center p-2 my-4 h-[80px]"
                style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
              >
                <div className="flex items-center justify-center">
                  <Skeleton height={40} width={150} />
                </div>
                <div className="flex items-center justify-center ">
                  <Skeleton height={40} width={150} />
                </div>

                <div className="flex items-center justify-center">
                  <Skeleton height={40} width={150} />
                </div>
                <div className="flex items-center justify-center">
                  <Skeleton height={40} width={150} />
                </div>
                <div className="flex items-center justify-center ">
                  <Skeleton height={40} width={150} />
                </div>
                <div className="flex items-center justify-center">
                  <Skeleton height={40} width={150} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
