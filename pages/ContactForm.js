import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
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
    mobileNumber: Yup.string().required('Mobile number is required'),
    companyNumber: Yup.string().required('Company number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    companyLogo: Yup.string().required('Company logo is required'),
    deck: Yup.string().required('Deck is required'),
    });
    const onSubmit = async (values, { resetForm }) => {
        try {
          const response = await axios.post('/api/contact', values);
          console.log(response.data.message);
          resetForm();
        } catch (error) {
          console.error(error);
        }
      };
     
      return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <Field type="text" id="mobileNumber" name="mobileNumber" />
                <ErrorMessage name="mobileNumber" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="companyNumber">Company Number:</label>
                <Field type="text" id="companyNumber" name="companyNumber" />
                <ErrorMessage name="companyNumber" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="companyLogo">Company Logo:</label>
                <Field type="text" id="companyLogo" name="companyLogo" />
                <ErrorMessage name="companyLogo" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="deck">Deck:</label>
                <Field type="text" id="deck" name="deck" />
                <ErrorMessage name="deck" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      );
    };

    export default ContactForm;     
