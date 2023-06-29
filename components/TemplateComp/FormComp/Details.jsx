import React , {useState , useEffect} from 'react'
import Image from 'next/image'


function Details({ onCompanyChange, onNameChange, onRoleChange, onCompanyLinkChange,
    onBioChange, onAddressChange, onPhoneNumberChange, profileImg, setProfileImg, bio, contactData, name, address, phoneNumber, role, company, companyLink, setCompletedSteps })
    
    {
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


    const [ detailsFilled , setDetailsFilled ] = useState(false);
    useEffect(() => {
        const areAllValuesPresent =
            profileImg !== undefined &&
            bio !== undefined &&
            name !== undefined &&
            address !== undefined &&
            phoneNumber !== undefined &&
            role !== undefined &&
            company !== undefined &&
            companyLink !== undefined;

        setDetailsFilled(areAllValuesPresent);
    }, [
        profileImg,
        bio,
        name,
        address,
        phoneNumber,
        role,
        company,
        companyLink,
    ]);
    
    useEffect(() => {
        if (detailsFilled) {
            setCompletedSteps([0, 1, 2]);
        }
    }, [detailsFilled]);


    return (
        <div className={`flex flex-grow  rounded-[10px] drop-shadow-white flex-col h-auto pb-5  md:h-[578px] bg-black-dim px-4 md:px-9 pt-4 mb-4 ${detailsFilled ? 'border border-3 border-[#96FFAD] bg-gradient-to-b from-white to-[#E6FDFF]' : 'bg-white'
            }`}>
            <div className='flex'>
                <p className='font-bold  text-xs'>REQUIRED DETAILS<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></p>
                {detailsFilled && (
                    <div className='h-5 w-5 ml-auto '>
                        <Image height={20} width={20} src='/assets/images/templateimg/Tick.png' />
                    </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-6'>
                <div className='flex flex-col w-full space-y-5'>
                    <div>
                        <label htmlFor="logoInput" className={`cursor-pointer  bg-white flex flex-col space-y-1  items-center w-[113px] h-[113px] border border-dim-gray border-dashed rounded-xl ${!profileImg ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}>
                            <p className={`text-xs leading-[186%]  -mt-3 mb-5 bg-[#FFFFFF] z-50 px-1`}>Profile Photo</p>
                            <Image src="/assets/images/UploadIcon.png"  height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
                            <p className='text-sm'>Upload</p>
                        </label>
                        <input
                            id="logoInput"
                            type="file"
                            accept=".png, .jpeg, .jpg"
                            name="ProfileLogo"
                            style={{ display: 'none' }}
                            onChange={handleProfileUpload}
                        />

                    </div>
                    <div className='hidden md:block'>
                        <div className='flex flex-col'>
                            <label for="Company" className={` bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!company ? 'border border-[#F66F6f]' : 'border-dim-gray'} `}><p className={`text-xs leading-[186%] -mt-3 bg-[#FFFFFF] pl-1 w-16`}>Company</p>
                                <input type="text" value={company}  id="Company" name="Company" required onChange={handleCompanyChange} style={{ border: 'none', outline: 'none' }} />
                            </label>

                        </div>
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Phone Number" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!phoneNumber ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}>
                                <p className={`-mt-3 text-xs leading-[186%] bg-[#FFFFFF] w-24 pl-1`}>Phone Number</p>
                                <input
                                    type="text"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    value={phoneNumber}
                                    id="Phone Number"
                                    name="Phone Number"
                                    required
                                    onChange={handlePhoneNumberChange}
                                    style={{ border: 'none', outline: 'none' }}
                                />
                            </label>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col w-full space-y-5 mt-2 '>
                    <div className='flex flex-col'>
                        <label for="fullName" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!name ? 'border border-[#F66F6f]' : 'border-dim-gray'}`} ><p className={` -mt-3 text-xs leading-[186%] bg-[#FFFFFF] w-16 px-0.5`}>Full Name</p>
                            <input type="text" id="fullName" name="fullName" value={name} required onChange={handleNameChange} style={{ border: 'none', outline: 'none' }} /></label>

                    </div>
                    <div className='flex flex-col'>
                        <label for="role" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!role ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className={` -mt-3 text-xs leading-[186%] bg-[#FFFFFF] w-8 px-1`}>Role</p>
                            <input type="text" id="role" value={role} name="role" required onChange={handleRoleChange} style={{ border: 'none', outline: 'none' }} /></label>

                    </div>
                    <div className='flex flex-col'>
                        <label for="Company Link" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!companyLink ? 'border border-[#F66F6f]' : 'border-dim-gray'}`} ><p className={` -mt-3 text-xs leading-[186%] bg-[#FFFFFF] w-24 px-1 `}>Company Link</p>
                            <input type="text" maxLength={25} id="Company Link" value={companyLink} name="Company Link" required onChange={handleCompanyLinkChange} style={{ border: 'none', outline: 'none' }} /></label>
                        
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Location" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!address ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className={`-mt-3 text-xs leading-[186%] px-1 bg-[#FFFFFF] w-14 `}>Location</p>
                            <input
                                type='text'
                                id="Location"
                                name="Location"
                                value={address}
                                onChange={handleAddressChange}
                                required
                                style={{ border: 'none', outline: 'none' }}
                            /></label>

                    </div>
                    <div className='md:hidden'>
                        <div className='flex flex-col'>
                            <label for="Company" className={` bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!company ? 'border border-[#F66F6f]' : 'border-dim-gray'} `}><p className={`text-xs leading-[186%] -mt-3 bg-[#FFFFFF] pl-1 w-16`}>Company</p>
                                <input type="text" value={company} id="Company" name="Company" required onChange={handleCompanyChange} style={{ border: 'none', outline: 'none' }} />
                            </label>

                        </div>
                        <div className='flex flex-col mt-5'>
                            <label for="Phone Number" className={`bg-white text-black h-10 px-5 mt-0.5 border border-dim-gray rounded-md ${!phoneNumber ? 'border border-[#F66F6f]' : 'border-dim-gray'}`} ><p className={`-mt-3 text-xs leading-[186%] bg-[#FFFFFF] w-24 pl-1`}>Phone Number</p>
                                <input type="text" pattern="[0-9]*"
                                    inputMode="numeric" value={phoneNumber} id="Phone Number" name="Phone Number" required onChange={handlePhoneNumberChange} style={{ border: 'none', outline: 'none' }} />
                            </label>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor="Bio" className={`bg-white text-black mt-0.5 border px-5 py-2 border-dim-gray rounded-md block w-full resize-none ${!bio ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}>
                    <p className={`-mt-5 text-xs leading-[186%] bg-[#FFFFFF] px-1 w-6 `}>Bio</p>
                    <textarea
                        id="Bio"
                        name="Bio"
                        value={bio}
                        rows={4}
                        className='w-full'
                        required
                        onChange={handleBioChange}
                        maxLength={maxLength}
                        style={{ border: 'none', outline: 'none' }}
                    />
                </label>
                
                {bio && bio.length > 0 && <p>{remainingChars} characters remaining</p>}
            </div>
        </div>
    )
}

export default Details
