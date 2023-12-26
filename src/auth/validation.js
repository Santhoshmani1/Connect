function handleFormValues(values) {
  const errors = [];
  if (!values.name) {
    errors.push("Name is required");
  } else if (values.name.length < 2) {
    errors.push("First name must be 2 or more characters");
  }
  if (!values.email) {
    errors.push("Email address is required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.push("Email address is invalid");
  } else if (values.email.length < 8) {
    errors.push("Invalid email address");
  }
  if (!values.password) {
    errors.push("Password is required");
  } else if (values.password.length < 6) {
    errors.push("Password must be 6 or more characters");
  }
  return errors;
}

export default handleFormValues;
