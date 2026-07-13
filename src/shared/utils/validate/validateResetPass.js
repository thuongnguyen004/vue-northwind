import { validateConfirmPassword, validatePassword } from "./helpers";
export const validateResetPass = ({ password, confirmPassword }) => {
  const errors = {};
  validatePassword(password, errors);
  validateConfirmPassword(password, confirmPassword, errors);
  return errors;
};
