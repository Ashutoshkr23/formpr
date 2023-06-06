import Landing from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="" id="contact">
      <div className="hidden md:block">
        <div className="bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96]">
          <div className="flex justify-between items-center h-[200px] max-w-[1208px] mx-auto ">
            <div className="hidden lg:block ">
              <Image
                src={"/assets/images/landing/footerloop.svg"}
                height={81}
                width={186}
                alt="loop logo"
              />
            </div>
            <div className="lg:hidden ">
              <Image
                src={"/assets/images/landing/footerloop.svg"}
                height={81}
                width={156}
                alt="loop logo"
              />
            </div>

            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-7 ">
                <div>
                  <p className="text-[14px] font-bold">PRIVACY POLICY</p>
                </div>
                <div className="flex space-x-5  items-center ">
                  <div>
                    <a
                      href="https://instagram.com/loop.card?igshid=NTc4MTIwNjQ2YQ=="
                      target="_blank"
                    >
                      <Image
                        src={"/assets/images/landing/footerinsta.png"}
                        height={32}
                        width={32}
                        alt="loop instagram"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/company/loop-card/" target="_blank">
                      <Image
                        src={"/assets/images/landing/footerlink.png"}
                        height={32}
                        width={32}
                        alt="loop linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-bold">TERMS AND CONDITIONS</p>
              </div>
            </div>

            <div className="flex flex-col pt-6 ">
              <div className="flex flex-col gap-y-4 ">
                <div className="text-[14px] font-bold">
                  <p>CONTACT US </p>
                </div>
                <div className=" text-[16px] leading-[154%]">
                  <p> gm@alphamintlabs.com</p>
                </div>
              </div>

              <div className="flex items-center  space-x-4 pt-6  ">
                <div className="text-xs">
                  <p>Made with love by</p>
                </div>
                <div>
                  <Image
                    src={"/assets/images/landing/amlLogo.png"}
                    alt="aml Logo"
                    height={23}
                    width={63}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden min-w-full bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] h-full">
        <div className="flex flex-col justify-center items-center">
          <div className="pt-9">
            <Image
              src={"/assets/images/landing/footerloop.svg"}
              height={46}
              width={106}
              alt="loop logo"
            />
          </div>
          <div className=" pt-10 font-bold">
            <p>PRIVACY POLICY</p>
          </div>
          <div className=" pt-[30px] font-bold">
            <p>TERMS AND CONDITIONS</p>
          </div>
          <div className=" pt-[30px] font-bold">
            <p>CONTACT US </p>
          </div>
          <div className=" pt-2">
            <p> gm@alphamintlabs.com </p>
          </div>

          <div className="flex  pt-8 space-x-7">
            <div>
              <a
                href="https://instagram.com/loop.card?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
              >
                <Image
                  src="/assets/images/landing/footerinsta.png"
                  height={32}
                  width={32}
                  alt="loop instagram"
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/loop-card/" target="_blank">
                <Image
                  src={"/assets/images/landing/footerlink.png"}
                  height={32}
                  width={32}
                  alt="loop linkedin"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center pb-2 pt-5  space-x-1 ">
            <div className="text-xs">
              <p>Made with love by</p>
            </div>
            <div>
              <Image
                src={"/assets/images/landing/amlLogo.png"}
                alt="aml Logo"
                height={25}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
