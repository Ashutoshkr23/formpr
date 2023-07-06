import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Template from "@/components/Template";
import themes from "@/components/TemplateComp/Themes";
import axios from "axios";
import Image from "next/image";





export const getStaticPaths = async () => {
    // Fetch the data for all available posts
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/cards`); // Replace with your data-fetching logic

  const cards = await response.json();
   
  // Generate the paths based on the data
  const paths = cards.result?.map((card) => ({
    params: { cardId: card.cuuid.toString() },
  }));

  // Return the paths object
  return {
    paths,
    fallback: false,
  };

  }

  export async function getStaticProps({ params }) {
    // Fetch the data for the specific post using params.slug
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/cards`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cuuid:params.cardId
          })
    }); // Replace with your data-fetching logic
    const data = await response.json();
    // console.log(data,"data")
  
    // Return the post data as props
    return {
      props: {
        card: data.result,
        userData:data.userData
      },
    };
  }
   

const Contact = ({ card,userData  }) => {
  
  const [contactData, setContactData] = useState(null);
  const router = useRouter();

  const [askUserData, setaskUserData] = useState(false)

  const { cardId } = router.query;
  useEffect(() => {
    // console.log(cardId);
    async function fetchContact() {
      console.log("runned")
      try {
        const response = await fetch(`/api/handleFormData?cuuid=${cardId}`);
        const data = await response.json();

        const userPuuid = data.card.puuid;

        const response2 = await fetch(`/api/handleFormData?userPuuid=${userPuuid}`);
        const data2 = await response2.json();

        if (data2.message === "true") {
          setaskUserData(true)
        } else if (data2.message === "false") {
          setaskUserData(false)
          if (data.card !== undefined) {
            setContactData(data.card);
            const cardUuid = data.card.cuuid;
            const userPuuid = data.card.puuid;
            const userEmail = data.card.mail;
            const sendDataToAPI = { cardUuid, userEmail, userPuuid };
            const settingReminder = await axios.post("/api/setReminder", sendDataToAPI);
            console.log(settingReminder);
          }
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }
    if(!card || !userData){
    fetchContact();

    }else{
      setContactData(card);
      setaskUserData(userData.shareContacts)
    }
  }, [cardId]);


  const [userName, setuserName] = useState('');
  const [countactNumber, setcountactNumber] = useState('');

  async function sendUserDataToCardOwnerReminderSection() {

    setaskUserData(false)

    // const response = await fetch(`/api/handleFormData?cuuid=${cardId}`);
    // const data = await response.json();

    // if (data.card !== undefined) {
    //   setContactData(data.card);
    //   const cardUuid = data.card.cuuid;
    //   const userPuuid = data.card.puuid;
    //   const userEmail = data.card.mail;
    //   const sendDataToAPI = { cardUuid, userEmail, userPuuid, userName, countactNumber };
    //   const settingReminder = await axios.post("/api/setReminder", sendDataToAPI);
    //   console.log(settingReminder);
    // }
   
      const cardUuid = contactData.cuuid;
      const userPuuid = contactData.puuid;
      const userEmail = contactData.mail;
      const sendDataToAPI = { cardUuid, userEmail, userPuuid, userName, countactNumber };
      const response = await axios.post("/api/setReminder", sendDataToAPI);
      // console.log(response);
    



  }


  return (
    <div className={`h-screen bg-red-300 bg-gradient-to-b from-blue-300 to-green-300`}>
      {askUserData &&
        <div className="w-[353px] h-[469px] bg-white m-auto text-center capitalize gap-10 flex flex-col justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-3xl">
          <div className="font-bold text-[32px]">stay in touch</div>
          <div className="name-input relative">
            <div className="absolute top-0 left-0 -mt-[11px] ml-[88px] bg-white px-1">name</div>
            <input
              className="border rounded-lg py-2 pl-2"
              type="text"
              value={userName} onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div className="contact-number-input relative">
            <div className="absolute top-0 left-0 -mt-[11px] ml-[88px] bg-white px-1">Phone Number</div>
            <input
              className="border rounded-lg py-2 pl-2"
              type="text"
              value={countactNumber}
              maxLength={13}
              minLength={10}
              //  onChange={(e) => setcountactNumber(e.target.value)}
              onChange={(e) => {
                let input = e.target.value;
                let number = input.replace(/\D/g, "");
                setcountactNumber(number);
              }}
            />
          </div>
          <div className="done-button" onClick={sendUserDataToCardOwnerReminderSection}>
            <button className="bg-black text-white w-[212px] rounded-md py-2 uppercase font-bold">done</button>
          </div>
          <div>
            <div className='text-[10px] flex justify-center gap-2'>
              made with love by
              <Image className='' alt='loop' src={'/assets/images/loop-black.png'} width={36} height={14} />
            </div>
          </div>
        </div>
      }
      {contactData && !askUserData && (
        <div className="h-screen bg-black">
          <Template
            gradient1={contactData.cover}
            gradient2={themes[contactData.selectedTemplate].gradient2}
            text1={themes[contactData.selectedTemplate].text1}
            text2={themes[contactData.selectedTemplate].text2}
            text3={themes[contactData.selectedTemplate].text3}
            btn={themes[contactData.selectedTemplate].btn}
            btntext={themes[contactData.selectedTemplate].btntext}
            type={themes[contactData.selectedTemplate].type}
            loop={themes[contactData.selectedTemplate].loop}
            border={themes[contactData.selectedTemplate].border}
            profileImg={contactData.profileImg}
            cover={contactData.cover}
            company={contactData.companyName}
            bio={contactData.bio}
            website={contactData.companylink}
            mobile={contactData.mobileNumber}
            fname={contactData.name}
            selectedTemplate={contactData.selectedTemplate}
            designation={contactData.role}
            behance={contactData.behance || ""}
            facebook={contactData.facebook || ""}
            instagram={contactData.instagram || ""}
            linkedin={contactData.linkedin || ""}
            mail={contactData.mail || ""}
            reddit={contactData.reddit || ""}
            twitter={contactData.twitter || ""}
            whatsappNumber={contactData.whatsappNumber || ""}
            youtube={contactData.youtube || ""}
            skype={contactData.skype || ""}
            calendly={contactData.calendly || ""}
            pdf={contactData.pdf || ""}
            location={contactData.location}
          />
        </div>
      )}
    </div>
  );
};

export default Contact;


   
 