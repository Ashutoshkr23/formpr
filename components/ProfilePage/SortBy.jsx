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
            <div className='relative capitalize text-[#686A6C] flex items-center border px-4 bg-white rounded-xl'>
                <div className={`cursor-pointer flex items-center gap-2 ${props.sortByCustomClasses}`} onClick={openSortBy}>
                    <Image width={27} height={18} src={'/assets/images/profilePage/sortBy.png'} alt="profile pic"></Image>
                    sort by
                </div>

                {sortBy &&
                    <div className='absolute capitalize bg-white pl-6 pr-16 py-4 border rounded-xl text-black -ml-[18px] -mt-44 '>
                        <div>latest</div>
                        <div className='my-2'>oldest</div>
                        <div>a-z</div>
                    </div>}
            </div>
        </>
    )
}

export default SortBy