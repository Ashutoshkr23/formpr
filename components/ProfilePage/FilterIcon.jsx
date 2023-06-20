import Image from 'next/image'
import React, { useState } from 'react'

const FilterIcon = (props) => {

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
            <div className='relative capitalize text-[#686A6C] flex items-center px-3 bg-white rounded-xl'>
                <div className={`cursor-pointer flex items-center gap-1 ${props.sortByCustomClasses}`} onClick={openSortBy}>
                    <Image width={21} height={18} src={'/assets/images/profilePage/filterIcon.png'} alt="profile pic"></Image>
                    filter
                </div>

                {sortBy &&
                    <div className='absolute capitalize bg-white pl-4 pr-8 py-4 border rounded-xl text-black -ml-[18px] -mt-36 space-y-4 whitespace-nowrap'>
                        <div className='mb-2 cursor-pointer'>reminder on</div>
                        <div className='cursor-pointer'>reminder off</div>
                    </div>}
            </div>
        </>
    )
}

export default FilterIcon