import Image from 'next/image'
import React from 'react'

const SearchByName = () => {
    return (
        <>
            <div className='capitalize text-[#686A6C] flex items-center gap-2 border px-4 bg-white rounded-xl'>
                <Image width={17} height={15} src={'/assets/images/profilePage/searchIcon.png'} alt="profile pic"></Image>
                <input className='outline-none' type="text" placeholder='Search By Name' />
            </div>
        </>
    )
}

export default SearchByName