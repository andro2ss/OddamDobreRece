export function validationMessage(status, setStatus) {
  const validateMessage = (message) => {
    let tempStatus = status;
    let messageLength = message.split("").length;
    const domObject = document.getElementById("form__message");
    if (1 <= messageLength && messageLength < 120) {
      tempStatus.message = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!message) {
      tempStatus.message = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.message = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };
  return validateMessage;
}
