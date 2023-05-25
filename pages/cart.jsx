import React from 'react'
import CartComp from "@/components/cart/CartComp";
import Navbar from '@/components/Navbar';




const Cart = () => {

    return (
        <>
            <div className='w-full  min-h-screen py-5'>
                <Navbar />
                <CartComp />
            </div>
        </>
    )
}

export default Cart