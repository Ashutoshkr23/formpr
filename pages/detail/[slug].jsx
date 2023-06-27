import React from "react";
import Template from "@/components/Template";
import themes from "@/components/TemplateComp/Themes";
import axios from "axios";
import Image from "next/image";

const Contact = ({ contactData }) => {
    const {
        bio,
        name,
        role,
        companyName,
        companylink,
        address,
        mobileNumber,
        profileImg,
        selectedTemplate,
        cover,
        behance,
        facebook,
        instagram,
        linkedin,
        mail,
        reddit,
        twitter,
        whatsappNumber,
        youtube,
    } = contactData;

    return (
        <div className={`h-screen bg-red-300 bg-gradient-to-b from-blue-300 to-green-300`}>
            {contactData && (
                <div className="h-screen bg-black">
                    <Template
                        gradient1={cover}
                        gradient2={themes[selectedTemplate].gradient2}
                        text1={themes[selectedTemplate].text1}
                        text2={themes[selectedTemplate].text2}
                        text3={themes[selectedTemplate].text3}
                        btn={themes[selectedTemplate].btn}
                        btntext={themes[selectedTemplate].btntext}
                        type={themes[selectedTemplate].type}
                        loop={themes[selectedTemplate].loop}
                        border={themes[selectedTemplate].border}
                        profileImg={profileImg}
                        cover={cover}
                        company={companyName}
                        bio={bio}
                        website={companylink}
                        mobile={mobileNumber}
                        fname={name}
                        designation={role}
                        behance={behance || ""}
                        facebook={facebook || ""}
                        instagram={instagram || ""}
                        linkedin={linkedin || ""}
                        mail={mail || ""}
                        reddit={reddit || ""}
                        twitter={twitter || ""}
                        whatsappNumber={whatsappNumber || ""}
                        youtube={youtube || ""}
                    />
                </div>
            )}
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await fetch(`/api/handleFormData?cuuid=${slug}`);
        const data = await response.json();

        const userPuuid = data.card.puuid;

        const response2 = await fetch(`/api/handleFormData?userPuuid=${userPuuid}`);
        const data2 = await response2.json();

        if (data2.message === "false" && data.card !== undefined) {
            const cardUuid = data.card.cuuid;
            const userPuuid = data.card.puuid;
            const userEmail = data.card.mail;
            const sendDataToAPI = { cardUuid, userEmail, userPuuid };
            const settingRemainder = await axios.post("/api/setRemainder", sendDataToAPI);
            console.log(settingRemainder);

            return {
                props: {
                    contactData: {
                        bio: data.card.bio || "",
                        name: data.card.name || "",
                        role: data.card.role || "",
                        companyName: data.card.companyName || "",
                        companylink: data.card.companylink || "",
                        address: data.card.address || "",
                        mobileNumber: data.card.mobileNumber || "",
                        profileImg: data.card.profileImg || "",
                        selectedTemplate: data.card.selectedTemplate || "",
                        cover: data.card.cover || "",
                        behance: data.card.behance || "",
                        facebook: data.card.facebook || "",
                        instagram: data.card.instagram || "",
                        linkedin: data.card.linkedin || "",
                        mail: data.card.mail || "",
                        reddit: data.card.reddit || "",
                        twitter: data.card.twitter || "",
                        whatsappNumber: data.card.whatsappNumber || "",
                        youtube: data.card.youtube || "",
                    },
                },
            };
        }
    } catch (error) {
        console.error("Error fetching contact:", error);
    }

    return {
        props: {
            contactData: null,
        },
    };
}

export default Contact;
