export const validateResetPass = ({ password, confirmPassword }) => {
  const errors = {};

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
