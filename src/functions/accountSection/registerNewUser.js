import findUser from "./findUser";
import { createNewUser } from "./addUserInServer";

export default function registerNewUser(
  errorSum,
  request,
  setRequest,
  loadedUsers,
  login,
  password
) {
  if (errorSum === 0 && request === 1) {
    let checkUser = findUser(loadedUsers, login);
    if (checkUser.length > 0) {
      if (!!checkUser[0].email) {
        alert("Błąd! Email jest już używany!");
      }
    } else {
      createNewUser(login, password);
    }
    setRequest(0);
  } else {
    setRequest(0);
  }
}
