import Image from "next/image";

const Android = () => {
  return (
    <div className="lg:mx-2 ">
      <div className="hidden lg:block relative lg:mt-[170px] mt-[93px] px-4 sm:px-8 md:px-16   xl:pl-[76px]  lg:max-w-[1212px] h-[286px] bg-black mx-2 lg:mx-auto rounded-[20px]">
        <div className=" ">
          {/* <div className=' flex justify-between '> */}
          <div className="flex  xl:space-x-8 items-center   ">
            <div className="flex flex-col  ">
              <div className="pt-[50px] xl:min-w-[700px]   text-transparent  bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text ">
                <h2>Android and iOS compatible </h2>
              </div>
              <div className="flex flex-col   ">
                <div>
                  <div className=" flex flex-col items-center space-y-7 lg:space-y-0  lg:flex-row lg:justify-end lg:space-x-10  pt-9  ">
                    <div className=" text-white text-[16px] font-bold leading-[120%]">
                      <p>Coming soon</p>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 lg:right-[40px] xl:right-[76px]">
          <Image
            src={"/assets/images/landing/androidPhoneNew.png"}
            alt="phone"
            height={336}
            width={244}
          />
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden mt-[103px] max-w-[345px] sm:max-w-[450px] h-[601px] flex flex-col items-center mx-auto bg-black rounded-[20px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col pt-11 items-center justify-center">
            <div className="text-[30px] text-center font-bold text-transparent  bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text ">
              <h4>Android and iOS compatible </h4>
            </div>
            <div className="pt-8 text-white text-[16px] font-bold leading-[120%]">
              <p>Coming soon</p>
            </div>
            <div className="pt-8">
              <Image
                src={"/assets/images/landing/iosButton.png"}
                alt="download ios app"
                width={153}
                height={45}
              />
            </div>
            <div className="pt-5">
              <Image
                src={"/assets/images/landing/androidButton.png"}
                alt="download android app"
                width={153}
                height={45}
              />
            </div>
            <div className="mt-[50px] sm:hidden">
              <Image
                src={"/assets/images/landing/androidPhoneNew.png"}
                alt="phone"
                height={243}
                width={149}
              />
            </div>
            <div className="mt-[50px] hidden sm:block">
              <Image
                src={"/assets/images/landing/androidIosCompataible.png"}
                alt="phone"
                height={280}
                width={190}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Android;
