import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'


function Details({ onCompanyChange, onNameChange, onRoleChange, onCompanyLinkChange,
    onBioChange, onAddressChange, onPhoneNumberChange , profileImg , setProfileImg , bio }) {
    
    const handleProfileUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setProfileImg(imageUrl);
    };

    const maxLength = 80;

    const handleBioChange = (e) => {
    const value = e.target.value;
    onBioChange(value.slice(0, maxLength));
    };

    const remainingChars = maxLength - bio.length;
    
    const handleCompanyChange = (e) => {
        const value = e.target.value;
        onCompanyChange(value);
    };

     
    const handleNameChange = (e) => {
        const value = e.target.value;
        onNameChange(value);
    };

     
    const handleRoleChange = (e) => {
        const value = e.target.value;
        onRoleChange(value);
    };

    
    const handleCompanyLinkChange = (e) => {
        const value = e.target.value;
        onCompanyLinkChange(value);
    };

        
    
    const handleAddressChange = (e) => {
        const value = e.target.value;
        onAddressChange(value);
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        onPhoneNumberChange(value);
    };




    return (
        <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-[578px] bg-bright-gray px-9 pt-4'>
            <p className='font-bold text-xs'>REQUIRED DETAILS</p>
            <div className='flex gap-8 mt-9'>
                <div className='flex flex-col w-full space-y-5'>
                    <div>
                        <p className='text-xs leading-[186%]'>Profile Photo</p>
                        <label htmlFor="logoInput" className="cursor-pointer bg-white flex flex-col space-y-1 justify-center items-center w-[127px] h-[127px] border border-dim-gray rounded-xl">
                            <Image src="/assets/images/uploadIcon.png" height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
                            <p className='text-sm'>Upload</p>
                        </label>
                        <input
                            id="logoInput"
                            type="file"
                            accept=".png, .jpeg, .jpg"
                            name="companyLogo"
                            style={{ display: 'none' }}
                            onChange={handleProfileUpload}
                        />

                    </div>
                    <div className='flex flex-col'>
                        <label for="Company" className='text-xs leading-[186%]'>Company</label>
                        <input type="text" id="Company" name="Company" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleCompanyChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Phone Number" className='text-xs leading-[186%]'>Phone Number</label>
                        <input type="text" id="Phone Number" name="Phone Number" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handlePhoneNumberChange} />
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-5'>
                    <div className='flex flex-col'>
                        <label for="fullName" className='text-xs leading-[186%]'>Full Name</label>
                        <input type="text" id="fullName" name="fullName" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleNameChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="role" className='text-xs leading-[186%]'>Role</label>
                        <input type="text" id="role" name="role" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleRoleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Company Link" className='text-xs leading-[186%]'>Company Link</label>
                        <input type="text" id="Company Link" name="Company Link" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleCompanyLinkChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Location" className='text-xs leading-[186%]'>Location</label>
                        <input type="text" id="Location" name="Location" className='bg-white h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleAddressChange} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor="Bio" className="text-xs leading-[186%]">
                    Bio
                </label>
                <textarea
                    id="Bio"
                    name="Bio"
                    className="bg-white mt-0.5 border px-5 py-2 border-dim-gray rounded-md block w-full resize-none"
                    rows={4}
                    required
                    onChange={handleBioChange}
                    maxLength={maxLength}
                />
                {bio.length > 0 && <p>{remainingChars} characters remaining</p>}
            </div>
        </div>
    )
}

export default Details
