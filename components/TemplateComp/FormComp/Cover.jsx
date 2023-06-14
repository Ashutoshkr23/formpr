import Image from 'next/image'
import React from 'react'

function Cover() {
    return (
        <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-auto bg-bright-gray px-9 py-8 my-5'>
            <p className='font-bold text-xs mb-5'>COVER</p>
            <div className='flex flex-wrap gap-5'>
                <div>
                    <label htmlFor="fileInput" className="cursor-pointer bg-white  flex flex-col spaxe-y-1 justify-center items-center w-[105px] h-[105px] border border-dim-gray rounded-xl  " >
                        <Image src={"/assets/images/uploadIcon.png"} height={20} width={20} alt='icon' style={{ objectFit: "contain" }} />
                        <p className='text-sm'>Upload</p>
                    </label>
                    <input
                        id="companyLogo"
                        type="file"
                        accept=".png, .jpeg, .jpg"
                        name="companyLogo"
                        style={{ display: 'none' }}
                    />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover1.png"/>
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover2.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover3.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover4.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover5.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover6.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover7.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover8.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover9.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover10.png" />
                </div>
                <div className='h-[105px] w-[105px]'>
                    <Image height={105} width={105} src="/assets/images/templateimg/Cover/Cover11.png" />
                </div>
            </div>

        </div>
    )
}

export default Cover
