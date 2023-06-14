import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
function Details() {
    const fileInputRef = useRef(null);
    const handleLabelClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileSizeInMB = file.size / (1024 * 1024);

        if (fileSizeInMB > 5) {
            setErrorMessage('File size exceeds the limit of 5MB.');
        } else {
            setErrorMessage('');
            handleAwsUpload(file);
        }
    };

    return (
        <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-[578px] bg-bright-gray px-9 pt-4'>
            <p className='font-bold text-xs'>REQUIRED DETAILS</p>
            <div className='flex gap-8 mt-9'>
                <div className='flex flex-col w-full space-y-5'>
                    <div>
                        <p className='text-xs leading-[186%]'>Profile Photo</p>
                        <label htmlFor="fileInput" className="cursor-pointer bg-white  flex flex-col spaxe-y-1 justify-center items-center w-[127px] h-[127px] border border-dim-gray rounded-xl  " onClick={handleLabelClick}>
                            <Image src={"/assets/images/uploadIcon.png"} height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
                            <p className='text-sm'>Upload</p>
                        </label>
                        <input
                            id="companyLogo"
                            type="file"
                            accept=".png, .jpeg, .jpg"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            name="companyLogo"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Company" className='text-xs leading-[186%]'>Company</label>
                        <input type="text" id="Company" name="Company" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Phone Number" className='text-xs leading-[186%]'>Phone Number</label>
                        <input type="text" id="Phone Number" name="Phone Number" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-5'>
                    <div className='flex flex-col'>
                        <label for="fullName" className='text-xs leading-[186%]'>Full Name</label>
                        <input type="text" id="fullName" name="fullName" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                    <div className='flex flex-col'>
                        <label for="role" className='text-xs leading-[186%]'>Role</label>
                        <input type="text" id="role" name="role" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Company Link" className='text-xs leading-[186%]'>Company Link</label>
                        <input type="text" id="Company Link" name="Company Link" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Location" className='text-xs leading-[186%]'>Location</label>
                        <input type="text" id="Location" name="Location" className='bg-white h-10 mt-0.5 border border-dim-gray rounded-md' required />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <label for="Bio" className='text-xs leading-[186%]'>Bio</label>
                <input type="text" id="Bio" name="Bio" className='bg-white h-[117px] mt-0.5 border border-dim-gray rounded-md' required />
            </div>
            

        </div>
    )
}

export default Details
