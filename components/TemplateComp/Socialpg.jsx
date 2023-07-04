import React , {useState} from "react";
import Link from "next/link";
import Image from "next/image";


const Socialpg = ({
  text1,
  type,
  pdfLink,
  visibleInputs,
  inputValues
}) => {
  return (
    <div className="grid grid-cols-3 gap-y-3 sm:gap-y-6 tracking-[-0.5px] leading-[17px] sm:gap-x-14  pt-4 sm:pt-8 mx-2 sm:mx-6 ">
      
      {visibleInputs.includes('mail') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`mailto:${inputValues.mail}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/email.png`}
            alt="gmail Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1} `}>Mail</p>
      </div>
      )}
      {visibleInputs.includes('whatsapp') && (
        <div className="flex flex-col items-center">
          <Link target="_blank" href={`https://wa.me/${inputValues.whatsapp}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
            <Image
              src={`/assets/images/social/${type}/watsp.png`}
              alt="WhatsApp Logo"
              width={50}
              height={50}
            />
            </div>
          </Link>
          <p className={`text-[10px] sm:text-xs ${text1}  `}>Whatsapp</p>
        </div>
      )}
      {visibleInputs.includes('linkedin') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.linkedin}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/linked.png`}
            alt="linkedin Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>LinkedIn</p>
      </div>
      )}
      {visibleInputs.includes('instagram') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.instagram}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/insta.png`}
            alt="instagram Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Instagram</p>
      </div>
      )}
      {visibleInputs.includes('facebook') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.facebook}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/facebook.png`}
            alt="facebook Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Facebook</p>
      </div>
      )}
      {visibleInputs.includes('youtube') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.youtube}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/Youtube.png`}
            alt="Youtube Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Youtube</p>
      </div>
      )}
      {visibleInputs.includes('twitter') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.twitter}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/Twitter.png`}
            alt="Twitter Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Twitter</p>
      </div>
      )}
      {visibleInputs.includes('reddit') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.reddit}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/Reddit.png`}
            alt="Reddit Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Reddit</p>
      </div>
      )}
      {visibleInputs.includes('behance') && (
      <div className="flex flex-col  items-center">
        <Link target="_blank" href={`${inputValues.behance}`}>
          <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={`/assets/images/social/${type}/Behance.png`}
            alt="Behance Logo"
            width={50}
            height={50}
          />
          </div>
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Behance</p>
      </div>
      )}
      {visibleInputs.includes('skype') && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.skype}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Skype.png`}
                alt="Skype Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[10px] sm:text-xs ${text1}`}>Skype</p>
        </div>
      )}
      {visibleInputs.includes('calendly') && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.calendly}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Calendly.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[10px] sm:text-xs ${text1}`}>Calendly</p>
        </div>
      )}
      {visibleInputs.includes('pdf') && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${pdfLink}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Pdf.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[10px] sm:text-xs ${text1}`}>Download Pdf</p>
        </div>
      )}
      
    </div>
  );
};

export default Socialpg;