import { CartContext } from '@/context/CartContext';
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const DesignComp = ({ cardTypeSelected, handleCardSelection, totalAmount, totalQuantity, selectedTypeIndex }) => {
    const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);




    return (
        <div className='w-full mt-10'>
            <div className="flex">
                <div className="w-3/5 pl-28">
                    <div style={{ width: 400, height: 250 }}>
                        <div className="bg-red-400 rounded-2xl relative w-full" style={{ width: 400, height: 250, }} >
                            <Image src={'/assets/images/nfcIcon.png'} className='absolute top-2 right-3' alt="nfc" height={25} width={25} />

                            <Image src={'/assets/images/loopIcon.svg'} className='absolute top-12 left-14' alt="loop" height={300} width={370} />

                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex space-x-2 justify-center items-center py-4'>
                                <div className="w-4 h-4 bg-yellow-200 shadow-inner  rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-green-200 shadow-inner  rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-blue-300 shadow-inner  rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-red-400 shadow-inner border border-spacing-4 rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-gray-200 shadow-inner  rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-slate-300 shadow-inner  rounded-full cursor-pointer" />
                                <div className="w-4 h-4 bg-black shadow-inner  rounded-full border-gray-500 cursor-pointer" />
                            </div>
                            <div>
                                <div className='w-[5.5rem] h-6 bg-white rounded-xl flex justify-between'>
                                    <span className='bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer' onClick={() => minusCartFunc(cardTypeSelected?._id)}>-</span>
                                    <span className='text-md'>{cardTypeSelected?.quantity}</span>
                                    <span className='bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer' onClick={() => plusCartFunc(cardTypeSelected?._id)} >+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-2/5">
                    <div className='flex flex-col space-y-2'>
                        <div className="w-56 h-14">
                            <div className={`flex relative cursor-pointer items-center justify-center h-full ${selectedTypeIndex == 0 ? " bg-gradient-to-r from-green-300 to-green-200 " : "bg-black"} rounded-lg`} onClick={() => { handleCardSelection(0) }} >
                                <p className={`text-base font-bold leading-7 text-center ${selectedTypeIndex == 0 ? "text-black" : "text-white"}`}>Loop Lite</p>
                                {cartItems[0].quantity > 0 && <span className='text-md font-semibold h-8 w-8 top-[-10px] right-[-10px] text-center pt-1 z-50  bg-slate-100  drop-shadow-2xl shadow-2xl rounded-full absolute'>{cartItems[0].quantity}</span>}

                            </div>

                        </div>
                        <div className="w-56 h-14">
                            <div className={`flex relative cursor-pointer items-center justify-center h-full ${selectedTypeIndex == 1 ? " bg-gradient-to-r from-green-300 to-green-200 " : "bg-black"} rounded-lg`} onClick={() => { handleCardSelection(1) }}>
                                <p className={`text-base font-bold leading-7 text-center ${selectedTypeIndex == 1 ? "text-black" : "text-white"}`}>Loop Elevate</p>
                                {cartItems[1].quantity > 0 && <span className='text-md font-semibold h-8 w-8 top-[-10px] right-[-10px] text-center pt-1 z-50  bg-slate-100 drop-shadow-2xl shadow-2xl rounded-full absolute'>{cartItems[1].quantity}</span>}
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className={`flex relativecursor-pointer items-center justify-center h-full ${selectedTypeIndex == 2 ? " bg-gradient-to-r from-green-300 to-green-200 " : "bg-black"} rounded-lg`} onClick={() => { handleCardSelection(2) }}>
                                <p className={`text-base font-bold leading-7 text-center ${selectedTypeIndex == 2 ? "text-black" : "text-white"}`}>Loop Supreme</p>
                                {cartItems[2].quantity > 0 && <span className='text-md font-semibold h-8 w-8 top-[-10px] right-[-10px] text-center pt-1 z-50  bg-slate-100 drop-shadow-2xl shadow-2xl rounded-full absolute'>{cartItems[2].quantity}</span>}
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className={`flex relative cursor-pointer items-center justify-center h-full ${selectedTypeIndex == 3 ? " bg-gradient-to-r from-green-300 to-green-200 " : "bg-black"} rounded-lg`} onClick={() => { handleCardSelection(3) }}>
                                <p className={`text-base font-bold leading-7 text-center ${selectedTypeIndex == 3 ? "text-black" : "text-white"}`}>Loop Black</p>
                                {cartItems[3].quantity > 0 && <span className='text-md font-semibold h-8 w-8 top-[-10px] right-[-10px] text-center pt-1 z-50  bg-slate-100  shadow-2xl rounded-full absolute'>{cartItems[3].quantity}</span>}
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className="flex cursor-pointer flex-col items-center justify-center  h-full border border-black  rounded-lg">
                                <p className="text-sm  font-semibold ">Total Quantity :</p>
                                <p className='text-sm font-semibold'>{totalQuantity}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignComp