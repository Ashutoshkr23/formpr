import Image from 'next/image'
import React, { useState } from 'react'

const SortBy = (props) => {

    const [sortBy, setsortBy] = useState(false)

    function openSortBy() {
        if (sortBy) {
            setsortBy(false)
        } else if (!sortBy) {
            setsortBy(true)
        }
    }

    return (
        <>
            <div className='relative capitalize text-[#686A6C] flex items-center border px-3 bg-white rounded-xl'>
                <div className={`cursor-pointer flex items-center gap-1 ${props.sortByCustomClasses}`} onClick={openSortBy}>
                    <Image width={27} height={18} src={'/assets/images/profilePage/sortBy.png'} alt="profile pic"></Image>
                    sort by
                </div>

                {sortBy &&
                    <div className='absolute capitalize bg-white pl-6 pr-16 py-2 border rounded-xl text-black -ml-[18px] -mt-48 '>
                        <div className='whitespace-nowrap mb-2 cursor-not-allowed opacity-50'>card type</div>
                        <div className='cursor-pointer'>latest</div>
                        <div className='my-2 cursor-pointer'>oldest</div>
                        <div className='cursor-pointer'>a-z</div>
                    </div>}
            </div>
        </>
    )
}

export default SortBy