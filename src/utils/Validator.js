

export function Validator(email,password,userName) {
 const isNameValid = /^[A-Za-z ]{2,30}$/.test(userName);
const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPassValid =
    /^(?=.{8,})((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isEmailValid) return "Email is not Valid";
    if(!isPassValid) return "Password is not Valid";
    if(!isNameValid) return "Enter Correct Name";

  return null;
}


