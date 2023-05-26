import React from 'react'
import CartComp from "@/components/cart/CartComp";
import Navbar from '@/components/Navbar';
import { useSession, signIn, getSession, signOut } from "next-auth/react"

export default function Cart() {

    return (
        <>
            <div className='w-full  min-h-screen py-5'>
                <Navbar />
                <CartComp />
            </div>
        </>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    console.log(session, "session")
    if (!session) {
        return {
            redirect: {
                destination: '/',
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