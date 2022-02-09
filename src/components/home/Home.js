import React from "react";
import { Start } from "./Sections/Start";
import { ThreeColumns } from "./Sections/ThreeColumns";
import { SimpleSteps } from "./Sections/SimpleSteps";
import { AboutUs } from "./Sections/AboutUs";

function Home(props) {
  return (
    <>
      <Start />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
    </>
  );
}

export default Home;
