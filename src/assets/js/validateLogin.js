import { validateEmail, validatePassword } from "./helpers";
export const validateLogin = ({ email, password }) => {
  const errors = {};
  validateEmail(email, errors);
  validatePassword(password, errors);
  return errors;
};
