function validateName(values, errors) {
  if (!values.name) {
    errors.push("Name is required");
  } else if (values.name.length < 2) {
    errors.push("First name must be 2 or more characters");
  } else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.push("Name can only contain alphabetic characters, and spaces");
  } else if (/^\s|\s$/.test(values.name)) {
    errors.push("Name cannot start or end with a space");
  }
}

function validateEmail(values, errors) {
  console.log(values.email.length);
  values.email = values.email.trim();
  console.log(values.email.length);
  if (!values.email) {
    errors.push("Email address is required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.push("Email address is invalid");
  } else if (values.email.length < 8) {
    errors.push("Invalid email address");
  }
}

function validatePassword(values, errors) {

  if (!values.password) {
    errors.push("Password is required");
  } else if (values.password.length < 6) {
    errors.push("Password must be 6 or more characters");
  }
}

function validateFormData(values) {
  const errors = [];
  validateName(values, errors);
  validateEmail(values, errors);
  validatePassword(values, errors);
  return errors;
}

export default validateFormData;
