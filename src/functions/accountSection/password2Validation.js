export function accountPasswordValidation2(password, password2, setError) {
  if (password2.length < 6) {
    setError(1);
    document.querySelector("#input__password2--error").classList.add("visible");
    document.querySelector("#input__password2").classList.add("error");
  } else if (password !== password2) {
    setError(2);
    document.querySelector("#input__password2--error").classList.add("visible");
    document.querySelector("#input__password2").classList.add("error");
  } else {
    setError(0);
    document.querySelector("#input__password2").classList.remove("error");
    document
      .querySelector("#input__password2--error")
      .classList.remove("visible");
  }
}
