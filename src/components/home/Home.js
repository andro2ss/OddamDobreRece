import React from "react";
import { Start } from "./Sections/Start";
import { ThreeColumns } from "./Sections/ThreeColumns";
import { SimpleSteps } from "./Sections/SimpleSteps";
import { AboutUs } from "./Sections/AboutUs";
import { WhoHelp } from "./Sections/WhoHelp";
import { Contact } from "./Sections/Contact";

function Home(props) {
  return (
    <>
      <Start />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoHelp />
      <Contact />
    </>
  );
}

export default Home;
