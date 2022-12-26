export const isEmailInputValid = (value) =>
  value.trim() !== "" && value.includes("@");
export const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;
