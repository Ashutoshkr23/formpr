import React, { useContext } from 'react'
import Navbar from './Navbar'
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import LoopCards from './dashboardComps/LoopCards';




const HomeComp = () => {
    const { cartItems, plusCartFunc, minusCartFunc, handleItemCount } = useContext(CartContext);
    return (

        <div className='w-full  min-h-screen py-5'>
            <Navbar />
            <div className="container mx-auto p-4">
                <LoopCards />
                {/* <h1 className="text-3xl font-bold mb-4">Loop cards</h1> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cartItems?.length && cartItems.map((item) => {
                        return (

                            <div key={item._id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white cursor-pointer" >
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.currency}{item.amount}</div>
                                    <p className="text-gray-700 text-base">{item.cardTypeUuid}</p>
                                    <div className='flex justify-between items-center'>
                                        <span className="font-bold text-3xl mb-2 cursor-pointer" onClick={() => {
                                            plusCartFunc(item._id)
                                        }}>+</span>
                                        <input type="number" className='border rounded border-1 w-[4rem]  text-center' value={item.quantity} onChange={(e) => {
                                            if (e.target.value) {
                                                handleItemCount(item._id, e.target.value)
                                            }
                                        }} />

                                        <span className="font-bold text-5xl mb-2 cursor-pointer" onClick={() => {
                                            minusCartFunc(item._id)
                                        }}>-</span>


                                    </div>
                                </div>
                            </div>


                        )
                    })}

                </div> */}
                <div className='flex w-full items-center justify-center mt-5'>
                    <Link href="/cart" className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                        Visit Carts
                    </Link>
                    <Link href="/manageCards" className='focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Manage Your Cards
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default HomeComp