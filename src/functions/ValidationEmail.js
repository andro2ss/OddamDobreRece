export function validationEmail(status, setStatus) {
  const validateEmail = (email) => {
    const emailCheck =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let tempStatus = status;
    const domObject = document.getElementById("form__email");
    if (!emailCheck.test(email) && email.length) {
      tempStatus.email = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!email) {
      tempStatus.email = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.email = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };
  return validateEmail;
}
