import React from "react";
import { Start } from "../sections/Start";
import { ThreeColumns } from "../sections/ThreeColumns";
import { SimpleSteps } from "../sections/SimpleSteps";
import { AboutUs } from "../sections/AboutUs";
import { WhoHelp } from "../sections/WhoHelp";
import { Contact } from "../sections/Contact";

function Home({ logUser }) {
  return (
    <>
      <Start logUser={logUser} />
      <ThreeColumns />
      <SimpleSteps logUser={logUser} />
      <AboutUs />
      <WhoHelp />
      <Contact />
    </>
  );
}

export default Home;
