import * as yup from 'yup';

let signupschema = yup.object().shape({
  firstname:
    yup.string()
      .required()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(20, 'maximum 20 letters are allowed'),

  lastname:
    yup.string()
      .required()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(20, 'maximum 20 letters are allowed'),
      
  designation
    : yup.string()
      .required()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

  yearofexperience
    : yup.string()
      .required()
      .matches(/^\d+$/, 'The field should have digits only'),

  email:
    yup.string()
      .email()
      .required(),

  phonenumber
    : yup.string()
      .required()
      .matches(/^\d+$/, 'The field should have digits only')
      .min(10, 'please input valid number')
      .max(10, 'please input valid number'),
})

export default signupschema;