import React from "react";
import Image from "next/image";
import Link from "next/link";

const BioTemp = ({ bio, border, company, website, mobile, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center pl-1 ">
      <div className={` pt-2 pb-2 `}>
        <div className={`text-[12px] ${text2} text-[#7D9695] `}>Bio</div>
        <div className="pt-[11px] text-[12px] ">
          <p className="text-white text-xs">{bio}</p>
        </div>
        <div className="pt-[30px] grid grid-cols-2 gap-y-4 mx-auto">
          <div className="flex  items-center space-x-2 ">
            <Image
              src={"/assets/images/display/log.png"}
              alt="log"
              width={27}
              height={22}
            />

            <p className="text-[8px] ml-[2px] tracking-[-0.5px] text-[#7D9695]  ">
              {company}
              {/* <input
              className={`bg-transparent ${text2} text-[#7D9695] w-[120px]  `}
              type="text"
              placeholder="company Name"
              value={company}
              readOnly={true}
              //   onChange={handleChange}
            /> */}
            </p>
          </div>
          <div className="flex items-center space-x-2 ml-[50px] ">
            <Image
              src={"/assets/images/display/phone.png"}
              alt="phone"
              width={22}
              height={22}
            />
            <p className="text-[10px] ml-[1px] tracking-[-0.5px] text-[#7D9695]">
              {mobile}
            </p>
          </div>
          <div className="flex items-center pt-1">
            <Image
              src={"/assets/images/display/website.png"}
              alt="website"
              width={22}
              height={22}
            />
            <Link href={`${website}`}>
              <p className="text-[10px] ml-1.5 tracking-[-0.5px] text-[#7D9695] cursor-pointer  ">
                {website}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioTemp;
