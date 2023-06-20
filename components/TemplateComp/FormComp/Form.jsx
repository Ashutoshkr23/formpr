import Template from '../Template';
import React, { useState, useEffect, useContext } from 'react'
import themes from '../Themes';
import ChooseTemplates from './ChooseTemplates'
import Details from './Details'
import Socials from './Socials'
import axios from 'axios';
import Cover from './Cover'
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';
import ProfileCompleted from './ProfileCompleted';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ cuuid }) {

    const { userProfile } = useContext(CartContext);
    const [showProfileComplete, setShowProfileComplete] = useState(false);
    const [progress, setProgress] = useState(0);


    const [selectedtemplate, setSelectedTemplate] = useState('0')
    const [cover, setCover] = useState(themes[0].gradient1)
    const [profileImg, setProfileImg] = useState('')
    const [bio, setBio] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const [inputValues, setInputValues] = useState({
        whatsapp: '',
        mail: '',
        linkedin: '',
        instagram: '',
        facebook: '',
        youtube: '',
        twitter: '',
        behance: '',
        reddit: '',

    });



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
        }));
    };




    const [visibleInputs, setVisibleInputs] = useState(['whatsapp', 'mail', 'linkedin']);

    // Function to update the visible inputs
    const handleToggleInput = (inputName) => {
        if (visibleInputs.includes(inputName)) {
            setVisibleInputs(visibleInputs.filter((name) => name !== inputName));
        } else {
            if (visibleInputs.length < 6) {
                setVisibleInputs([...visibleInputs, inputName]);
            }

        }
    };

    useEffect(() => {
        if (selectedtemplate === '0') {
            setCover(themes[0].gradient1);
        } else if (selectedtemplate === '1') {
            setCover(themes[1].gradient1);
        } else if (selectedtemplate === '2') {
            setCover(themes[2].gradient1);
        } else if (selectedtemplate === '3') {
            setCover(themes[3].gradient1);
        } else {
            setCover(themes[0].gradient1); // Set a default value if needed
        }
    }, [selectedtemplate]);



    const handleSaveClick = () => {
        // console.log(name, role, companyLink, bio, address, phoneNumber, selectedtemplate);
    };


    const handleCompanyChange = (value) => {
        setCompany(value);
    };

    const handleNameChange = (value) => {
        setName(value);
    };

    const handleRoleChange = (value) => {
        setRole(value);
    };

    const handleCompanyLinkChange = (value) => {
        setCompanyLink(value);
    };

    const handleBioChange = (value) => {
        setBio(value);
    };

    const handleAddressChange = (value) => {
        setAddress(value);
    };

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const handleClick = async () => {
        if (progress !== 100) {
            toast.error('Please fill all details.'); // Display error toast message
            return;
        }
        try {
            const data = {
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
                cover: cover,
                whatsappNumber: inputValues.whatsapp,
                mail: inputValues.mail,
                linkedin: inputValues.linkedin,
                instagram: inputValues.instagram,
                twitter: inputValues.twitter,
                youtube: inputValues.youtube,
                facebook: inputValues.facebook,
                behance: inputValues.behance,
                reddit: inputValues.reddit,
                puuid: userProfile.puuid,
                cuuid: cuuid
            };
            // console.log(data)

            const response = await axios.post('/api/handleFormData', data);
            if (response.status === 200 && response.data.error === false) {
                setShowProfileComplete(true); // Update the visibility state variable
            }

            // console.log(response.data);
            // Handle response
            // ...
        } catch (error) {
            console.error(error);
        }
    };




    useEffect(() => {
        const calculateProgress = () => {
            let progress = 0;

            // Check selectedtemplate, cover, profileImg, and bio
            if (selectedtemplate) progress += 10;
            if (cover) progress += 10;
            if (profileImg) progress += 10;
            if (bio) progress += 10;

            // Check name, role, company, companyLink, address, and phoneNumber
            if (name) progress += 5;
            if (role) progress += 5;
            if (company) progress += 5;
            if (companyLink) progress += 5;
            if (address) progress += 5;
            if (phoneNumber) progress += 5;

            // Check inputValues
            const inputValuesCount = Object.values(inputValues).filter(value => value !== '').length;
            const inputValuesProgress = Math.min(inputValuesCount, 3) * 10;
            progress += inputValuesProgress;
            return progress;
        };

        const calculatedProgress = calculateProgress();
        setProgress(calculatedProgress);
    }, [selectedtemplate, cover, profileImg, bio, name, role, company, companyLink, address, phoneNumber, inputValues]);

    const innerDivStyle = {
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(to right, #96FFAD, #66D3E1)',
    };



    return (
        <div className="  ">
            {showProfileComplete && <ProfileCompleted />}
            <div className='max-w-[1208px] mx-auto relative' >
                <ToastContainer />
                <div className={`pt-10 sm:px-8 md:px-8 lg:px-4 xl:px-0 ${showProfileComplete ? 'bg-opacity-75 backdrop-filter backdrop-blur-sm' : ''}`}>
                    <div className="max-w-[1208px] mb-7 mx-auto flex lg:justify-between justify-center items-center ">
                        <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
                            <div
                                className={`rounded-lg  font-bold px-10 flex gap-9 flex-grow border-2 border-slate-700 text-black  justify-center items-center `}
                            >
                                <p className="text-center w-60 text-[12px] md:text-sm">
                                    DETAILS AND DESIGN
                                </p>
                                <div className='h-2 w-full bg-[#DFDFDF]'>
                                    <div style={innerDivStyle}></div>
                                </div>
                                <p>  {progress}% </p>
                            </div>
                        </div>
                        <div className="hidden lg:block pl-5">

                            <button
                                className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-black text-white rounded-[10px]"
                                onClick={handleClick}
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-10 lg:hidden pl-2">
                    <button className="w-[350px] shadow-xl h-[55px] bg-black text-white rounded-[10px]">
                        NEXT
                    </button>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-grow flex-col'>
                        <ChooseTemplates
                            selectedTemplate={selectedtemplate}
                            setSelectedTemplate={setSelectedTemplate} />
                        <Cover
                            cover={cover}
                            setCover={setCover} />
                        <Details
                            profileImg={profileImg}
                            setProfileImg={setProfileImg}
                            onCompanyChange={handleCompanyChange}
                            onNameChange={handleNameChange}
                            bio={bio}
                            onRoleChange={handleRoleChange}
                            onCompanyLinkChange={handleCompanyLinkChange}
                            onBioChange={handleBioChange}
                            onAddressChange={handleAddressChange}
                            onPhoneNumberChange={handlePhoneNumberChange} />
                        <Socials
                            inputValues={inputValues} handleInputChange={handleInputChange}
                            visibleInputs={visibleInputs}
                            setVisibleInputs={setVisibleInputs}
                            onToggleInput={handleToggleInput} />
                    </div>
                    <div className='w-[350px] xl:w-[390px]  flex justify-center relative'>
                        <div className='sticky top-0 h-[820px]'>
                            {selectedtemplate &&
                                <Template
                                    gradient1={cover}
                                    gradient2={themes[selectedtemplate].gradient2}
                                    text1={themes[selectedtemplate].text1}
                                    text2={themes[selectedtemplate].text2}
                                    text3={themes[selectedtemplate].text3}
                                    btn={themes[selectedtemplate].btn}
                                    btntext={themes[selectedtemplate].btntext}
                                    type={themes[selectedtemplate].type}
                                    loop={themes[selectedtemplate].loop}
                                    border={themes[selectedtemplate].border}
                                    inputValues={inputValues}
                                    visibleInputs={visibleInputs}
                                    profileImg={profileImg || '/assets/images/templateimg/andrew.png'}
                                    company={company}
                                    bio={bio}
                                    website={companyLink}
                                    mobile={phoneNumber}
                                    fname={name}
                                    designation={role}
                                />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
