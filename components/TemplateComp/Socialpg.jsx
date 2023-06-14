import React from "react";
import Link from "next/link";
import Image from "next/image";

const Socialpg = ({
  text1,
  type,
  instaLink,
  watspLink,
  linkedLink,
  faceLink,
  gmailLink,
}) => {
  return (
    <div className="grid grid-cols-3 gap-y-6 tracking-[-0.5px] leading-[17px] gap-x-14 pt-[23px] mx-6 ">
      <div className="flex flex-col items-center">
        <Link href={`${watspLink}`}>
          <Image
            src={`/assets/images/social/${type}/watsp.png`}
            alt="WhatsApp Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[12px] ${text1}  `}>Whatsapp</p>
      </div>
      <div className="flex flex-col  items-center">
        <Link href={`${gmailLink}`}>
          <Image
            src={`/assets/images/social/${type}/email.png`}
            alt="gmail Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[12px] ${text1} `}>Mail</p>
      </div>
      <div className="flex flex-col  items-center">
        <Link href={`${linkedLink}`}>
          <Image
            src={`/assets/images/social/${type}/linked.png`}
            alt="linkedin Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>LinkedIn</p>
      </div>
      <div className="flex flex-col  items-center">
        <Link href={`${instaLink}`}>
          <Image
            src={`/assets/images/social/${type}/insta.png`}
            alt="instagram Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>Instagram</p>
      </div>
      <div className="flex flex-col  items-center">
        <Link href={`${faceLink}`}>
          <Image
            className={`${faceLink ? "grayscale-0" : "grayscale"}`}
            src={`/assets/images/social/${type}/facebook.png`}
            alt="facebook Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>Facebook</p>
      </div>
      <div className="flex flex-col  items-center">
        <Link href={"#"}>
          <Image
            className="grayscale"
            src={`/assets/images/social/${type}/pdf.png`}
            alt="deck Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] ${text1}`}>Download PDF</p>
      </div>
    </div>
  );
};

export default Socialpg;