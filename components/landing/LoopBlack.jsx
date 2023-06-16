import Image from "next/image";

const LoopBlack = ({ text }) => {
  return (
    <div className="mt-20 lg:mt-28  ">
      <div className="hidden lg:block bg-[#090909] h-[648px] max-w-[1212px] mx-3 xl:mx-auto rounded-[20px] ">
        <div className="  pt-16 lg:pl-4 xl:pl-9 flex ">
          <div>
            <div className="text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text">
              <h2>Loop Black </h2>
            </div>
            <div className="text-[30px] xl:text-[40px] pt-9 text-white leading-[140%] pr-[16px] max-w-[652px]">
              <h4>
                Unveil the Power of{" "}
                <span className="text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text">
                  Darkness,
                </span>
              </h4>
              <h4>Unleash Limitless Connections.</h4>
            </div>
            <div className="pl-[13px] lg:max-w-[550px] xl:max-w-[604px]  pt-[76px] text-white lg:text-[10px] xl:text-[14px] leading-[164%]">
              <div className=" ">
                <p>
                  Make a bold statement with Loop Black, our signature card
                  designed to captivate with its sleek and matte black finish. 
                </p>
              </div>
              <div className="pt-9  ">
                <p>
                  Your takes centre stage in a subtle, small size on the front,
                  while the Loop logo adds a touch of distinction behind in a
                  glossy black, creating a stunning contrast. 
                </p>
              </div>
            </div>
            <div className="pt-[76px] pl-3 text-[#A7A7A7] text-[12px]">
              <p>
                This card exudes exclusivity and leaves a lasting impression
                that&apos;s both refined and memorable.
              </p>
            </div>
          </div>

          <div className=" pr-5  flex flex-col items-center">
            <div className="hidden xl:block">
              <Image
                src={"/assets/images/landing/LoopBlack.png"}
                height={450}
                width={494}
                alt="loopcard"
              />
            </div>
            <div className="xl:hidden">
              <Image
                src={"/assets/images/landing/LoopBlack.png"}
                height={400}
                width={400}
                alt="loopcard"
              />
            </div>

            <div className="pt-4">
              <button className="rounded-[10px] h-[41px] w-[165px] bg-gradient-to-br from-[#68D5DF] to-[#95FEAF] text-black font-semibold">
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-[875px] max-w-[345px] md:max-w-[550px] md:flex md:flex-col items-center bg-black mx-auto rounded-[15px]">
        <div className="pt-11 pl-[26px] ">
          <div className="pl-2">
            <Image
              src={"/assets/images/landing/loopcard.png"}
              height={269}
              width={295}
              alt="loopcard"
            />
          </div>
          <div className="mt-[74px]">
            <div className="text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text">
              <h2>Loop Black </h2>
            </div>
            <div className="text-[16px]  pt-2 max-w-[263px] text-white leading-[140%]">
              <h3 className="text-white">
                Unveil the Power of{" "}
                <span className="text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text">
                  Darkness,
                </span>
              </h3>
              <h3 className="text-white"> Unleash Limitless Connections.</h3>
            </div>
            <div className="pt-9 text-[12px] max-w-[275px] text-white">
              <div>
                <p>
                  Make a bold statement with Loop Black, our signature card
                  designed to captivate with its sleek and matte black finish. 
                </p>
              </div>
              <div className="pt-7">
                <p>
                  Your takes centre stage in a subtle, small size on the front,
                  while the Loop logo adds a touch of distinction behind in a
                  glossy black, creating a stunning contrast. 
                </p>
              </div>
            </div>
            <div className="pt-7 flex justify-center">
              <button className="rounded-[10px] h-[34px] w-[139px] bg-gradient-to-br from-[#68D5DF] to-[#95FEAF] text-black">
                {text}
              </button>
            </div>
            <div className="pt-6 text-[10px] text-[#A7A7A7] leading-[140%] max-w-[245px]">
              <p>
                This card exudes exclusivity and leaves a lasting impression
                that&apos;s both refined and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoopBlack;
