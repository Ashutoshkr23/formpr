import Template from '../Template';
import React , {useState , useEffect ,useContext} from 'react'
import themes from '../Themes';
import ChooseTemplates from './ChooseTemplates'
import Details from './Details'
import Socials from './Socials'
import axios from 'axios';
import Cover from './Cover'
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';

function Form({ cuuid }) {
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedtemplate , setSelectedTemplate] = useState('0')
    const [profileImg, setProfileImg] = useState('/assets/images/templateimg/andrew.png')
    const [cover, setCover] = useState(themes[0].gradient1)
    const theme = themes[selectedtemplate];
    const { userProfile } = useContext(CartContext);

    const [inputValues, setInputValues] = useState({
        whatsapp: '',
        mail: '',
        linkedin: '',
        instagram: '',
        facebook: '',
        youtube: '',
        twitter: '', 
        behance:'',
        reddit:'',

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
        } else  {
            setCover(themes[0].gradient1); // Set a default value if needed
        }
    }, [selectedtemplate]);

    

    const handleSaveClick = () => {
        console.log(name,role,companyLink,bio,address,phoneNumber,selectedtemplate);
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
        try {
            const formData = new FormData();

            formData.append('company', company);
            console.log('company:', company);

            formData.append('name', name);
            console.log('name:', name);

            formData.append('role', role);
            console.log('role:', role);

            formData.append('companyLink', companyLink);
            console.log('companyLink:', companyLink);

            formData.append('bio', bio);
            console.log('bio:', bio);

            formData.append('address', address);
            console.log('address:', address);

            formData.append('mobileNumber', phoneNumber);
            console.log('mobileNumber:', phoneNumber);

            formData.append('selectedTemplate', selectedtemplate);
            console.log('selectedTemplate:', selectedtemplate);

            formData.append('profileImg', profileImg);
            console.log('profileImg:', profileImg);

            formData.append('whatsappNumber', inputValues.whatsapp);
            console.log('whatsappNumber:', inputValues.whatsapp);

            formData.append('mail', inputValues.mail);
            console.log('mail:', inputValues.mail);

            formData.append('linkedin', inputValues.linkedin);
            console.log('linkedin:', inputValues.linkedin);

            formData.append('instagram', inputValues.instagram);
            console.log('instagram:', inputValues.instagram);

            formData.append('twitter', inputValues.twitter);
            console.log('twitter:', inputValues.twitter);

            formData.append('youtube', inputValues.youtube);
            console.log('youtube:', inputValues.youtube);

            formData.append('facebook', inputValues.facebook);
            console.log('facebook:', inputValues.facebook);

            formData.append('behance', inputValues.behance);
            console.log('behance:', inputValues.behance);

            formData.append('reddit', inputValues.reddit);
            console.log('reddit:', inputValues.reddit);

            // Append inputValues
            for (const key in inputValues) {
                if (inputValues.hasOwnProperty(key)) {
                    formData.append(key, inputValues[key]);
                    console.log(key + ':', inputValues[key]);
                }
            }

            // Append additional data if needed
            formData.append('puuid', userProfile.puuid);
            console.log('puuid:', userProfile.puuid);

            formData.append('cuuid', cuuid);
            console.log('cuuid:', cuuid);

            const response = await axios.post('/api/handleFormData', formData);
            console.log('Response:', response.data);

            // Handle response
            // ...
        } catch (error) {
            console.error(error);
        }
    };




  return (
    <div>
          <div className="sm:px-8 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto ">
              <div className="pt-10">
                  <div className="max-w-[1208px] mb-7 mx-auto flex lg:justify-between justify-center items-center ">
                      <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
                          <div
                              className={`rounded-lg  font-bold flex flex-grow border-2 border-slate-700 text-black  justify-center items-center `}
                          >
                              <p className="text-center text-[12px] md:text-sm">
                                  DETAILS AND DESIGN
                              </p>
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
                      setCover={setCover}/>
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
                  <div className='w-[350px] xl:w-[390px]  flex justify-center'>
                    <div className='relative'>
                          <Image src="/assets/images/templateimg/Mobile-border.png" width={331} height={665}/>
                          <div className='absolute top-1 right-1'> 

                          </div>
                    </div>
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
                              profileImg={profileImg}
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
  )
}

export default Form
