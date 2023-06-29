import React from "react";
import { getSession } from "next-auth/react";
import { CartNav  } from "@/components";
import BulkUploadComp from "@/components/BulkUpload/BulkUploadComp";

export default function BulkUpload() {
  return (
      <div className="w-full min-h-screen py-5">
        <CartNav />
        <BulkUploadComp />
      </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const accessEmail = [
    "durgeshjhalwa2805@gmail.com",
    "rohit@alphamintlabs.com",
    "rohitsubr@gmail.com"
  ]
  // console.log(session)
  if (!session || !accessEmail.includes(session?.user?.email)) {
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
