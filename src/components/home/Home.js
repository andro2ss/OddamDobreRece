import React from "react";
import { Start } from "./Sections/Start";
import { ThreeColumns } from "./Sections/ThreeColumns";
import { SimpleSteps } from "./Sections/SimpleSteps";

function Home(props) {
  return (
    <>
      <Start />
      <ThreeColumns />
      <SimpleSteps />
    </>
  );
}

export default Home;
