export const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const validateFullName = (fullName, errors) => {
  if (!fullName.trim()) {
    errors.fullName = "FullName is required";
  }
};
export const validateEmail = (email, errors) => {
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Provide a valid email address";
  }
};
export const validatePassword = (password, errors) => {
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
};

export const validateConfirmPassword = (password, confirmPassword, errors) => {
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "ConfirmPassword is required";
  } else if (confirmPassword != password) {
    errors.confirmPassword = "Password does not match";
  }
};
