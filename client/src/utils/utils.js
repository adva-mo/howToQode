export const isEmailInputValid = (value) =>
  value.trim() !== "" && value.includes("@");
export const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;

export const validateSnippetFields = (obj) => {
  for (let key in obj) {
    if (obj[key] === "") {
      return false;
    }
  }
  return true;
};
