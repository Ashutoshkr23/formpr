import Image from 'next/image'
import React, { useState , useEffect} from 'react'

function Cover({ cover, setCover, setCompletedSteps }) {

    const [coverSelected, setCoverSelected ] = useState(false);

    useEffect(() => {
        if (cover) {
            setCoverSelected(true);
            setCompletedSteps([0,1]);
        }
    }, [cover]);

    const handleCoverUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        // Create a new FormData object
        const formData = new FormData();
        formData.append('coverImage', file);

        // Send the file to the server
        fetch('/api/uploadImageAws', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                const { result: link } = data;
                setCover(link);
                // console.log(setCover)
                // ...
            })
            .catch((error) => {
                // Handle any errors
                // console.log(error);
            });
    };

    // console.log(setCover)


    const Cover1 = "/assets/images/templateimg/BGCover1.png"
    const Cover2 = "/assets/images/templateimg/BGCover2.png"
    const Cover3 = "/assets/images/templateimg/BGCover3.png"
    const Cover4 = "/assets/images/templateimg/BGCover4.png"
    const Cover5 = "/assets/images/templateimg/BGCover5.png"
    const Cover6 = "/assets/images/templateimg/BGCover6.png"
    const Cover7 = "/assets/images/templateimg/BGCover7.png"
    const Cover8 = "/assets/images/templateimg/BGCover8.png"
    const Cover9 = "/assets/images/templateimg/BGCover9.png"
    const Cover10 = "/assets/images/templateimg/BGCover10.png"
    const Cover11 = "/assets/images/templateimg/BGCover11.png"
    const Cover12 = "/assets/images/templateimg/BGCover12.png"
    const Cover13 = "/assets/images/templateimg/BGCover13.png"
    return (
        <div className={`flex flex-grow rounded-[10px] drop-shadow-white flex-col h-auto  px-4 sm:px-9 py-8 my-5 ${coverSelected ? 'border border-3 border-[#96FFAD] bg-white' : 'bg-white'
            }`}>
            <div className='flex mb-4'>
                <p className='font-bold  text-xs'>COVER<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></p>
                {coverSelected && (
                    <div className='h-5 w-5 ml-auto '>
                        <Image height={20} width={20} src='/assets/images/templateimg/Tick.png' />
                    </div>
                )}
            </div>
            <div className='flex flex-wrap justify-between gap-5 md:gap-8 xl:gap-5'>
                <div>
                    <label htmlFor="fileInput" className="cursor-pointer bg-white  flex flex-col space-y-1 justify-center items-center w-[70px] h-[70px] sm:w-[105px] sm:h-[105px] border border-dim-gray rounded-xl" >
                        <Image src="/assets/images/UploadIcon.png" height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
                        <p className='text-sm'>Upload</p>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        accept=".png, .jpeg, .jpg"
                        name="coverImage"
                        style={{ display: 'none' }}
                        onChange={handleCoverUpload}
                    />
                </div>

                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover1)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover1.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover2)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover2.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover3)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover3.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover4)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover4.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover5)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover5.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover6)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover6.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover7)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover7.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover8)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover8.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover9)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover9.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover10)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover10.png" />
                </div>
                <div className='relative h-[70px] sm:h-[105px] w-[70px] sm:w-[105px]' onClick={() => setCover(Cover11)}>
                    <Image fill={true} alt="cover-image" src="/assets/images/templateimg/Cover/Cover11.png" />
                </div>
            </div>

        </div>
    )
}

export default Cover
