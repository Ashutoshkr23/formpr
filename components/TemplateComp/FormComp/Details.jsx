import React from 'react'
import Image from 'next/image'


function Details({ onCompanyChange, onNameChange, onRoleChange, onCompanyLinkChange,
    onBioChange, onAddressChange, onPhoneNumberChange, profileImg, setProfileImg, bio, contactData, name, address, phoneNumber, role, company, companyLink }) {

    const handleProfileUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);



        // Create a new FormData object
        const formData = new FormData();
        formData.append('profileImage', file);

        // Send the file to the server
        fetch('/api/uploadImageAws', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                const { result: link } = data;
                setProfileImg(link);
                // console.log(setCover);
                // ...
            })
            .catch((error) => {
                // Handle any errors
                // console.log(error);
            });
    };

    const maxLength = 80;

    const handleBioChange = (e) => {
        const value = e.target.value;
        const truncatedValue = value.slice(0, maxLength);
        onBioChange(truncatedValue);
    };

    const remainingChars = maxLength - (bio ? bio.length : 0);

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
        <div className='flex flex-grow text-white rounded-[10px] drop-shadow-white flex-col h-auto pb-5  md:h-[578px] bg-black-dim px-4 md:px-9 pt-4 mb-4'>
            <p className='font-bold text-white text-xs'>REQUIRED DETAILS</p>
            <div className='flex flex-col md:flex-row gap-8 mt-9'>
                <div className='flex flex-col w-full space-y-5'>
                    <div>
                        <p className='text-xs leading-[186%]'>Profile Photo</p>
                        <label htmlFor="logoInput" className="cursor-pointer bg-white flex flex-col space-y-1 justify-center items-center w-[127px] h-[127px] border border-dim-gray rounded-xl">
                            <Image src="/assets/images/UploadIcon.png" height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
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
                    <div className='hidden md:block'>
                        <div className='flex flex-col'>
                            <label for="Company" className='text-xs leading-[186%]'>Company</label>
                            <input type="text" value={company} id="Company" name="Company" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleCompanyChange} />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label for="Phone Number" className='text-xs leading-[186%]'>Phone Number</label>
                            <input type="text" value={phoneNumber} id="Phone Number" name="Phone Number" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handlePhoneNumberChange} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-5'>
                    <div className='flex flex-col'>
                        <label for="fullName" className='text-xs leading-[186%]'>Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={name} className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleNameChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="role" className='text-xs leading-[186%]'>Role</label>
                        <input type="text" id="role" value={role} name="role" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleRoleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label for="Company Link" className='text-xs leading-[186%]'>Company Link</label>
                        <input type="text" maxLength={20} id="Company Link" value={companyLink} name="Company Link" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleCompanyLinkChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Location" className='text-xs leading-[186%]'>Location</label>
                        <input
                            type='text'
                            id="Location"
                            name="Location"
                            value={address}
                            className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md'
                            onChange={handleAddressChange}
                            required
                        />
                    </div>
                    <div className='md:hidden'>
                        <div className='flex flex-col'>
                            <label for="Company" className='text-xs leading-[186%]'>Company</label>
                            <input type="text" value={company} id="Company" name="Company" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handleCompanyChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label for="Phone Number" className='text-xs leading-[186%]'>Phone Number</label>
                            <input type="text" value={phoneNumber} id="Phone Number" name="Phone Number" className='bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md' required onChange={handlePhoneNumberChange} />
                        </div>
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
                    value={bio}
                    className="bg-white text-black mt-0.5 border px-5 py-2 border-dim-gray rounded-md block w-full resize-none"
                    rows={4}
                    required
                    onChange={handleBioChange}
                    maxLength={maxLength}
                />
                {bio && bio.length > 0 && <p>{remainingChars} characters remaining</p>}
            </div>
        </div>
    )
}

export default Details
