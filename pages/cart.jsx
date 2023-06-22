import React from "react";
import { useSession, signIn, getSession, signOut } from "next-auth/react";
import { CartNav , CartComponent } from "@/components";

export default function Cart() {
  return (
    <>
      <div className="w-full min-h-screen py-5">
        <CartNav />

        {/* <CartComp /> */}
        <CartComponent />
      </div>
    </>
  );
}

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
