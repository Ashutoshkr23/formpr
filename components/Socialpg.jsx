import React , {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Socialpg = ({
  text1,
  type,
  behance,
  facebook,
  instagram,
  linkedin,
  mail,
  reddit,
  twitter,
  whatsappNumber,
  youtube,
}) => {
  
  return (
    <div className="grid grid-cols-3 gap-y-6 tracking-[-0.5px] leading-[17px] gap-x-14 pt-[23px] mx-6 ">
      
      {mail && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`mailto:${mail}`}>
            <Image
              src={`/assets/images/social/${type}/email.png`}
              alt="gmail Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1} `}>Mail</p>
        </div>
      )}
      {whatsappNumber && (
        <div className="flex flex-col items-center">
          <Link target="_blank" href={`https://wa.me/${whatsappNumber}`}>
            <Image
              src={`/assets/images/social/${type}/watsp.png`}
              alt="WhatsApp Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}  `}>Whatsapp</p>
        </div>
      )}
      {linkedin && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${linkedin}`}>
            <Image
              src={`/assets/images/social/${type}/linked.png`}
              alt="linkedin Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>LinkedIn</p>
        </div>
      )}
      {instagram && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${instagram}`}>
            <Image
              src={`/assets/images/social/${type}/insta.png`}
              alt="instagram Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Instagram</p>
        </div>
      )}
      {facebook && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${facebook}`}>
            <Image
              src={`/assets/images/social/${type}/facebook.png`}
              alt="facebook Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Facebook</p>
        </div>
      )}
      {youtube&& (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${youtube}`}>
            <Image
              src={`/assets/images/social/${type}/Youtube.png`}
              alt="Youtube Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Youtube</p>
        </div>
      )}
      {twitter&& (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${twitter}`}>
            <Image
              src={`/assets/images/social/${type}/Twitter.png`}
              alt="Twitter Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Twitter</p>
        </div>
      )}
      {reddit && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${reddit}`}>
            <Image
              src={`/assets/images/social/${type}/Reddit.png`}
              alt="Reddit Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Reddit</p>
        </div>
      )}
      {behance && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${behance}`}>
            <Image
              src={`/assets/images/social/${type}/Behance.png`}
              alt="Behance Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[12px] ${text1}`}>Behance</p>
        </div>
      )}
      {/*
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
      */}
    </div>
  );
};

export default Socialpg;
