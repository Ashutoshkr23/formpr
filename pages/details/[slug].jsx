import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { saveAs } from "file-saver"; // Import the file-saver library
import ProfileImg from "@/components/ProfileImg";
import Bio from "@/components/Bio";
import Social from "@/components/Social";
import Image from "next/image";
import axios from "axios";
import Socialro from "@/components/rotary/Socialro";
import Bioro from "@/components/rotary/Bioro";
import Profilero from "@/components/rotary/Profilero";
import RotaryLogo from "@/components/rotary/RotaryLogo";
import Template from "@/components/Template";
import themes from "@/components/Themes";
//import Navbar from '@/components/Navbar';

export default function ContactDetails() {
  const router = useRouter();
  const [contact, setContact] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const { slug } = router.query;
    setId(slug);

    // async function fetchContact() {
    //   const res = await fetch(`/api/contact?cardUuid=${slug}`);
    //   const data = await res.json();
    //   if (data.contact) {
    //     setContact(data.contact);

    //     console.clear();

    //     const cardUuid = data.contact.cardUuid;
    //     const userEmail = data.contact.email;

    //     const sendDataToAPI = { cardUuid, userEmail };

    //     const settingRemainder = await axios.post(
    //       "http://localhost:3000/api/setRemainder",
    //       sendDataToAPI
    //     );
    //   }
    // }

    //fetchContact();
  }, [router.query]);

  //   const downloadVCard = () => {
  //     // Create a vCard string from the contact data
  //     const vCard = `BEGIN:VCARD
  // FN:${contact.firstName} ${contact.lastName}
  // TEL;TYPE=CELL:${contact.mobileNumber}
  // EMAIL;:${contact.email}
  // END:VCARD`;

  //     // Convert the vCard string to a Blob object
  //     const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });

  //     // Save the Blob as a file using the file-saver library
  //     saveAs(blob, `${contact.firstName} ${contact.lastName}.vcf`);
  //   };

  const downloadVCard = () => {
    // Create a vCard string from the contact data
    const vCard = `BEGIN:VCARD
FN:Sukumaran Nair
TEL;TYPE=CELL:+919819697361
EMAIL;: siddharth@alphamintlabs.com
URL:rchiranandani.rotaryindia.org
END:VCARD`;

    // Convert the vCard string to a Blob object
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });

    // Save the Blob as a file using the file-saver library
    saveAs(blob, "hello.vcf");
  };
  return (
    <div className="mx-auto max-w-[375px] flex justify-center items-center ">
      {/* ayush bansal */}
      {id == "d5d7d6f3-2583-4c9b-af23-6a712e3b4d4d" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Aayush"}
            lname={"Bansal"}
            bio={"A proud part of the Black Cab Agency Network "}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"9820447476"}
            gmail={"aayush@blackcab.co.in"}
            instaLink={`https://www.instagram.com/aayushbansal26/`}
            watspLink={`https://api.whatsapp.com/send?phone=919820447476`}
            linkedLink={`https://www.linkedin.com/in/aayush-bansal-110385a7/`}
            profile={`/assets/images/profilePic/Aayush Bansal.jpeg`}
          />
        </div>
      )}

      {/*  2*/}
      {id == "6b18db9c-0c96-45c5-ba77-04dc3293dc7c" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Siddhartha"}
            lname={"Singh"}
            bio={"A proud part of the Black Cab Agency Network "}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"9004922756"}
            gmail={"siddhartha@blackcab.co.in"}
            instaLink={"https://www.instagram.com/siddharthasingh05/"}
            watspLink={`https://api.whatsapp.com/send?phone=919004922756`}
            linkedLink={`https://www.linkedin.com/in/siddhartha-singh-7552b5107/`}
            profile={`/assets/images/profilePic/Siddhartha Singh.jpeg`}
          />
        </div>
      )}

      {/* 3 */}
      {id == "a82d7d0e-7e32-4fe5-a4b2-cfe79f0c4c4f" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Aayushman"}
            lname={"Sinha"}
            bio={"A proud part of the Black Cab Agency Network "}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"9833556650"}
            gmail={"aayushman@blackcab.co.in"}
            instaLink={`https://www.instagram.com/aayushmansinha/`}
            watspLink={`https://api.whatsapp.com/send?phone=919833556650`}
            linkedLink={`https://www.linkedin.com/in/aayushmansinha/`}
            profile={`/assets/images/profilePic/Aayushman Sinha.jpg`}
          />
        </div>
      )}
      {/* 4 */}
      {id == "7a932f36-70b4-4ad5-bd6a-91139b898874" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Rishikesh"}
            lname={"Bhanushali"}
            bio={"A proud part of the Black Cab Agency Network"}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"9920223594"}
            gmail={"rishikesh@blackcab.co.in "}
            instaLink={`https://www.instagram.com/rishi_235/`}
            watspLink={`https://api.whatsapp.com/send?phone=919920223594`}
            linkedLink={`https://www.linkedin.com/in/rishikeshbhanushali/`}
            profile={`/assets/images/profilePic/Rishikesh Bhanushali.jpeg`}
          />
        </div>
      )}
      {/* 5 */}
      {id == "0a7f5a3d-6b2d-4740-bd34-2285792344b6" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Alok"}
            lname={"Verma"}
            bio={"A proud part of the Black Cab Agency Network  "}
            designation={"Co-Founder"}
            company={"Secret Sauce Studios- A Black Cab Network Agency "}
            website={"https://secretsaucestudios.in/"}
            mobile={"9930981280"}
            gmail={"alok@secretsaucestudios.in "}
            instaLink={`https://www.instagram.com/allaboutthatpalate/`}
            watspLink={`https://api.whatsapp.com/send?phone=919930981280`}
            linkedLink={`https://www.linkedin.com/in/nishant-joshi-54632b26a`}
            profile={`/assets/images/profilePic/Alok Verma.jpg`}
          />
        </div>
      )}
      {/* 6 */}
      {id == "f50f7844-7b2e-4459-82c3-2f82e32d1026" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Nishant"}
            lname={"Joshi"}
            bio={"A proud part of the Black Cab Agency Network"}
            designation={"Co-Founder"}
            company={"Secret Sauce Studios- A Black Cab Network Agency "}
            website={"https://secretsaucestudios.in/"}
            mobile={"9819566568"}
            gmail={"nishant@secretsaucestudios.in "}
            instLink={`https://www.instagram.com/joshinishant91/`}
            watspLink={`https://api.whatsapp.com/send?phone=919819566568`}
            linkedLink={`https://www.linkedin.com/in/nishant-joshi-54632b26a`}
            profile={`/assets/images/profilePic/Nishant Joshi.jpg`}
          />
        </div>
      )}
      {/* 7 */}
      {id == "9b05175e-eeb3-4d71-8a36-1e2b11fe5d75" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Ujjwal"}
            lname={"Sharma"}
            bio={"A proud part of the Black Cab Agency Network  "}
            designation={"Co-Founder"}
            company={"Secret Sauce Studios- A Black Cab Network Agency "}
            website={"https://radaragency.io/"}
            mobile={"9999234245"}
            gmail={"ujjwal@radaragency.io "}
            instaLink={"https://www.instagram.com/ujjwalsharmma/"}
            watspLink={`https://api.whatsapp.com/send?phone=919999234245`}
            linkedLink={`https://www.linkedin.com/in/ujjwalsh/`}
            profile={`/assets/images/profilePic/Ujjwal Sharma High res.jpg`}
          />
        </div>
      )}
      {/* 8 */}
      {id == "c45748fe-20e5-4cfe-a8c9-4ed0f1061f5a" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Sandesh"}
            lname={"Jha"}
            bio={"A proud part of the Black Cab Agency Network  "}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"8693882326"}
            gmail={"sandesh@m-3.in"}
            instaLink={`https://www.instagram.com/theperpetualdaydreamer/`}
            watspLink={`https://api.whatsapp.com/send?phone=918693882326`}
            linkedLink={`https://www.linkedin.com/in/sandesh-jha-4913261b6/`}
            profile={`/assets/images/profilePic/Sandesh Jha.jpeg`}
          />
        </div>
      )}
      {/* 9 */}
      {id == "3beaf24d-7c8f-47a5-8796-9f8d47706712" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Sidhantha"}
            lname={"Jain"}
            bio={"A proud part of the Black Cab Agency Network "}
            designation={"Co-Founder"}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"8700118994"}
            gmail={"sid@m-3.in"}
            instaLink={`https://www.instagram.com/theperpetualdaydreamer/`}
            watspLink={`https://api.whatsapp.com/send?phone=918700118994`}
            linkedLink={`https://www.linkedin.com/in/sidhantha-jain-a1300b113/`}
            profile={`/assets/images/profilePic/Sidhantha Jain.jpeg`}
          />
        </div>
      )}
      {/* 10 */}
      {id == "64350fc2-7f97-4b54-82e1-82b3f2cfc7ff" && (
        <div>
          <Template
            gradient1={themes[3].gradient1}
            gradient2={themes[3].gradient2}
            text1={themes[2].text1}
            text2={themes[2].text2}
            text3={themes[2].text3}
            btn={themes[2].btn}
            loop={themes[2].loop}
            fname={"Khushi"}
            lname={"Gadhia"}
            bio={"A proud part of the Black Cab Agency Network  "}
            designation={"Executive Assistant "}
            company={"Black Cab"}
            website={"https://blackcab.co.in/"}
            mobile={"9167837466"}
            gmail={"khushi@blackcab.co.in"}
            instaLink={`https://www.instagram.com/khushigadhiaa/`}
            watspLink={`https://api.whatsapp.com/send?phone=919167837466`}
            linkedLink={`https://www.linkedin.com/in/khushigadhia/`}
            profile={`/assets/images/profilePic/Khushi Gadhia.jpeg`}
          />
        </div>
      )}
    </div>
  );
}
