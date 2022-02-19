import React, { useEffect, useState } from "react";
import { ItemsToGive } from "./questionnaireItems/ItemsToGive";
import { BagsAmount } from "./questionnaireItems/BagsAmount";
import stepHandle from "../../functions/questionnaireSection/stepHandle";
import { Location } from "./questionnaireItems/Location";
import { Courier } from "./questionnaireItems/Courier";
import { useSelector } from "react-redux";
import QuestionnaireSum from "./questionnaireItems/QuestionnaireSum";
import QuestionnaireThanks from "./questionnaireItems/QuestionnaireThanks";
import nextStepHandle from "../../functions/questionnaireSection/nextStepHandle";

function Questionnaire({ setInfoBarText, step, setStep }) {
  const step1Value = useSelector((state) => state.step1);
  const sumData = useSelector((state) => state.questioSummary);

  const [sectionBody, setSectionBody] = useState(<>init</>);
  const [step2Value, setStep2Value] = useState(0);
  const [step3ValueCity, setStep3ValueCity] = useState(0);
  const [step3ValueOrg, setStep3ValueOrg] = useState([]);
  const [step3ValueTxtF, setStep3ValueTxtF] = useState("");
  const [step4Value, setStep4Value] = useState({
    street: "",
    city: "",
    postCode: "",
    telephone: "",
    data: "",
    hour: "",
    notes: "",
  });

  useEffect(() => {
    switch (step) {
      case 1:
        setInfoBarText(
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        );
        setSectionBody(<ItemsToGive />);
        break;
      case 2:
        setInfoBarText(
          "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
        );
        setSectionBody(
          <BagsAmount value={step2Value} setValue={setStep2Value} />
        );
        break;
      case 3:
        setInfoBarText(
          "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
        );
        setSectionBody(
          <Location
            city={step3ValueCity}
            setCity={setStep3ValueCity}
            organisations={step3ValueOrg}
            setOrganisations={setStep3ValueOrg}
            textF={step3ValueTxtF}
            setTextF={setStep3ValueTxtF}
          />
        );
        break;
      case 4:
        setInfoBarText("Podaj adres oraz termin odbioru rzeczy.");
        setSectionBody(<Courier setValue={setStep4Value} value={step4Value} />);
        break;
      case 5:
        setInfoBarText("none");
        setSectionBody(
          <QuestionnaireSum
            data1={step2Value}
            data2={step3ValueCity}
            data3={step3ValueOrg}
            data4={step3ValueTxtF}
            data5={step4Value}
          />
        );
        break;
      case 6:
        setInfoBarText("none");
        setSectionBody(
          <QuestionnaireThanks
            setData1={setStep2Value}
            setData2={setStep3ValueCity}
            setData3={setStep3ValueOrg}
            setData4={setStep3ValueTxtF}
            setData5={setStep4Value}
          />
        );
        break;
    }
  }, [
    step,
    step1Value,
    step2Value,
    step3ValueCity,
    step3ValueOrg,
    step3ValueTxtF,
    step4Value,
  ]);

  return (
    <section id="questionnaire">
      {step > 4 ? "" : <span className="stepCounter">Krok {step}/4</span>}
      {sectionBody}
      {step === 6 ? (
        ""
      ) : (
        <div className="btn__container">
          {step === 1 || step === 6 ? (
            ""
          ) : (
            <button
              className="btn__stepChange"
              onClick={() => stepHandle(-1, setStep, step)}
            >
              Wstecz
            </button>
          )}
          {step === 6 ? (
            ""
          ) : (
            <button
              className="btn__stepChange"
              onClick={() => {
                nextStepHandle(
                  step,
                  step1Value,
                  step2Value,
                  step3ValueOrg,
                  step3ValueTxtF,
                  step3ValueCity,
                  step4Value,
                  setStep,
                  sumData
                );
              }}
            >
              {step === 5 ? "Potwierdzam" : "Dalej"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Questionnaire;
