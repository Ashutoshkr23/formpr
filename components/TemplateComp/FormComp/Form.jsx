import Template from '@/components/Template';
import React , {useState} from 'react'
import TemplateDetails from './TemplateDetails';
import TemplateDesign from './TemplateDesign';
import themes from '@/components/Themes';

function Form() {
    const [stepState, setStepState] = useState(1);
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');


    const handleButtonClick = () => {
        setStepState(2);
    };

    const handleSaveClick = () => {
        console.log('Hi');
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


  return (
    <div>
          <div className="sm:px-8 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto ">
              <div className="pt-10">
                  <div className="max-w-[1208px] mb-7 mx-auto flex lg:justify-between justify-center items-center ">
                      <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
                          <div
                              className={`rounded-lg text-[#686A6C] font-bold w-2/3 ${stepState == 1 && "border-2 border-slate-700 text-black"
                                  } flex justify-center items-center `}
                              onClick={() => setStepState(1)}
                          >
                              <p className="text-center text-[12px] md:text-sm">
                                  STEP 1 : CARD TYPE & QTY.
                              </p>
                          </div>
                          <div
                              className={`rounded-lg text-[#686A6C] font-bold  w-2/3 ${stepState == 2 && "border-2 border-slate-700 text-black"
                                  } flex justify-center items-center `}
                              onClick={() => setStepState(2)}
                          >
                              <p className="text-center text-[12px] md:text-sm">
                                  STEP 2 : DETAILS
                              </p>
                          </div>
                      </div>
                      <div className="hidden lg:block pl-5">
                          {stepState === 1 ? (
                              <button
                                  className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-black text-white rounded-[10px] disabled:cursor-not-allowed"
                                  onClick={handleButtonClick}
                              >
                                  NEXT
                              </button>
                          ) : (
                              <button
                                  className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-black text-white rounded-[10px]"
                                  onClick={handleSaveClick}
                              >
                                  SAVE
                              </button>
                          )}
                      </div>
                  </div>
              </div>
              <div className="flex justify-center pt-10 lg:hidden pl-2">
                  <button className="w-[350px] shadow-xl h-[55px] bg-black text-white rounded-[10px]">
                      NEXT
                  </button>
              </div>
              <div className='flex gap-5'>
                <div className='flex flex-grow'>
                      {stepState === 1 && <TemplateDetails 
                      onCompanyChange={handleCompanyChange} 
                      onNameChange={handleNameChange} 
                      onRoleChange={handleRoleChange} 
                      onCompanyLinkChange={handleCompanyLinkChange} 
                      onBioChange={handleBioChange}
                      onAddressChange={handleAddressChange}
                      onPhoneNumberChange={handlePhoneNumberChange}
                      />}
                      {stepState === 2 && <TemplateDesign/>}
                </div>
                  <div className='w-[350px] xl:w-[390px]  flex justify-center'>
                    <Template
                          gradient1={themes[0].gradient1}
                          gradient2={themes[0].gradient2}
                          text1={themes[0].text1}
                          text2={themes[0].text2}
                          text3={themes[0].text3}
                          btn={themes[0].btn}
                          loop={themes[0].loop}
                          company={company}
                          bio={bio}
                          website={companyLink}
                          mobile={phoneNumber}
                          fname={name}
                          designation={role}
                        />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Form
