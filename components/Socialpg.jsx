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
    <div className="grid grid-cols-3 gap-y-6 tracking-[-0.5px] leading-[17px] gap-x-14 pt-[23px] ">
      <div className="">
        <Link href={`${watspLink}`}>
          <Image
            src={`/assets/images/social/folder1/watsp.png`}
            alt="WhatsApp Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[12px] ${text1}  `}>Whatsapp</p>
      </div>
      <div>
        <Link href={`${gmailLink}`}>
          <Image
            src={`/assets/images/social/folder1/email.png`}
            alt="gmail Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[12px] ${text1} pl-3`}>Mail</p>
      </div>
      <div>
        <Link href={`${linkedLink}`}>
          <Image
            src={`/assets/images/social/folder1/linked.png`}
            alt="linkedin Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>LinkedIn</p>
      </div>
      <div>
        <Link href={`${instaLink}`}>
          <Image
            src={`/assets/images/social/folder1/insta.png`}
            alt="instagram Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>Instagram</p>
      </div>
      <div>
        <Link href={`${faceLink}`}>
          <Image
            className={`${faceLink ? "grayscale-0" : "grayscale"}`}
            src={`/assets/images/social/folder1/facebook.png`}
            alt="facebook Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[12px] ${text1}`}>Facebook</p>
      </div>
      <div>
        <Link href={"#"}>
          <Image
            className="grayscale"
            src={`/assets/images/social/folder1/pdf.png`}
            alt="deck Logo"
            width={50}
            height={50}
          />
        </Link>
        <p className={`text-[10px] ${text1}`}>Download PDF</p>
      </div>
    </div>
  );
};

export default Socialpg;
