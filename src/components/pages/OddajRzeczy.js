import React, { useState } from "react";
import { Contact } from "../sections/Contact";
import InfoBar from "../common/InfoBar";
import OddajRzeczyIntro from "../sections/OddajRzeczyIntro";
import Questionnaire from "../sections/Questionnaire";

function OddajRzeczy(props) {
  const [infoBarText, setInfoBarText] = useState("Init text");
  const [step, setStep] = useState(1);

  return (
    <div>
      <OddajRzeczyIntro />
      {step > 4 ? "" : <InfoBar text={infoBarText} />}
      <Questionnaire
        setInfoBarText={setInfoBarText}
        step={step}
        setStep={setStep}
      />
      <Contact />
    </div>
  );
}

export default OddajRzeczy;
