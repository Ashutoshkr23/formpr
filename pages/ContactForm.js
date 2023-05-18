import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Template from '@/components/Template';




const ContactForm = () => {


  const [uuid, setUuid] = useState(null);
  const [cardUuid, setCardUuid] = useState(null);
  const { data: session } = useSession();

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
    template: '1',
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
      const data = { ...values, uuid, cardUuid };
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
            <Form className="w-full max-w-md">
              {step === 1 && (
              <div className='flex'>
              <div>              
                <div className="mb-4 mt-4">
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                  First Name:
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}

                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                /><p>First Name: {values.firstName}</p>

                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}

                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">
                    Mobile Number:
                  </label>
                  <Field
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="mobileNumber" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="companyNumber" className="block text-gray-700 font-bold mb-2">
                    Company Number:
                  </label>
                  <Field
                    type="text"
                    id="companyNumber"
                    name="companyNumber"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="companyNumber" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">
                    designation:
                  </label>
                  <Field
                    type="designation"
                    id="designation"
                    name="designation"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="designation" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="companyLogo" className="block text-gray-700 font-bold mb-2">
                    Company Logo:
                  </label>
                  <Field
                    type="text"
                    id="companyLogo"
                    name="companyLogo"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
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
                  <label htmlFor="deck" className="block text-gray-700 font-bold mb-2">Deck:</label>
                  <Field
                    type="text"
                    id="deck"
                    name="deck"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


                  />
                  <ErrorMessage name="deck" component="div" className="error" />
                </div>

                <div className="mb-4">
                  <label htmlFor="website" className="block text-gray-700 font-bold mb-2">
                    website:
                  </label>
                  <Field
                    type="text"
                    id="website"
                    name="website"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="website" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                  <label htmlFor="whatsapp" className="block text-gray-700 font-bold mb-2">
                    whatsapp:
                  </label>
                  <Field
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="whatsapp" component="div" className="text-red-500" />
                </div>


                <div className="mb-4">
                  <label htmlFor="linkedIn" className="block text-gray-700 font-bold mb-2">
                    linkedIn:
                  </label>
                  <Field
                    type="text"
                    id="linkedIn"
                    name="linkedIn"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="linkedIn" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                  <label htmlFor="Instagram" className="block text-gray-700 font-bold mb-2">
                    Instagram:
                  </label>
                  <Field
                    type="text"
                    id="Instagram"
                    name="Instagram"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="Instagram" component="div" className="text-red-500" />
                </div>


                <div className="mb-4">
                  <label htmlFor="facebook" className="block text-gray-700 font-bold mb-2">
                    facebook:
                  </label>
                  <Field
                    type="text"
                    id="facebook"
                    name="facebook"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="facebook" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                  <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
                    bio:
                  </label>
                  <Field
                    type="text"
                    id="bio"
                    name="bio"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="bio" component="div" className="text-red-500" />
                </div>


                <div className="mb-4">

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setStep(2)}>
                    Next
                  </button>

                </div></div>
              <div><Template fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} /></div>

              </div>
              
              )}
              {step === 2 && (
                <div>

                  <div id="template-select" role="group" className='flex flex-col'>
                    <legend className='text-3xl'>Select a Template</legend>
                    <div className='flex'>    
                      <label>
                      <Template fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} />
                      <Field type="radio" name="template" value="1" />
                    </label>
                      <label>
                        <Template fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} />
                        <Field type="radio" name="template" value="2" />
                      </label>
                      </div>
                    <div className='flex'>                   
                       <label>
                      <Template fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} />
                        <Field type="radio" name="template" value="3" />
                    </label>
                      <label>
                        <Template fname={values.firstName} lname={values.lastName} bio={values.bio} designation={values.designation} company={values.companyLogo} website={values.website} mobile={values.mobileNumber} />
                        <Field type="radio" name="template" value="4" />
                      </label>
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
