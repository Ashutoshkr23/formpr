import { Card, HorizontalCard1, HorizontalCard2 } from '@/components';
const Benefits = () => {

    return (
        <div className=' mt-20 lg:mt-28  md:px-16 lg:px-4 xl:px-0 max-w-[1208px] mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h3 >
                    Benefits
                </h3>
                <h2 >
                    Join the Loop
                </h2>

            </div>
            <div className='mt-[55px] pt-9 lg:mt-[91px]  lg:pt-0  flex flex-col items-center space-y-9 overflow-hidden '>

                <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16'>


                    <Card
                        cardStyle={" relative rounded-[20px] bg-white w-[300px] mx-auto mobile:w-[345px]  h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] drop-shadow-white pl-[24px] mobile:pl-[33px] pt-[17px] md:pl-[40px]  md:pt-[30px]"}
                        heading={"Cutting Edge Designs."}
                        headingStyle={"md:text-[40px] text-[24px] leading-[120%]  font-bold md:pr-[86px] pr-[40px]"}
                        text={"Elevate Your Networking with Cutting-Edge Impressions."}
                        textStyle={"md:pt-[22px] text-[12px] pt-5 md:text-[16px] pr-[37px] md:pr-[131px]  md:text-14 text-black font-bold"}
                        img={"/assets/images/landing/Loopdark.png"}
                        btncolor={"white"}
                        backContent={"From sleek minimalism to captivating artwork, our customizable designs ensure your digital card stands out in the Loop. "}
                        pstyle={"font-bold text-sm md:text-base mr-12 mt-4 ml-4 leading-[180%] "}
                    />

                    <Card
                        cardStyle={"relative w-[300px] mx-auto mobile:w-[345px] md:pl-[60px]  md:pt-[45px] pl-[24px] mobile:pl-[40px] pr-[31px] pt-[31px] h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96]"}
                        heading={"Limitless Flexibility."}
                        headingStyle={"text-[36px] leading-[120%]  md:text-[45px] md:pr-[42px] font-bold "}
                        text={"Edit and Adapt Your Digital Card Limitlessly."}
                        textStyle={"pt-4 text-[16px] md:text-[24px] text-black font-bold md:pr-28"}
                        btncolor={"black"}
                        backContent={" Stay in the Loop without missing a beat. Update your details endlessly, ensuring your card always reflects your latest achievements and information. "}
                        pstyle={"text-base md:text-2xl font-bold leading-[180%] mr-2 md:mr-12 "}

                    />
                </div>

                <HorizontalCard1 />




                <div className='flex flex-col items-center space-y-9 lg:space-y-0 lg:flex-row justify-center lg:space-x-16'>


                    <Card
                        cardStyle={"relative pt-[40px] pl-6   md:pt-12 w-[300px] mx-auto mobile:w-[345px] h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] drop-shadow-white  rounded-[20px] bg-gradient-to-br   from-[#FDFF96] to-[#F16869]"}
                        heading={"Fluid User Experience. "}
                        headingStyle={"text-[36px] leading-[120%]  md:text-[45px]  font-bold"}
                        text={"Effortless Networking Made  Beautifully Simple."}
                        textStyle={"mt-7 leading-[120%] leading-[130%] text-[16px] md:text-[24px] pr-[65px] text-black font-bold"}
                        img={""}
                        btncolor={"black"}
                        backContent={' Purchase, personalize, and present your card with ease, creating an unforgettable experience for both you and the people you loop in.'}
                        pstyle={"text-base md:text-2xl font-bold md:ml-8 md:mt-4 leading-[180%] mr-2 mobile:mr-8 md:mr-12 "}
                    />

                    <Card
                        cardStyle={"relative  w-[300px] mx-auto mobile:w-[345px] h-[230px] md:w-[450px]         xl:w-[500px] md:h-[336px] drop-shadow-white bg-white  rounded-[20px]"}
                        heading={"Seamless  Sharing.  "}
                        headingStyle={"md:text-[40px] leading-[120%]  md:pl-[32px] pl-[24px] text-[24px] md:pr-[214px] pr-[130px] font-bold pt-10 lg:pt-12"}
                        text={"Embrace the App-Free Advantage of Loop Connections."}
                        textStyle={"md:pt-[60px] leading-[186%] w-[230px] text-black md:w-[275px] pt-[47px] md:pl-[32px] pl-[24px] text-xs md:text-[14px] font-bold"}
                        img={"/assets/images/landing/PhoneinHand.png"}
                        backContent={'No downloads, no hassle. With Loop, your contacts open effortlessly in a WebView, making connections smooth and frictionless.'}
                        pstyle={"font-bold text-sm md:text-base mr-12 w-[140px] mobile:w-[180px] md:w-[200px] ml-4 md:ml-10 pt-10 md:pt-16 leading-[180%] "}

                    />
                </div>
                <HorizontalCard2 />

            </div>
        </div>
    )
}

export default Benefits