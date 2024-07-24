// validation.ts
import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  companyName: yup.string(),
  country: yup.string().required('Country is required'),
  streetAdres: yup.string().required('Street address is required'),
  city: yup.string().required('City is required'),
  province: yup.string().required('Province is required'),
  zipCode: yup.string().required('ZIP code is required'),
  phone: yup.string().required('Phone number is required'),
  emailAddres: yup.string().email('Invalid email').required('Email address is required'),
  information: yup.string(),
});
