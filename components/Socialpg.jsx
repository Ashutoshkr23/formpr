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
  skype,
  location,
  calendly,
  pdf,
}) => {
  const handleOpenLocation = () => {
    const { latitude, longitude } = location;

    // Check if the user is on an Apple device (iPhone, iPad)
    const isAppleDevice = /(iPhone|iPod|iPad)/i.test(navigator.userAgent);

    if (isAppleDevice) {
      // Open Apple Maps
      window.open(`http://maps.apple.com/?q=${latitude},${longitude}`);
    } else {
      // Open Google Maps
      window.open(`https://maps.google.com/?q=${latitude},${longitude}`);
    }
  };

  
  return (
    <div className="grid grid-cols-3 gap-y-6 tracking-[-0.5px] leading-[17px] gap-x-14 pt-[23px] mx-auto px-2 ">
      
      {mail && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`mailto:${mail}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/email.png`}
                alt="gmail Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1} `}>Mail</p>
        </div>
      )}
      {whatsappNumber && (
        <div className="flex flex-col items-center">
          <Link target="_blank" href={`https://wa.me/${whatsappNumber}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/watsp.png`}
                alt="WhatsApp Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}  `}>Whatsapp</p>
        </div>
      )}
      {linkedin && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${linkedin}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/linked.png`}
                alt="linkedin Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>LinkedIn</p>
        </div>
      )}
      {instagram && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${instagram}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/insta.png`}
                alt="instagram Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Instagram</p>
        </div>
      )}
      {facebook && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${facebook}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/facebook.png`}
                alt="facebook Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Facebook</p>
        </div>
      )}
      {youtube&& (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${youtube}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Youtube.png`}
                alt="Youtube Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Youtube</p>
        </div>
      )}
      {twitter&& (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${twitter}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Twitter.png`}
                alt="Twitter Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Twitter</p>
        </div>
      )}
      {reddit && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${reddit}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Reddit.png`}
                alt="Reddit Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Reddit</p>
        </div>
      )}
      {behance && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${behance}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Behance.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Behance</p>
        </div>
      )}
      {skype && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${skype}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Skype.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Skype</p>
        </div>
      )}
      {calendly && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${calendly}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/Calendly.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] ${text1}`}>Calendly</p>
        </div>
      )}
      {pdf && (
        <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${pdf}`}>
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={`/assets/images/social/${type}/pdf.png`}
                alt="Behance Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <p className={`text-[12px] text-center ${text1}`}>Download Pdf</p>
        </div>
      )}
      {location.latitude && location.longitude && (
        <div className="flex-col justify-center">
          <button onClick={handleOpenLocation} className="h-[60px]  w-[60px] flex items-center justify-center">
            <Image
              src={`/assets/images/social/${type}/Maps.png`}
              alt="Behance Logo"
              width={50}
              height={50}
            />
          </button>
          <p className={`text-[12px] text-center ${text1}`}>Location</p>
        </div> 
      )}
      
    </div>
  );
};

export default Socialpg;
