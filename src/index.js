import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Container from "@mui/material/Container";

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="xl" className="page__container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oddaj-rzeczy" element={<Form />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
