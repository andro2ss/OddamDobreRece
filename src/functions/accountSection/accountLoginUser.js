export default function accountLoginUser(
  loadedUsers,
  login,
  password,
  setLogUser
) {
  let tempUser = loadedUsers.filter((element) => {
    return element.email === login;
  });
  if (tempUser.length === 1 && tempUser[0].password === password) {
    setLogUser(...tempUser);
    localStorage.setItem("logUser", JSON.stringify(...tempUser));
    window.location.href = "../";
  } else {
    alert("Błędny email lub hasło");
  }
}
