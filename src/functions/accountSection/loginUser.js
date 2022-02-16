import findUser from "./findUser";

export default function accountLoginUser(
  loadedUsers,
  login,
  password,
  setLogUser
) {
  let checkUser = findUser(loadedUsers, login);
  if (checkUser.length === 1 && checkUser[0].password === password) {
    setLogUser(...checkUser);
    localStorage.setItem("logUser", JSON.stringify(...checkUser));
    window.location.href = "../";
  } else {
    alert("Błędny email lub hasło");
  }
}
