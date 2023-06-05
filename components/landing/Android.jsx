import Image from "next/image";

const Android = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-16  max-w-[1208px] mx-auto">
      <div className="lg:pt-[170px] pt-[93px] ">
        {/* <div className=' flex justify-between '> */}
        <div className="flex lg:justify-center xl:space-x-8 items-center md:justify-center   ">
          <div className="flex flex-col mr-6 ">
            <div className=" md:min-w-[610px] xl:min-w-[700px]  mx-auto text-transparent md:text-right bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text ">
              <h2>Android and iOS compatible </h2>
            </div>
            <div className="flex flex-col  lg:items-end items-center bg-red-200">
              <div>
                <div className=" flex flex-col items-center space-y-7 lg:space-y-0  lg:flex-row lg:justify-end lg:space-x-10 lg:pt-[51px] pt-[58px] ">
                  <div className="">
                    <Image
                      src={"/assets/images/landing/iosButton.png"}
                      alt="download ios app"
                      width={170}
                      height={51}
                    />
                  </div>
                  <div className="">
                    <Image
                      src={"/assets/images/landing/androidButton.png"}
                      alt="download android app"
                      width={170}
                      height={51}
                    />
                  </div>
                </div>
                <div className=" lg:block pt-7 ">
                  <h2>Coming soon</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={"/assets/images/landing/androidPhoneImage.png"}
              alt="app screenshot"
              width={276}
              height={491}
            />

            {/* <div className="absolute xl:hidden top-[112px] left-[40px]">
              <Image
                src={"/assets/images/landing/liteInterior.png"}
                alt="download "
                width={180}
                height={240}
              />
            </div> */}
          </div>
        </div>

        <div />
      </div>
    </div>
  );
};

export default Android;
