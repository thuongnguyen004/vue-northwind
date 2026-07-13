import {
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
} from "./helpers";
export const validateSignup = ({
  fullName,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};
  validateFullName(fullName, errors);
  validateEmail(email, errors);
  validatePassword(password, errors);
  validateConfirmPassword(password, confirmPassword, errors);
  return errors;
};
