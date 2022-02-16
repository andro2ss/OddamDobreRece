import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase";

export const createNewUser = async (login, password) => {
  const collectionRef = collection(db, "users");
  const payload = { email: login, password: password };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
  localStorage.setItem("logUser", JSON.stringify(payload));
  window.location.href = "../";
};
