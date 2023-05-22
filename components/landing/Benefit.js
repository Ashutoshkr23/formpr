import Image from 'next/image'
import React from 'react'

const Benefit = () => {
  return (
    <div className='mt-[91px] '>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[16px] font-poppins'>
            Benefits
            </div>
            <div className='text-[50px] font-poppins font-bold text'>
            Join the Loop 
            </div>
        
          </div>
          <div className='mt-[91px] flex flex-col items-center space-y-9 '>
           
           <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16  '>
               
                 <div className=' relative w-[500px] h-[336px] border-2 rounded-[20px] '>
<div className='text-[40px] font-bold pl-12 pt-8'>Cutting Edge<br/>Designs. </div>
<div className='mt-7 text-14 font-bold pl-12'>
         Elevate Your Networking with Cutting-Edge<br/>Impressions.
         </div>
         <div className='absolute top-[88px] -right-[0px] '><Image src={'/assets/images/benefitcardbl.png'} width={365} height={208}/></div>

         </div>

         
        

         <div className='w-[500px] h-[336px] border-2 rounded-[20px] bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] '>
<div className='text-[40px] font-bold pl-[60px] pt-11'>Limitless <br/>Flexibility. </div>
<div className='mt-6 text-[24px] font-bold pl-[60px]'>Edit and Adapt Your Digital Card Limitlessly. </div>
         </div>
         
          </div>


          <div className='hidden lg:block h-[337px] w-[1070px] bg-black  rounded-[20px]'>
            
             <div className='pt-[40px] pl-[59px]  text-[45px] font-bold  '>
                <div className='flex flex-col'>
                <div>
     <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
     Android and iOS  
        </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">Compatible.</span>
        </div>

<div className='flex mb-10'>
    <div className='font-bold text-[20px] text-white pt-5'>
    Cross-Platform Compatibility for Seamless Connections.
    </div>
    <div className='mt-[-75px] ml-5'>
        <Image src={'/assets/images/image 13.png'} width={174} height={235}/>
    </div>
    <div className='mt-[-172px] ml-5'>
        <Image src={'/assets/images/image 15.png'} width={172} height={236}/>
    </div>
</div>
        </div>
        </div>
          </div>
        
{/* for mobile  */}

<div className='lg:hidden h-[336px] w-[500px] bg-black  rounded-[20px]'>
            
            <div className='pt-[40px] pl-[59px]  text-[36px] font-bold  '>
               <div className='flex flex-col item-center'>
               <div>
    <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
    Android and iOS  
       </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">Compatible.</span>
       </div>

   <div className='font-bold text-[16px] text-white mt-10'>
   Cross-Platform Compatibility <br/>for Seamless Connections.
   </div>   

       </div>
       </div>
         </div>
       
{/* for web */}

<div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16  '>
               
               <div className=' w-[500px] h-[336px] border-2 rounded-[20px] bg-gradient-to-br from-[#FDFF96] to-[#F16869] '>
<div className='text-[45px] font-bold pl-14 pt-8'>Seamless User<br/>Experience. </div>
<div className='mt-7 text-[24px] font-bold pl-12'>
Effortless Networking Made <br /> Beautifully Simple.       </div>

       </div>

       
       <div className=' relative w-[500px] h-[336px] border-2 rounded-[20px] bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] '>
<div className='text-[40px] font-bold pl-[60px] pt-11'>Seamless <br /> Sharing.  </div>
<div className='mt-6 text-[14px] font-bold pl-[60px]'>Embrace the App-Free <br /> Advantage of Loop Connections.  </div>

<div className='absolute top-0 right-0'>        <Image src={'/assets/images/woman-holding-iphone-xs-mockup-perspective-transparent-blog 1.png'} width={331} height={336}/>
</div>
       </div>
       
        </div>


        <div className='hidden lg:block h-[337px] w-[1070px] bg-black  rounded-[20px]'>
            <div className='flex '>
        <div className=''>
        <Image src={'/assets/images/Mask group (5).png'} width={349} height={337}/>
    </div>
<div className='flex flex-col pt-[98px] pl-[98px]'> 
<div className='text-[45px] font-bold'>
<span className='text-white'> Footprint in </span><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
</div>
<div className='text-[24px] font-bold pt-7 ml-[-125px]'>
<span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3's Limitless Possibilities.</span><br/>

</div>
</div>

    </div>
         </div>
       

         <div className=' pt-11  pl-7 lg:hidden h-[337px] w-[500px] bg-black  rounded-[20px]'>
            <div flex flex-col>
            <div className=' text-[36px] font-bold'>
                <span className='text-white'>Footprint in </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
        </div>
        <div className='text-[16px] pt-8 font-bold'>
        <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3's Limitless </span><br/>
        <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Possibilities. </span>
        </div>
            </div>
            
             </div>


        </div>
        
    </div>
  )
}

export default Benefit