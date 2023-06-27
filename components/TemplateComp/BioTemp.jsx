import React from "react";
import Image from "next/image";
import Link from "next/link";

const BioTemp = ({ bio, border, company, website, mobile, text1, text2 ,selectedTemplate , type }) => {
  const handlePhoneNumberClick = () => {
    window.open(`tel:${mobile}`);
    console.log(selectedTemplate)
  };

  return (
    <div className={`${border} ${text2} rounded-[10px]  pt-2 pb-2 px-2  sm:px-4 mx-2 `}>
      <div className={`text-[12px] `}>Bio</div>
      <div className="pt-2 sm:pt-4 text-[12px]">
        <p className={`text-[12px] w-full ${text1} h-auto`} >
          {bio ? bio : "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis"}
        </p>
      </div>
      <div className="pt-4  grid grid-cols-2 gap-y-4">
        <div className="flex items-center">
          <Image
            src={`/assets/images/display/${type}/log.png`}
            alt="log"
            width={24}
            height={20}
          />

          <p
            className={`text-[10px] ml-1.5 tracking-[-0.5px]  `}
          >
            {company ? company : "Lorem Ipsum"}
          </p>
        </div>
        <div
          className="flex ml-6 sm:ml-[50px] items-center "
          onClick={handlePhoneNumberClick}
        >
          <Image
            src={`/assets/images/display/${type}/phone.png`}
            alt="phone"
            width={22}
            height={22}
          />
          <p className="text-[10px] ml-1.5 tracking-[-0.5px]">
            {mobile ? mobile : "919833XXXXXX"}
          </p>
        </div>
        <div className="flex w-[200px] lg:w-72 items-center">
          <div className="h-[22px] w-[24px] flex justify-center">
            <Image
              src={`/assets/images/display/${type}/website.png`}
              alt="website"
              width={22}
              height={22}
            />
          </div>
          <Link href={`${website}`}>
            <p className={`ml-1.5 tracking-[-0.5px] ${website && website.replace(/(https?:\/\/)?(www\.)?/, "").length > 15 ? "text-[8px]" : "text-[10px]"}`}>
              {website ? website.replace(/(https?:\/\/)?(www\.)?/, "") : "www.loremipsum.com"}
            </p>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioTemp;
