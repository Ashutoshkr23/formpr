import {Card, HorizontalCard1, HorizontalCard2} from '@/components';


const Benefits = () => {

    return (
        <div className='mt-[235px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-[16px] font-poppins'>
                    Benefits
                </div>
                <div className='text-[50px] font-poppins font-bold'>
                    Join the Loop
                </div>

            </div>
            <div className='mt-[91px] flex flex-col items-center space-y-9 '>

                <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16'>


                    <Card
                        cardStyle={" relative rounded-[20px] bg-white w-[345px]  h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  pl-[33px] pt-[17px] md:pl-[47px]  md:pt-[30px]"}
                        heading={"Cutting Edge Designs."}
                        headingStyle={"md:text-[40px] text-[24px] leading-[120%]  font-bold md:pr-[86px] pr-[118px]"}
                        text={"Elevate Your Networking with Cutting-Edge Impressions."}
                        textStyle={"md:pt-[29px] text-[12px] pt-5 md:text-[16px] pr-[37px] md:pr-[131px]  md:text-14 font-bold"}
                        img={"/assets/images/landing/CardnShadow.png"}
                        btncolor={"white"}
                        backContent={" From sleek minimalism to captivating artwork, our customizable designs ensure your digital card stands out in the Loop."}
                    />

                    <Card
                        cardStyle={"relative w-[345px] md:pl-[60px]  md:pt-[45px] pl-[40px] pr-[31px] pt-[31px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96]"}
                        heading={"Limitless Flexibility."}
                        headingStyle={"text-[36px] leading-[120%]  md:text-[45px] md:pr-[42px] font-bold "}
                        text={"Edit and Adapt Your Digital Card Limitlessly."}
                        textStyle={"pt-4 text-[16px] md:text-[24px] font-bold md:pr-28"}
                        btncolor={"black"}
                    />
                </div>

                <HorizontalCard1/>




                <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16'>


                    <Card
                        cardStyle={"relative pt-[40px] pl-6 md:pr-[61px] md:pl-14 md:pt-12 w-[337px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-br   from-[#FDFF96] to-[#F16869]"}
                        heading={"Seamless User Experience. "}
                        headingStyle={"text-[36px] leading-[120%]  md:text-[45px] pr-[14px] font-bold"}
                        text={"Effortless Networking Made  Beautifully Simple."}
                        textStyle={"mt-7 leading-[21px] text-[16px] md:text-[24px] pr-[65px] font-bold"}
                        img={""}
                        btncolor={"black"}

                    />

                    <Card
                        cardStyle={"relative  w-[345px] h-[230px] md:w-[500px] md:h-[336px] drop-shadow-white bg-white  rounded-[20px]"}
                        heading={"Seamless  Sharing.  "}
                        headingStyle={"md:text-[40px] leading-[120%]  md:pl-[43px] pl-[30px] text-[24px] md:pr-[214px] pr-[130px] font-bold pt-11"}
                        text={"Embrace the App-Free  Advantage of Loop Connections."}
                        textStyle={"md:pt-[70px] pt-[47px] md:pl-[43px] pl-[30px] md:pr-[250px] pr-[100px] text-[14px] font-bold"}
                        img={"/assets/images/landing/PhoneinHand.png"}
                    />
                </div>
                <HorizontalCard2/>

            </div>
        </div>
    )
}

export default Benefits