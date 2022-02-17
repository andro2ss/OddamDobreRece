import React, { useEffect, useState } from "react";
import { ItemsToGive } from "./questionnaireItems/ItemsToGive";
import { BagsAmount } from "./questionnaireItems/BagsAmount";
import stepHandle from "../../functions/questionnaireSection/stepHandle";
import { Location } from "./questionnaireItems/Location";
import { Kurier } from "./questionnaireItems/Kurier";

function Questionnaire({ setInfoBarText }) {
  const [step, setStep] = useState(1);
  const [sectionBody, setSectionBody] = useState(<>init</>);
  const [step1Value, setStep1Value] = useState("init");
  const [step2Value, setStep2Value] = useState(0);
  const [step3ValueCity, setStep3ValueCity] = useState(0);

  useEffect(() => {
    switch (step) {
      case 1:
        setInfoBarText(
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        );
        setSectionBody(
          <ItemsToGive setValue={setStep1Value} value={step1Value} />
        );
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
          <Location city={step3ValueCity} setCity={setStep3ValueCity} />
        );
        break;
      case 4:
        setInfoBarText("Podaj adres oraz termin odbioru rzeczy.");
        setSectionBody(<Kurier />);
        break;
      case 5:
        setInfoBarText("ale urwał");
        setSectionBody(<div>Podsumowanko</div>);
        break;
      case 6:
        setInfoBarText("danke");
        setSectionBody(<div>dziekowka</div>);
        break;
    }
    console.log(step1Value);
    console.log(step2Value);
    console.log(step3ValueCity);
  }, [step, step1Value, step2Value, step3ValueCity]);

  return (
    <section id="questionnaire">
      <span className="stepCounter">Krok {step}/4</span>
      <div>{sectionBody}</div>
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
              if (step === 1 && step1Value === "init") {
                alert("Aby przejść do kolejnego kroku wybierz co chcesz oddać");
              } else if (step === 2 && step2Value === 0) {
                alert("Podaj liczbę worków, w które spakowano rzeczy");
              } else {
                stepHandle(1, setStep, step);
              }
            }}
          >
            {step === 5 ? "Potwierdzam" : "Dalej"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Questionnaire;
