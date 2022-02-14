export function validationName(status, setStatus) {
  const validateName = (name) => {
    let tempStatus = status;
    const domObject = document.getElementById("form__name");
    if (name.split(" ").length > 1) {
      tempStatus.name = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!name) {
      tempStatus.name = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.name = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };
  return validateName;
}
