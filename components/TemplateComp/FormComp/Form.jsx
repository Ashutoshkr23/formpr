import Template from '../Template';
import React , {useState} from 'react'
import themes from '@/components/Themes';
import ChooseTemplates from './ChooseTemplates'
import Details from './Details'
import Socials from './Socials'
import Cover from './Cover'
import Image from 'next/image';

function Form() {
   
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [selectedtemplate , setSelectedTemplate] = useState('1')
    const theme = themes[selectedtemplate];

   

    

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

    const handleLocationChange = (value) => {
        setLocation(value);
    };

    console.log({themes})


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
                                  onClick={handleSaveClick}
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
                      <Cover />
                      <Details
                          onCompanyChange={handleCompanyChange}
                          onNameChange={handleNameChange}
                          onRoleChange={handleRoleChange}
                          onCompanyLinkChange={handleCompanyLinkChange}
                          onBioChange={handleBioChange}
                          onAddressChange={handleAddressChange}
                          onPhoneNumberChange={handlePhoneNumberChange} />
                </div>
                  <div className='w-[350px] xl:w-[390px]  flex justify-center'>
                    <div className='relative'>
                          <Image src="/assets/images/templateimg/Mobile-border.png" width={331} height={665}/>
                          <div className='absolute top-1 right-1'> 

                          </div>
                    </div>
                      {selectedtemplate === '1' && 
                          <Template
                              gradient1={themes[0].gradient1}
                              gradient2={themes[0].gradient2}
                              text1={themes[0].text1}
                              text2={themes[0].text2}
                              text3={themes[0].text3}
                              btn={themes[0].btn}
                              btntext={themes[0].btntext}
                              type={themes[0].type}
                              loop={themes[0].loop}
                              company={company}
                              bio={bio}
                              website={companyLink}
                              mobile={phoneNumber}
                              fname={name}
                              designation={role}
                          />}
                      {selectedtemplate === '2' &&
                          <Template
                              gradient1={themes[1].gradient1}
                              gradient2={themes[1].gradient2}
                              text1={themes[1].text1}
                              text2={themes[1].text2}
                              text3={themes[1].text3}
                              btn={themes[1].btn}
                              btntext={themes[1].btntext}
                              type={themes[1].type}
                              loop={themes[1].loop}
                              company={company}
                              bio={bio}
                              website={companyLink}
                              mobile={phoneNumber}
                              fname={name}
                              designation={role}
                          />}
                      {selectedtemplate === '4' && 
                          <Template
                              gradient1={themes[2].gradient1}
                              gradient2={themes[2].gradient2}
                              text1={themes[2].text1}
                              text2={themes[2].text2}
                              text3={themes[2].text3}
                              btn={themes[2].btn}
                              btntext={themes[2].btntext}
                              type={themes[2].type}
                              loop={themes[2].loop}
                              company={company}
                              bio={bio}
                              website={companyLink}
                              mobile={phoneNumber}
                              fname={name}
                              designation={role}
                          />}
                      {selectedtemplate === '3' && 
                          <Template
                              gradient1={themes[3].gradient1}
                              gradient2={themes[3].gradient2}
                              text1={themes[3].text1}
                              text2={themes[3].text2}
                              text3={themes[3].text3}
                              btn={themes[3].btn}
                              type={themes[3].type}
                              btntext={themes[3].btntext}
                              loop={themes[3].loop}
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
