import React, {useState} from 'react'
import Image from 'next/image'

function DetailsInput() {
    const [selectedDiv, setSelectedDiv] = useState(null);

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

    const [companyName, setCompanyName] = useState('');

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    const [fullName, setFullName] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const [logo, setLogo] = useState('');

    const handleLogoChange = (event) => {
        setLogo(event.target.value);
    };




    return (
        <div className='sm:px-8 relative md:px-8 h-[373px] lg:px-4 xl:px-0 max-w-[1208px] mx-auto bg-white rounded-xl drop-shadow-white flex items-center justify-around'>
            <div className='absolute left-0 -top-3 rounded-md flex justify-center items-center bg-black text-[10px] font-bold text-white h-6 w-20'>REMOVE <span className='text-base font-medium pl-2'>X</span></div>

            <div className="flex flex-col space-x-5 w-3/5">
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
                <div className='flex mt-6 pl-20 gap-4'>
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
            <div>
                <h2>Loop Lite</h2>
                <div className='flex mt-8'>
                    <input className='border w-[219px] h-10 rounded-xl pl-4'
                        type="text"
                        value={companyName}
                        onChange={handleCompanyNameChange}
                        placeholder="Company Name"
                    />
                    <button className='bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4'>APPLY TO ALL</button>
                </div>
                <div>
                    <div className="flex mt-4">
                        <input
                            type="file"
                            value={logo}
                            onChange={handleLogoChange}
                            className="border w-[219px] h-10 rounded-xl "
                            placeholder="Upload Logo"
                        />
                        <button className='bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4'>APPLY TO ALL</button>
                    </div>
                </div>
                <div>
                    <input className='border w-[219px] h-10 rounded-xl pl-4 mt-4'
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                        placeholder="Full Name"
                    />
                </div>




            </div>
        </div>
    )
}

export default DetailsInput
