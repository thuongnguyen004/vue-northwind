import { validateEmail } from "./helpers";
export const validateForgotPass = ({ email }) => {
  const errors = {};
  validateEmail(email, errors);
  return errors;
};
