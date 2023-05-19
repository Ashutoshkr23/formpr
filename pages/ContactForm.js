import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Template from '@/components/Template';
import themes from '@/components/Themes';
import ProgressBar from '@/components/ProgressBar';
import LoginNav from '@/components/landing/LoginNav';




const ContactForm = ({ values }) => {


  const [uuid, setUuid] = useState(null);
  const [cardUuid, setCardUuid] = useState(null);
  const { data: session } = useSession();
  const [template, setSelectedTemplate] = useState(1);

  const handleTemplateChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedTemplate(value);
    console.log('Current template:', value);
  };
  const initialValues = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    companyNumber: '',
    email: '',
    designation: '',
    companyLogo: '',
    deck: '',
    website: '',
    whatsapp: '',
    linkedIn: '',
    Instagram: '',
    facebook: '',
    bio: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    mobileNumber: Yup.number().required('Mobile number is required'),
    companyNumber: Yup.number().required('Company number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    designation: Yup.string().required('designation is required'),
    companyLogo: Yup.string().required('Company logo is required'),
    deck: Yup.string().required('deck is required'),
    website: Yup.string().required(' website is required'),
    whatsapp: Yup.string().required('whatsapp is required'),
    linkedIn: Yup.string().required('linkedIn is required'),
    Instagram: Yup.string().required(' Instagram is required'),
    facebook: Yup.string().required('facebook is required'),
    bio: Yup.string().required('bio is required'),

  });


  const fetchUuid = async () => {
    try {
      const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
      console.log('email:', session.user.email);
      console.log('uuid:', response.data.uuid);
      setUuid(response.data.uuid);



    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUuid();
  }, [session]);

  const fetchCard = async () => {
    try {
      const response = await axios.get(`/api/purchase?email=${session.user.email}`);
      console.log('email:', session.user.email);
      console.log('cardUuid:', response.data.cardUuid);
      setCardUuid(response.data.cardUuid);



    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCard();
  }, [session]);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const data = { ...values,template, uuid, cardUuid };
      const response = await axios.post('/api/contact', data);
      console.log(response.data.message);

      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const [step, setStep] = useState(1);

  
  return (
    <div className="flex ">

      {cardUuid ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}

          onSubmit={onSubmit}
        >

          {({ isSubmitting, setFieldValue, values, handleChange }) => (
            <Form className="w-full ">
              <ProgressBar step={step}/>

              {step === 1 && (
                <div className='flex'>
                  <div className='w-3/5 ml-2 sm:ml-8 md:ml-16 lg:ml-20'>
                    <div className="mb-4 mt-4 ">
                      <div className='flex'>
                        <label htmlFor="firstName" className=" text-gray-700 font-bold mb-2 w-60">
                          First Name:
                        </label>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          onChange={handleChange}

                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <ErrorMessage name="firstName" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                      <div className='flex'>
                      <label htmlFor="lastName" className=" text-gray-700 font-bold w-60 mb-2 ">
                        Last Name:
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}

                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="lastName" component="div" className="text-red-500" />
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
                      <label htmlFor="companyLogo" className="block text-gray-700 font-bold w-60 mb-2">
                        Company Logo:
                      </label>
                      <Field
                        type="text"
                        id="companyLogo"
                        name="companyLogo"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="companyLogo" component="div" className="text-red-500" />
                    </div>

                    <Field name="logo">
                      {({ }) => (
                        <div>
                          <input
                            type="file"
                            onChange={(event) => {
                              setFieldValue('logo', event.currentTarget.files[0]);
                            }}
                          />
                        </div>
                      )}
                    </Field>

                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="deck" className="block text-gray-700 font-bold w-60 mb-2">Deck:</label>
                      <Field
                        type="text"
                        id="deck"
                        name="deck"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


                      />
                      </div>
                      <ErrorMessage name="deck" component="div" className="error" />
                    </div>

                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="website" className="block text-gray-700 font-bold w-60 mb-2">
                        website:
                      </label>
                      <Field
                        type="text"
                        id="website"
                        name="website"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="website" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="whatsapp" className="block text-gray-700 font-bold w-60 mb-2">
                        whatsapp:
                      </label>
                      <Field
                        type="text"
                        id="whatsapp"
                        name="whatsapp"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="whatsapp" component="div" className="text-red-500" />
                    </div>


                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="linkedIn" className="block text-gray-700 font-bold w-60 mb-2">
                        linkedIn:
                      </label>
                      <Field
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="linkedIn" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="Instagram" className="block text-gray-700 font-bold w-60 mb-2">
                        Instagram:
                      </label>
                      <Field
                        type="text"
                        id="Instagram"
                        name="Instagram"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="Instagram" component="div" className="text-red-500" />
                    </div>


                    <div className="mb-4">
                      <div className="flex">
                      <label htmlFor="facebook" className="block text-gray-700 font-bold w-60 mb-2">
                        facebook:
                      </label>
                      <Field
                        type="text"
                        id="facebook"
                        name="facebook"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      </div>
                      <ErrorMessage name="facebook" component="div" className="text-red-500" />
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

                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setStep(2)}>
                        Next
                      </button>

                    </div></div>
                  <div className='min-w-[375px] w-2/5'>
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

              )}
              {step === 2 && (
                                       

                <div>

                  <div id="template-select" role="group" className='flex flex-col'>
                    <legend className='text-3xl'>Select a Template</legend>
                    <div className='flex'>
                      {themes.map((theme,index) => (
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
                          <Field type="radio" name="template" value={index+1}  checked={template === index + 1}
            onChange={handleTemplateChange}   className="mr-2 border-gray-300 checked:bg-indigo-500 w-6 h-6"
            />

                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-around'>
                    <div><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setStep(1)}>
                      Previous
                    </button></div>
                    <div><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      type="submit" disabled={isSubmitting}>
                      Submit
                    </button></div>

                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      ) : (
        <p>Please Buy the Card</p>
      )}
    </div>
  );
};

export default ContactForm;     