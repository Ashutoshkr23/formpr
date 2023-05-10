import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { useState,useEffect } from 'react';




const ContactForm = () => {

  const [uuid, setUuid] = useState(null);
  const [cardUuid,setCardUuid] = useState(null);
  const { data: session } = useSession();

  const initialValues = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    companyNumber: '',
    email: '',
    companyLogo: '',
    deck: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    mobileNumber: Yup.number().required('Mobile number is required'),
    companyNumber: Yup.number().required('Company number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    companyLogo: Yup.string().required('Company logo is required'),
    deck: Yup.string().required('Deck is required'),
    });


    const fetchUuid = async () => {
      try {
        const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
        console.log('email:', session.user.email);
        console.log('uuid:', response.data.uuid);
        setUuid(response.data.uuid);
      // const email=session.user.email;
      //  setTimeout(function(){
      //   console.log(uuid)

      //   console.log(email)
      //  },4000)
       

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
        const data = { ...values, uuid };
        const response = await axios.post('/api/contact', data);
        console.log(response.data.message);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    };
    
    

     
      return (
        <div className="flex justify-center">
        {cardUuid ?  (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting ,setFieldValue}) => (
              <Form className="w-full max-w-md">
                <div className="mb-4 mt-4">
                  <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
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
                  <label htmlFor="companyLogo" className="block text-gray-700 font-bold mb-2">
                    Company Logo:
                  </label>
                  <Field
                    type="text"
                    id="companyLogo"
                    name="companyLogo"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="companyLogo" component="div" className="text-red-500" />
                </div>
                
                <Field name="logo">
            {({ Field }) => (
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

              <button   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
 type="submit" disabled={isSubmitting}>
                Submit
              </button>
              </div>
            </Form>
          )}
        </Formik>):(
<p>Please Buy the Card</p>
        )}
        </div>
      );
    };

    export default ContactForm;     
