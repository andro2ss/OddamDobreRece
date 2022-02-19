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
    let element = document;
    let myEvents = "click keypress scroll".split(" ");
    let handler = function (e) {
      localStorage.setItem("logoutControl", JSON.stringify(0));
    };

    for (let i = 0, len = myEvents.length; i < len; i++) {
      element.addEventListener(myEvents[i], handler, false);
    }

    setInterval(() => {
      let logoutControl = JSON.parse(localStorage.getItem("logoutControl"));
      let loggedUser = JSON.parse(localStorage.getItem("logUser"));
      if (loggedUser) {
        logoutControl++;
        localStorage.setItem("logoutControl", JSON.stringify(logoutControl));
        console.log("Time to logout:" + parseInt(15 - logoutControl) + " min");
        if (logoutControl === 15) {
          window.location.pathname = "/logowanie";
          localStorage.clear();
          alert("Wylogowano z powodu 15 minutowej bezczynności");
        }
      }
    }, 60000);

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
