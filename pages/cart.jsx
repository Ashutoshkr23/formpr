import React from 'react'
import CartComp from "@/components/cart/CartComp";
import Navbar from '@/components/Navbar';
import { useSession, signIn, getSession, signOut } from "next-auth/react"
import CartComponent from '@/components/CartComps/CartComponent';

export default function Cart() {

    return (
        <>
            <div className='w-full min-h-screen py-5'>
                <Navbar />

                {/* <CartComp /> */}
                <CartComponent />
            </div>
        </>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
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