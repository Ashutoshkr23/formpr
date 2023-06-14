import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { useState, useEffect, useContext } from 'react';
import Template from '@/components/Template';
import themes from '@/components/Themes';
import ProgressBar from '@/components/ProgressBar';
import LoginNav from '@/components/landing/LandingNav';
import { CartContext } from '@/context/CartContext';




const ContactForm = ({ cuuid }) => {


  const { data: session } = useSession();
  const { userProfile } = useContext(CartContext);
  const [template, setSelectedTemplate] = useState(1);
  const [step, setStep] = useState(1);


  const handleTemplateChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedTemplate(value);
  };


  const initialValues = {
    fullName: '',
    cardName: '',
    mobileNumber: '',
    profilePicture: "",
    companyName: '',
    companyNumber: '',
    companyLogo: "",
    email: '',
    designation: '',
    deck: '',
    website: '',
    whatsapp: '',
    linkedIn: '',
    Instagram: '',
    facebook: '',
    bio: '',
  };


  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    cardName: Yup.string().required('Card name is required'),
    mobileNumber: Yup.number().required('Mobile number is required'),
    profilePicture: Yup.mixed().required('Image is required').test('fileSize',
      'File size should be less than 5MB',
      (value) => value && value.size <= 1024 * 1024 * 6
    ).test(
      'fileType',
      'Only JPEG and PNG images are allowed',
      (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
    companyName: Yup.string().required('Company name is required'),
    companyNumber: Yup.number().required('Company number is required'),
    companyLogo: Yup.mixed().required('Image is required').test('fileSize',
      'File size should be less than 5MB',
      (value) => value && value.size <= 1024 * 1024 * 6
    ).test(
      'fileType',
      'Only JPEG and PNG images are allowed',
      (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    designation: Yup.string().required('designation is required'),
    bio: Yup.string().required('bio is required'),
    websiteUrl: Yup.string().required(' website is required'),
    instagramUrl: Yup.string().required(' Instagram is required'),
    whatsappUrl: Yup.string().required('whatsapp is required'),
    linkedinUrl: Yup.string().required('linkedIn is required'),
    facebookUrl: Yup.string().required('facebook is required'),
    deckUrl: Yup.string().required('deck is required'),
  });

  
  const onSubmit = async (values, { resetForm }) => {
    try {
      const data = { ...values };
      let formData = new FormData()

      for (let x in data) {
        formData.append(x, data[x])
      }
      formData.append("puuid", userProfile.puuid)
      formData.append("cuuid", cuuid)
      // for now this is demo themeid it should be coming from form
      formData.append("themeId", "7384c851-741b-489f-b384-e9f7ee36470a")
      const response = await axios.post('/api/handleFormData', formData);

      // resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex ">

      {cuuid ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}

          onSubmit={onSubmit}
        >

          {({ isSubmitting, setFieldValue, values, handleChange }) => (
            <Form className="w-full ">
              <ProgressBar step={step} />

              {step === 1 && (
                <div className='flex flex-col'>
                  <div className='flex flex-col md:flex-row'>
                    <div className='w-full px-2 md:w-3/5  sm:px-8 md:ml-16 lg:ml-20'>
                      <div className="mb-4 mt-4 ">
                        <div className='flex'>
                          <label htmlFor="fullName" className=" text-gray-700 font-bold mb-2 w-60">
                            Full Name:
                          </label>
                          <Field
                            type="text"
                            id="fullName"
                            name="fullName"
                            onChange={handleChange}

                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="fullName" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className='flex'>
                          <label htmlFor="cardName" className=" text-gray-700 font-bold w-60 mb-2 ">
                            Card Name:
                          </label>
                          <Field
                            type="text"
                            id="cardName"
                            name="cardName"
                            onChange={handleChange}

                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="cardName" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="mobileNumber" className="block text-gray-700 font-bold w-60 mb-2">
                            Mobile Number:
                          </label>
                          <Field
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="mobileNumber" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="profilePicture" className="block text-gray-700 font-bold w-60 mb-2">
                            Profile Picture:
                          </label>
                          <Field name="profilePicture">
                            {({ }) => (
                              <div>
                                <input
                                  type="file"
                                  onChange={(event) => {
                                    setFieldValue('profilePicture', event.currentTarget.files[0]);
                                  }}
                                />
                              </div>
                            )}
                          </Field>
                        </div>
                        <ErrorMessage name="profilePicture" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className='flex'>
                          <label htmlFor="companyName" className=" text-gray-700 font-bold w-60 mb-2 ">
                            Company Name:
                          </label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            onChange={handleChange}

                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="companyName" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="companyNumber" className="block text-gray-700 font-bold w-60 mb-2">
                            Company Number:
                          </label>
                          <Field
                            type="text"
                            id="companyNumber"
                            name="companyNumber"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="companyNumber" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="companyLogo" className="block text-gray-700 font-bold w-60 mb-2">
                            Company Logo:
                          </label>
                          {/* <Field
                            type="text"
                            id="companyLogo"
                            name="companyLogo"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          /> */}
                          <Field name="companyLogo">
                            {({ }) => (
                              <div>
                                <input
                                  type="file"
                                  onChange={(event) => {
                                    setFieldValue('companyLogo', event.currentTarget.files[0]);
                                  }}
                                />
                              </div>
                            )}
                          </Field>
                        </div>
                        <ErrorMessage name="companyLogo" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="email" className="block text-gray-700 font-bold w-60 mb-2">
                            Email:
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="designation" className="block text-gray-700 font-bold w-60 mb-2">
                            designation:
                          </label>
                          <Field
                            type="designation"
                            id="designation"
                            name="designation"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="designation" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="bio" className="block text-gray-700 font-bold w-60 mb-2">
                            bio:
                          </label>
                          <Field
                            type="text"
                            id="bio"
                            name="bio"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="bio" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="websiteUrl" className="block text-gray-700 font-bold w-60 mb-2">
                            website:
                          </label>
                          <Field
                            type="text"
                            id="websiteUrl"
                            name="websiteUrl"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="websiteUrl" component="div" className="text-red-500" />
                      </div>

                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="instagramUrl" className="block text-gray-700 font-bold w-60 mb-2">
                            Instagram:
                          </label>
                          <Field
                            type="text"
                            id="instagramUrl"
                            name="instagramUrl"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="instagramUrl" component="div" className="text-red-500" />
                      </div>

                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="whatsappUrl" className="block text-gray-700 font-bold w-60 mb-2">
                            whatsapp:
                          </label>
                          <Field
                            type="text"
                            id="whatsappUrl"
                            name="whatsappUrl"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="whatsappUrl" component="div" className="text-red-500" />
                      </div>

                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="linkedinUrl" className="block text-gray-700 font-bold w-60 mb-2">
                            linkedIn:
                          </label>
                          <Field
                            type="text"
                            id="linkedinUrl"
                            name="linkedinUrl"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="linkedinUrl" component="div" className="text-red-500" />
                      </div>




                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="facebookUrl" className="block text-gray-700 font-bold w-60 mb-2">
                            facebook:
                          </label>
                          <Field
                            type="text"
                            id="facebookUrl"
                            name="facebookUrl"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <ErrorMessage name="facebookUrl" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <div className="flex">
                          <label htmlFor="deckUrl" className="block text-gray-700 font-bold w-60 mb-2">Deck:</label>
                          <Field
                            type="text"
                            id="deckUrl"
                            name="deckUrl"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


                          />
                        </div>
                        <ErrorMessage name="deckUrl" component="div" className="error" />
                      </div>



                    </div>
                    <div className='min-w-[375px]  flex ml-4'>
                      <Template
                        gradient1={themes[0].gradient1}
                        gradient2={themes[0].gradient2}
                        text1={themes[0].text1}
                        text2={themes[0].text2}
                        text3={themes[0].text3}
                        btn={themes[0].btn}
                        loop={themes[0].loop}
                        fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} /></div>

                  </div>


                  <div className="mb-4 mt-2 ml-2">

                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setStep(2)}>
                      Next
                    </button>
                    <button className="bg-green-500 mx-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      type="submit" >
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {step === 2 && (

                //  flex justify-center lg:justify-start lg:space-x-3 flex-wrap lg:flex-nowrap  lg:flex-shrink-0 
                <div>

                  <div id="template-select" role="group" className='flex flex-col'>
                    <legend className='text-3xl flex justify-center'>Select a Template</legend>
                    <div className='flex flex-wrap justify-center space-x-2 xl:space-x-5'>
                      {themes.map((theme, index) => (
                        <div key={theme.id}>
                          <label>
                            <Template
                              gradient1={theme.gradient1}
                              gradient2={theme.gradient2}
                              text1={theme.text1}
                              text2={theme.text2}
                              text3={theme.text3}
                              btn={theme.btn}
                              loop={theme.loop}
                              fname={values.firstName}
                              lname={values.lastName}
                              bio={values.bio}
                              designation={values.designation}
                              company={values.companyLogo}
                              website={values.website}
                              mobile={values.mobileNumber}
                            />
                          </label>
                          <div className="flex justify-center pt-2">
                            <Field type="radio" name="template" value={index + 1} checked={template === index + 1}
                              onChange={handleTemplateChange} className=" mr-2 border-gray-300 checked:bg-indigo-500 w-6 h-6"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-around py-3'>
                    <div><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setStep(1)}>
                      Previous
                    </button></div>
                    <div>
                      {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      type="submit" disabled={isSubmitting}>
                      Submit
                    </button> */}
                    </div>

                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      ) : (
        <p>No Card found</p>
      )}
    </div>
  );
};

export default ContactForm;     