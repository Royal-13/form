export default function validateInfo(values) {
  let errors = {};

  if (!values.fullname.trim()) {
    errors.fullname = 'FullName required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Phone number is required';
  } else if (values.phonenumber.length > 10 || values.phonenumber.length < 10 ) {
    errors.phonenumber = 'Phone number must be equal to 10';
  }
  return errors;
}
