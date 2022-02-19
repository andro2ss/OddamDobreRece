import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";

export const updateUser = async (sumData) => {
  const user = JSON.parse(localStorage.getItem("logUser"));
  const docRef = doc(db, "users", user.id);
  let pushData = [];
  if (!!user.helped) {
    pushData = user.helped;
    pushData.push(sumData);
    await updateDoc(docRef, { helped: pushData });
    localStorage.setItem(
      "logUser",
      JSON.stringify({
        name: user.name,
        password: user.password,
        id: user.id,
        helped: pushData,
      })
    );
  } else {
    await updateDoc(docRef, { helped: [sumData] });
    localStorage.setItem(
      "logUser",
      JSON.stringify({
        name: user.name,
        password: user.password,
        id: user.id,
        helped: [sumData],
      })
    );
  }
};
