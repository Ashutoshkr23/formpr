import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const SearchByName = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery]);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    return (
        <>
            <div className='capitalize text-[#686A6C] flex items-center gap-2 pl-4 bg-white rounded-xl w-max'>
                <Image width={17} height={15} src={'/assets/images/profilePage/searchIcon.png'} alt="profile pic" />
                <input className='outline-none' type="text" placeholder='Search By Name' value={searchQuery} onChange={handleInputChange} />
            </div>
        </>
    );
};

export default SearchByName;
