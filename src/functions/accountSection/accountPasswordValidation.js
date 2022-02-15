export function accountPasswordValidation(password, setError) {
  if (password.length < 6) {
    setError(1);
    document.querySelector("#input__password--error").classList.add("visible");
    document.querySelector("#input__password").classList.add("error");
  } else {
    setError(0);
    document.querySelector("#input__password").classList.remove("error");
    document
      .querySelector("#input__password--error")
      .classList.remove("visible");
  }
}
