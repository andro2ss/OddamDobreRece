import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/pages/Home";
import OddajRzeczy from "./components/pages/OddajRzeczy";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Logout from "./components/pages/Logout";
import Container from "@mui/material/Container";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import ZorganizujZbiorke from "./components/pages/ZorganizujZbiorke";

function App() {
  const [loadedUsers, setLoadedUsers] = useState({
    email: "init",
    password: "init",
    id: "init",
  });
  const [logUser, setLogUser] = useState({
    email: "init",
    password: "init",
    id: "init",
  });

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setLoadedUsers(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    let temporaryUser = JSON.parse(localStorage.getItem("logUser"));
    if (!!temporaryUser) {
      if (temporaryUser.email !== "init") {
        setLogUser(temporaryUser);
      }
    }
  }, []);

  return (
    <Container maxWidth="xl" className="page__container">
      <BrowserRouter>
        <Navigation logUser={logUser} setLogUser={setLogUser} />
        <Routes>
          <Route path="/" element={<Home logUser={logUser} />} />
          <Route path="/oddaj-rzeczy" element={<OddajRzeczy />} />
          <Route path="/zorganizuj-zbiorke" element={<ZorganizujZbiorke />} />
          <Route
            path="/logowanie"
            element={
              <Login loadedUsers={loadedUsers} setLogUser={setLogUser} />
            }
          />
          <Route
            path="/rejestracja"
            element={<Register loadedUsers={loadedUsers} />}
          />
          <Route path="/wylogowano" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
