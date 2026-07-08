import { isValidEmail } from "./helpers";
export const validateSignup = ({
  fullName,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = "FullName is required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Provide a valid email address";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "ConfirmPassword is required";
  } else if (confirmPassword != password) {
    errors.confirmPassword = "Password does not match";
  }

  return errors;
};
