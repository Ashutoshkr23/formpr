import Image from 'next/image'
import React from 'react'
import { IoIosAddCircle, RxCrossCircled, IoMdAddCircle, } from 'react-icons/io';


const Benefit = () => {
  return (
    <div className='mt-[91px] '>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-poppins'>
           <h4>Benefits</h4> 
            </div>
            <div className='font-poppins font-bold text'>
            <h1 className='text-[30px] md:text-[50px]'> Join the Loop </h1>
            </div>
        
          </div>
          <div className='mt-[91px] flex flex-col items-center space-y-9 '>
           
           <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16  '>
               
                 <div className=' relative pl-[33px] pt-[17px] md:pl-[47px]  md:pt-[33px] w-[345px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white rounded-[20px] '>
<div className='md:text-[40px] text-[24px]  font-bold md:pr-[86px] pr-[118px]  '><h2>Cutting Edge Designs.</h2> </div>
<div className='md:pt-[29px] text-[12px] pt-5 md:text-[16px] pr-[37px] md:pr-[131px]  md:text-14 font-bold '>
        <p>Elevate Your Networking with Cutting-Edge Impressions.</p> 
         </div>
         <div className='hidden md:block absolute top-[85px] right-[0px] '><Image src={'/assets/images/benefitcardbl.png'} alt='benefit' width={375} height={208}/></div>
         <div className=' md:hidden absolute top-[58px] right-[0px] '><Image src={'/assets/images/benefitcardbl.png'} alt='benefit' width={250} height={147}/></div>
         <div className='absolute bottom-4 right-8 '>  <IoMdAddCircle size={32} color="white" /></div>
         </div>




         <div className='relative w-[345px] md:pl-[60px]  md:pt-[45px] pl-[40px] pr-[31px] pt-[31px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] '>
<div className='text-[36px] md:text-[45px] md:pr-[42px] font-bold   '><h2>Limitless Flexibility. </h2></div>
<div className='pt-4 text-[16px] md:text-[24px] font-bold md:pr-28 '><p>Edit and Adapt Your Digital Card Limitlessly. </p></div>

                        <div className='absolute bottom-4 right-4'><IoIosAddCircle size={32} /></div>

                    </div>

                </div>


          <div className='relative hidden lg:block h-[337px] w-[1070px] bg-black  rounded-[20px] drop-shadow-white'>
          <div className='absolute bottom-4 right-8 '>  <IoMdAddCircle size={32} color="white" /></div>

                    <div className='pt-[40px]  text-[45px] font-bold  '>
                        <div className='flex flex-col'>
                            <div className=' pl-[59px] pr-[478px] '>
                                <span className=" text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                    Android and iOS Compatible.</span>
                                {/* <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text"></span> */}
                            </div>


                            <div className='font-bold pl-[59px] pr-[343px] text-[20px] text-white pt-5'>
                               <p>Cross-Platform Compatibility for Seamless Connections.</p> 
                            </div>
                            <div className='mt-[-125px] ml-[656px] '>
                                <Image src={'/assets/images/image 13.png'} alt='img 13' width={174} height={235} />
                            </div>
                            <div className='mt-[-332px] ml-[849px]'>
                                <Image src={'/assets/images/image 15.png'} alt='img 15' width={172} height={236} />
                            </div>

                        </div>
                    </div>

                </div>

                {/* for mobile  */}

<div className='relative lg:hidden w-[345px] h-[230px] md:w-[500px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white'>
<div className='absolute bottom-4 right-8 '>  <IoMdAddCircle size={32} color="white" /></div>

                    <div className='pt-[19px] md:pt-[40px] md:pl-[50px]  text-[36px] font-bold  '>
                        <div className='flex flex-col item-center'>
                            <div className='pl-[26px] pr-[16px] '>
                                <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                    Android and iOS
                                </span> <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">Compatible.</span>
                            </div>

                            <div className='font-bold text-[16px] md:text-[24px] pl-[26px] pr-[90px] text-white pt-[10px] md:pt-[20px]'>
                               <p> Cross-Platform Compatibility for Seamless Connections.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* for web */}

<div className=' flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16  '>
               
               <div className='relative pl-6 md:pr-[61px] md:pl-14 md:pt-[61px] w-[337px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-br from-[#FDFF96] to-[#F16869] '>
<div className='text-[36px] md:text-[45px] pr-[14px] font-bold  '><h1>Seamless User Experience.</h1> </div>
<div className='mt-7 text-[16px] md:text-[24px] pr-[65px] font-bold '>
<p>Effortless Networking Made  Beautifully Simple.</p>   </div>
<div className='absolute bottom-4 right-4'><IoIosAddCircle size={32}/></div>

                    </div>

       
       <div className=' relative  w-[345px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] '>
<div className='md:text-[40px] md:pl-[43px] pl-[30px] text-[24px] md:pr-[214px] pr-[130px] font-bold pt-11'><h2>Seamless  Sharing.</h2>  </div>
<div className='md:pt-[70px] pt-[47px] md:pl-[43px] pl-[30px] md:pr-[250px] pr-[100px] text-[14px] font-bold'><p>Embrace the App-Free  Advantage of Loop Connections.  </p></div>

                        <div className='hidden md:block absolute top-0 right-0'> <Image src={'/assets/images/woman-holding-iphone-xs-mockup-perspective-transparent-blog 1.png'} alt='iphone' width={331} height={336} />
                        </div>
                        <div className=' md:hidden absolute bottom-0 right-0'> <Image src={'/assets/images/woman-holding-iphone-xs-mockup-perspective-transparent-blog 1.png'} alt='iphone 1' width={228} height={232} />
                        </div>
                        <div className='absolute bottom-4 right-10'><IoIosAddCircle size={32} /></div>

                    </div>

                </div>


        <div className='relative hidden lg:block h-[337px] w-[1070px] bg-black drop-shadow-white  rounded-[20px]'>
            <div className='flex '>
        <div className=''>
        <Image src={'/assets/images/Mask group (6).png'} alt='mask group' width={331} height={336}/>
    </div>
<div className='flex flex-col pt-[98px]  pr-[107px]'> 
<div className='text-[45px] pl-[150px] font-bold'>
<span className='text-white'> Footprint in </span><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
</div>
<div className='text-[24px] ml-0 font-bold pt-7 '>
<span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3&apos;s Limitless Possibilities.</span><br/>

                            </div>
                        </div>

                    </div>
                    <div className='absolute bottom-4 right-8 '>  <IoMdAddCircle size={32} color="white" /></div>


                </div>


         
         <div className=' relative  pl-7 lg:hidden h-[230px] w-[345px] drop-shadow-white  md:h-[337px] md:w-[500px] bg-black  rounded-[20px]'>
         <div className='absolute bottom-4 right-8 '>  <IoMdAddCircle size={32} color="white" /></div>

                    <div flex flex-col>
                        <div className='pt-8 text-[36px] md:text-[45px] font-bold'>
                            <span className='text-white'>Footprint in </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
                        </div>
                        <div className='text-[14px] md:text-[24px] pt-8 font-bold'>
                            <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3&apos;s Limitless </span><br />
                            <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Possibilities. </span>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Benefit