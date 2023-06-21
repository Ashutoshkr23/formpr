"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Template from "@/components/Template";
import BioTemp from "@/components/BioTemp";
import themes from "@/components/TemplateComp/Themes";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const { slug } = router.query;
    // console.log(slug);
    async function fetchContact() {
      try {
        const res = await fetch(`/api/handleFormData?cuuid=${slug}`);
        const data = await res.json();
        console.log(data.card);
        if (data.card !== undefined) {
          setContactData(data.card);
          const cardUuid = data.card.cuuid;
          const userEmail = data.card.mail;
          const sendDataToAPI = { cardUuid, userEmail };
          console.log(sendDataToAPI);
          const settingRemainder = await axios.post(
            "http://localhost:3000/api/setRemainder", sendDataToAPI
          );
          console.log(settingRemainder);
          console.log("2");
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    fetchContact();
  }, [router.query]);

  const [bio, setBio] = useState(contactData && contactData.bio ? contactData.bio : "");
  const [name, setName] = useState(contactData && contactData.name ? contactData.name : "");
  const [role, setRole] = useState(contactData && contactData.role ? contactData.role : "");
  const [companyName, setCompanyName] = useState(contactData && contactData.companyName ? contactData.companyName : "");
  const [companyLink, setCompanyLink] = useState(contactData && contactData.companyLink ? contactData.companyLink : "");
  const [address, setAddress] = useState(contactData && contactData.address ? contactData.address : "");
  const [mobileNumber, setMobileNumber] = useState(contactData && contactData.mobileNumber ? contactData.mobileNumber : "");
  const [profileImg, setProfileImg] = useState(contactData && contactData.profileImg ? contactData.profileImg : "");
  const [selectedTemplate, setSelectedTemplate] = useState(contactData && contactData.selectedTemplate ? contactData.selectedTemplate : "");
  const [cover, setCover] = useState(contactData && contactData.cover ? contactData.cover : "");
  const [behance, setBehance] = useState(contactData && contactData.behance ? contactData.behance : "");
  const [facebook, setFacebook] = useState(contactData && contactData.facebook ? contactData.facebook : "");
  const [instagram, setInstagram] = useState(contactData && contactData.instagram ? contactData.instagram : "");
  const [linkedin, setLinkedin] = useState(contactData && contactData.linkedin ? contactData.linkedin : "");
  const [mail, setMail] = useState(contactData && contactData.mail ? contactData.mail : "");
  const [reddit, setReddit] = useState(contactData && contactData.reddit ? contactData.reddit : "");
  const [twitter, setTwitter] = useState(contactData && contactData.twitter ? contactData.twitter : "");
  const [whatsappNumber, setWhatsappNumber] = useState(contactData && contactData.whatsappNumber ? contactData.whatsappNumber : "");
  const [youtube, setYoutube] = useState(contactData && contactData.youtube ? contactData.youtube : "");
  {/*

                company: company,
                name: name,
                role: role,
                companyLink: companyLink,
                bio: bio,
                address: address,
                mobileNumber: phoneNumber,
                adress: address,
                selectedTemplate: selectedtemplate,
                profileImg: profileImg,
                cover: cover,*/}


  return (
    <div>
      {contactData && (
        <div className="bg-black">
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
            website={contactData.companyLink}
            mobile={contactData.mobileNumber}
            fname={contactData.name}
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
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
