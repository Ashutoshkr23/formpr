import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';


const ManageCardComps = () => {
    const { cartItems, userProfile, allCards } = useContext(CartContext);
    // console.log(allCards, "allCards")
    console.log(userProfile.totalCards, "userProfile")
    return (
        <div className='w-full h-full px-4 py-4'>
            {userProfile?.totalCards > 0 ?
                <ul role="list" className="divide-y divide-gray-100">
                    {allCards.map((card) => (
                        <Link href={`/createCard/${card.cuuid}`} key={card.cuuid}>
                            <li className="flex justify-between gap-x-6 py-5">
                                <div className="flex gap-x-4">
                                    {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={card.imageUrl} alt="" /> */}
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{card.cardAmount == 499 ? "Loop Lite" : card.cardAmount == 799 ? "Loop Elevate" : "Loop Supreme"}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{card.cuuid}</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{card.cardAmount}</p>

                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">Online</p>
                                    </div>

                                </div>
                            </li>
                        </Link>
                    ))}
                </ul> : <h5>Buy card</h5>}
        </div>
    )
}

export default ManageCardComps