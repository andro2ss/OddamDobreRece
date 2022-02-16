import React, { useState } from "react";
import { Contact } from "../sections/Contact";
import InfoBar from "../common/InfoBar";
import OddajRzeczyIntro from "../sections/OddajRzeczyIntro";
import Questionnaire from "../sections/Questionnaire";

function OddajRzeczy(props) {
  const [infoBarText, setInfoBarText] = useState("Init text");
  return (
    <div>
      <OddajRzeczyIntro />
      <InfoBar text={infoBarText} />
      <Questionnaire setInfoBarText={setInfoBarText} />
      <Contact />
    </div>
  );
}

export default OddajRzeczy;
