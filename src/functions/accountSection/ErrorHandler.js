import { emailCheck } from "../common/emailCheck";

export function errorHandler(error, login, password, setError) {
  const errorsHandler = () => {
    let tempError = error;
    if (!emailCheck.test(login)) {
      tempError[0] = 1;
      document.querySelector("#login__email").classList.add("error");
      document.querySelector("#login__email--error").classList.add("visible");
    } else {
      document.querySelector("#login__email").classList.remove("error");
      document
        .querySelector("#login__email--error")
        .classList.remove("visible");
      tempError[0] = 0;
    }
    if (password.length < 6) {
      tempError[1] = 1;
      document
        .querySelector("#login__password--error")
        .classList.add("visible");

      document.querySelector("#login__password").classList.add("error");
    } else {
      tempError[1] = 0;
      document.querySelector("#login__password").classList.remove("error");
      document
        .querySelector("#login__password--error")
        .classList.remove("visible");
    }
    setError(tempError);
    console.log(error);
  };
  return errorsHandler;
}
