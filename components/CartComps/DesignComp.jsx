import Image from 'next/image'
import React from 'react'

const DesignComp = () => {
    return (
        <div className='w-full mt-10'>
            <div class="flex">
                <div class="w-3/5 pl-28">
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
                                    <span className='bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer'>-</span>
                                    <span className='text-md'>1</span>
                                    <span className='bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer'>+</span>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div class="w-2/5">
                    <div className='flex flex-col space-y-2'>
                        <div className="w-56 h-14">
                            <div className="flex items-center justify-center h-full  bg-gradient-to-r from-green-300 to-green-200 rounded-lg">
                                <p className="text-base font-bold leading-7 text-center">Loop Lite</p>
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className="flex items-center justify-center  h-full  bg-black rounded-lg">
                                <p className=" text-base font-bold leading-7 text-center text-white">Loop Elevate</p>
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className="flex items-center justify-center  h-full  bg-black rounded-lg">
                                <p className="text-base font-bold leading-7 text-center text-white">Loop Supreme</p>
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className="flex items-center justify-center  h-full  bg-black rounded-lg">
                                <p className=" text-base font-bold leading-7 text-center text-white">Loop Black</p>
                            </div>
                        </div>
                        <div className="w-56 h-14">
                            <div className="flex flex-col items-center justify-center  h-full border border-black  rounded-lg">
                                <p className="text-sm  font-semibold ">Total Quantity :</p>
                                <p className='text-sm font-semibold'>3</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignComp