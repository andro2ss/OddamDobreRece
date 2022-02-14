import axios from "axios";

export function sendForms(setName, setEmail, setMessage, setSpinner) {
  const sendForm = (url, config, data) => {
    axios
      .post(url, data, config)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        document.querySelector(".success__message").classList.add("visible");
        setName("");
        setEmail("");
        setMessage("");
        setSpinner(0);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        setSpinner(0);
      });
  };
  return sendForm;
}
