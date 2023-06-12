import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
import { CartContext } from '@/context/CartContext';
import axios from 'axios';

function DetailsInput({ card, index }) {

    const [selectedDiv, setSelectedDiv] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = useRef(null);
    const { userProfile, handleApplyToAll, handleName, handleRemoveCardArr } = useContext(CartContext)

    const divStyle = {
        border: '1px solid transparent',
        padding: '4px',
        cursor: 'pointer',
    };

    const selectedDivStyle = {
        ...divStyle,
        borderColor: '#000000',
    };

    const handleDivClick = (index) => {
        console.log(selectedDiv)
        setSelectedDiv(index === selectedDiv ? null : index);
    };

    // const [companyName, setCompanyName] = useState('');

    const handleCompanyNameChange = (event) => {
        handleName(event.target.name, card.key, event.target.value)
    };


    const handleFullNameChange = (event) => {
        handleName(event.target.name, card.key, event.target.value)
    };

    // const [logo, setLogo] = useState('');

    const handleLogoChange = (event) => {
        console.log(event.target)
        handleName(event.target.name, card.key, event.target.value);
    };

    const handleLabelClick = () => {
        fileInputRef.current.click();
    };

    const handleAwsUpload = async (image) => {
        const formData = new FormData();
        formData.append('companyLogo', image);
        formData.append("puuid", userProfile.puuid)


        const uploadImage = await axios.post('/api/uploadImageAws', formData)
        console.log(uploadImage)
        if (uploadImage.status == 200 && !uploadImage.data.error) {
            const awsLink = uploadImage.data.result
            handleName("companyLogo", card.key, awsLink);
        }
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileSizeInMB = file.size / (1024 * 1024);

        if (fileSizeInMB > 5) {
            setErrorMessage('File size exceeds the limit of 5MB.');
        } else {
            setErrorMessage('');
            handleAwsUpload(file);
            // handleName(event.target.name, card.key, file);
        }
    };




    return (
        <div className='sm:px-8 relative md:px-8  lg:px-4 xl:px-0 max-w-[1208px] mx-auto my-6'>
            <div className=' h-[373px] bg-white rounded-xl drop-shadow-white flex items-center justify-between'>
                <div className='absolute cursor-pointer left-0 -top-3 rounded-md flex justify-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] hover:text-black  items-center bg-black text-[10px] font-bold text-white h-6 w-20' onClick={() => handleRemoveCardArr(card.key)} >REMOVE <span className='text-base font-medium pl-2'>X</span></div>

                <div className="flex flex-col items-center flex-grow ">
                    <div className='flex'>
                        <div style={{ width: 400, height: 250 }}>
                            <div
                                className="bg-[#66D3E1] drop-shadow-white rounded-2xl relative w-full "
                                style={{ width: 400, height: 250 }}
                            >
                                <Image
                                    src={"/assets/images/nfcIcon.png"}
                                    className="absolute top-2 right-3"
                                    alt="nfc"
                                    height={25}
                                    width={25}
                                />

                                <Image
                                    src={"/assets/images/loopIcon.svg"}
                                    className="absolute top-12 left-14"
                                    alt="loop"
                                    height={300}
                                    width={370}
                                />
                            </div>
                        </div>
                        <div className=" ml-4">
                            <Image
                                src={"/assets/images/cart-images/flipImage.png"}
                                className=""
                                alt="flip"
                                height={36}
                                width={36}
                            />
                        </div>
                    </div>
                    <div className='flex mt-6  gap-4'>
                        <p className='text-xs'>colors</p>
                        <div id="container" className="flex space-x-2">
                            <div
                                className="rounded-full bg-[#FFF490] w-5 h-5"
                                style={selectedDiv === 0 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(0)}
                            ></div>
                            <div
                                className="rounded-full bg-[#96FFAD] w-5 h-5"
                                style={selectedDiv === 1 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(1)}
                            ></div>
                            <div
                                className="rounded-full bg-[#66D3E1] w-5 h-5"
                                style={selectedDiv === 2 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(2)}
                            ></div>
                            <div
                                className="rounded-full bg-[#F66F6F] w-5 h-5"
                                style={selectedDiv === 3 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(3)}
                            ></div>
                            <div
                                className="rounded-full bg-[#ECECEC] w-5 h-5"
                                style={selectedDiv === 4 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(4)}
                            ></div>
                            <div
                                className="rounded-full bg-[#323232] w-5 h-5"
                                style={selectedDiv === 5 ? selectedDivStyle : divStyle}
                                onClick={() => handleDivClick(5)}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='w-[350px] xl:w-[390px]'>
                    <h2>{card.cardTypeName}</h2>
                    <div className='flex mt-8'>
                        <input className='border w-[180px] xl:w-[220px] h-10 rounded-xl pl-4'
                            type="text"
                            name="companyName"
                            value={card.companyName}
                            onChange={handleCompanyNameChange}
                            placeholder="Company Name"
                        />
                        {index == 0 && <button className='bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4' onClick={() => handleApplyToAll(0, card.companyName)} >APPLY TO ALL</button>}
                    </div>
                    <div>
                        <div className="flex mt-4">
                            {/* <input
                                type="file"
                                name="companyLogo"
                                accept=".png, .jpeg, .jpg"
                                onChange={handleFileChange}
                                className="border w-[180px] xl:w-[220px] h-10 rounded-xl "
                                placeholder="Upload Logo"
                            /> */}
                            <label htmlFor="fileInput" className="cursor-pointer py-2 flex justify-between  border w-[180px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 " onClick={handleLabelClick}>
                                Upload Logo
                                <Image src={"/assets/images/uploadLogo.png"} height={40} width={40} alt='icon' style={{ objectFit: "contain" }} />
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
                            {index == 0 && <button className='bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4' onClick={() => handleApplyToAll(1, card.companyLogo)}>APPLY TO ALL</button>}
                        </div>
                    </div>
                    <div>
                        <input className='border w-[180px] xl:w-[220px] h-10 rounded-xl pl-4 mt-4'
                            type="text"
                            value={card.fullName}
                            name="fullName"
                            onChange={handleFullNameChange}
                            placeholder="Full Name"
                        />
                    </div>




                </div>
            </div>
        </div>
    )
}

export default DetailsInput
