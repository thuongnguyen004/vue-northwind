import { isValidEmail } from "./helpers";
export const validateForgotPass = ({ email }) => {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Provide a valid email address";
  }

  return errors;
};
