import { emailCheck } from "../common/emailCheck";

export function accountEmailValidation(email, setError) {
  if (!emailCheck.test(email)) {
    setError(1);
    document.querySelector("#input__email").classList.add("error");
    document.querySelector("#input__email--error").classList.add("visible");
  } else {
    setError(0);
    document.querySelector("#input__email").classList.remove("error");
    document.querySelector("#input__email--error").classList.remove("visible");
  }
}
