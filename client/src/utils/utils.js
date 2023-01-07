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
export const getRank = (number) => {
  if (number >= 10) return "expert";
  else if (number >= 5) return "intermediate";
  else return "begginer";
};
