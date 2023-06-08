import React, { useContext, useEffect, useState } from "react";
import { useSession, signIn, getSession, signOut } from "next-auth/react";
import OrderHistoryComp from "@/components/OrderHistory/OrderHistoryComp";
import { CartContext } from "@/context/CartContext";
import axios from "axios";

export default function OrderHistory() {
  const { userProfile } = useContext(CartContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async (puuid) => {
      const response = await axios.get(`/api/orderHistory?puuid=${puuid}`);

      if (!response.data.error) {
        setLoading(false);
        setOrderHistory(response.data.result);
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
        {!loading ? (
          <OrderHistoryComp orderHistory={orderHistory} />
        ) : (
          <>Loading...</>
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
