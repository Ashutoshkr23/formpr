import React, { useState } from 'react'
import DesignComp from './DesignComp'
import DetailsComp from './DetailsComp'
import CheckoutComp from './CheckoutComp'

const CartComponent = () => {
    const [stepState, setStepState] = useState(1)
    return (
        <div className='h-full w-full px-20 py-20'>
            <h3 className='text-5xl font-bold leading-10 text-[#000]'>Customise</h3>
            <div className='mt-10'>
                <div className='bg-white rounded-xl flex justify-evenly cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]' style={{ width: 750, height: 45 }}>
                    <div className={`w-full rounded-lg ${stepState == 1 && "border-2 border-slate-700"} flex justify-center items-center font-semibold`} onClick={() => setStepState(1)}><span className='text-center'>STEP 1 : DESIGN</span></div>
                    <div className={`w-full rounded-lg ${stepState == 2 && "border-2 border-slate-700"} flex justify-center items-center font-semibold`} onClick={() => setStepState(2)}><span>STEP 2 : DETAILS/INPUT</span></div>
                    <div className={`w-full rounded-lg ${stepState == 3 && "border-2 border-slate-700"} flex justify-center items-center font-semibold`} onClick={() => setStepState(3)}><span>STEP 3 : CHECKOUT</span></div>
                </div>
            </div>
            <div className='w-full pt-10'>
                {/* step 1 */}
                {stepState == 1 ? <DesignComp /> :

                    stepState == 2 ? <DetailsComp /> :
                        <CheckoutComp />}
            </div>
        </div>
    )
}

export default CartComponent