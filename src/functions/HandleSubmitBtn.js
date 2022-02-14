export function handleSubmitBtn(
  validateName,
  name,
  validateEmail,
  email,
  validateMessage,
  message,
  status,
  setSpinner,
  sendForm
) {
  const handleSubmit = () => {
    validateName(name);
    validateEmail(email);
    validateMessage(message);
    if (status.name !== "ok") {
      let domObject = document.getElementById("form__name");
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    }

    if (status.email !== "ok") {
      let domObject = document.getElementById("form__email");
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    }

    if (status.message !== "ok") {
      let domObject = document.getElementById("form__message");
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    }
    if (
      status.message === "ok" &&
      status.name === "ok" &&
      status.email === "ok"
    ) {
      setSpinner(1);
      sendForm(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          name: name,
          email: email,
          message: message,
        }
      );
    } else {
      document.querySelector(".success__message").classList.remove("visible");
    }
  };
  return handleSubmit;
}
