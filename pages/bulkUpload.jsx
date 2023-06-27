import React from "react";
import { useSession, signIn, getSession, signOut } from "next-auth/react";
import { CartNav , CartComponent } from "@/components";
import BulkUploadComp from "@/components/BulkUpload/BulkUploadComp";

export default function BulkUpload() {
  return (
    <>
      <div className="w-full min-h-screen py-5">
        <BulkUploadComp />
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
