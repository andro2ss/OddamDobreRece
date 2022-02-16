export default function findUser(loadedUsers, login) {
  let findedUser = loadedUsers.filter((element) => {
    return element.email === login;
  });
  return findedUser;
}
