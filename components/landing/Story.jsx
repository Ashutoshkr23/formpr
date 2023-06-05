import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div
      className=" mt-[180px] lg:mt-[339px] sm:px-8 md:px-16 lg:px-4 xl:px-0 max-w-[1280px] mx-auto"
      id="story"
    >
      <div className="relative hidden lg:block pl-[405px] mx-auto max-w-[1280px] h-[438px]  rounded-[20px] ">
        <div className="text-[#A7A7A7]  pt-[46px] pr-[28px]">
          <p>The Loop Journey</p>
        </div>
        <div className="text-black pr-[28px]">
          <h2>Our Story </h2>
        </div>
        <div className="pt-8  max-w-[635px] text-[20px]">
          <p className=" font-bold">
            <span className="text-transparent bg-gradient-to-br from-[#F16869] to-[#FDFF96] bg-clip-text xl:leading-[186%]">
              At Loop, we&apos;re passionate about making networking effortless{" "}
            </span>
            <span className="text-transparent bg-gradient-to-tr from-[#F16869] to-[#FDFF96] bg-clip-text">
              and eco-friendly.{" "}
            </span>
          </p>
        </div>

        <div className="xl:pt-8 pt-6 text-black  xl:max-w-[770px] leading-[186%]">
          <p className="text-14">
            Our team of experts has worked tirelessly to design the perfect
            solution that saves you time and resources while giving you an edge
            in your networking game. We believe that first impressions matter,
            and that&apos;s why we&apos;ve created a product that&apos;s both
            classy and luxurious. 
          </p>
        </div>

        <div className=" absolute left-[43px] bottom-0">
          <Image
            src={"/assets/images/landing/ourStory.png"}
            alt="mystoryphone"
            width={287}
            height={516}
            quality={100}
          />
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden  flex justify-center items-center mx-auto ">
        <div className="relative  max-w-[345px]   pl-5 rounded-[15px]">
          {/* <div className="absolute left-0 -top-[81px] ">
            <Image
              src={"/assets/images/landing/storyph2.png"}
              alt="storyPhone"
              width={345}
              height={252}
            />
          </div> */}
          <div className="flex flex-col">
            <div className="flex flex-col mobile:pl-5 ">
              <div className="text-[#A7A7A7] ">
                <p className="text-[12px]">The Loop Journey</p>
              </div>
              <div className="text-black font-bold ">
                <h2>Our Story  </h2>
              </div>

              <div className="text-black  pt-7 min-w-[282px] ">
                <p className="text-[12px] md:text-[16px] font-bold">
                  <span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#F16869] bg-clip-text">
                    At Loop, we&apos;re passionate about making{" "}
                  </span>
                  <span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#F16869] bg-clip-text">
                    networking effortless and eco-friendly.{" "}
                  </span>{" "}
                </p>
              </div>

              <div className="pt-4 mobile:pt-7 min-w-[299px]  text-black text-[12px] md:text-[14px] leading-[186%]">
                <p className="">
                  Our team of experts has worked tirelessly to design the
                  perfect solution that saves you time and resources while
                  giving you an edge in your networking game. We believe that
                  first impressions matter, and that&apos;s why we&apos;ve
                  created a product that&apos;s both classy and luxurious. 
                </p>
              </div>
            </div>
            <div className="pt-10">
              <Image
                src={"/assets/images/landing/ourStoryphone2.png"}
                alt="phone 2"
                height={252}
                width={345}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
