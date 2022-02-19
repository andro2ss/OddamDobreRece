import React, { useEffect, useState } from "react";
import { ItemsToGive } from "./questionnaireItems/ItemsToGive";
import { BagsAmount } from "./questionnaireItems/BagsAmount";
import stepHandle from "../../functions/questionnaireSection/stepHandle";
import { Location } from "./questionnaireItems/Location";
import { Courier } from "./questionnaireItems/Courier";
import { useSelector } from "react-redux";
import QuestionnaireSum from "./questionnaireItems/QuestionnaireSum";

function Questionnaire({ setInfoBarText, step, setStep }) {
  const step1Value = useSelector((state) => state.step1);

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
        setSectionBody(<div>dziekowka</div>);
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
              } else if (step === 3 && step3ValueOrg.length === 0) {
                alert("Wybierz komu chcesz pomoć");
              } else if (
                step === 3 &&
                step3ValueTxtF.length === 0 &&
                step3ValueCity === 0
              ) {
                alert("Wybierz miasto lub wpisz konkretną organizację");
              } else if (step === 4 && step4Value.street === "") {
                alert("Podaj ulice");
              } else if (step === 4 && step4Value.city === "") {
                alert("Podaj miasto");
              } else if (step === 4 && step4Value.postCode === "") {
                alert("Podaj kod pocztowy");
              } else if (step === 4 && step4Value.data === "") {
                alert("Podaj datę");
              } else if (step === 4 && step4Value.telephone === "") {
                alert("Podaj numer telefonu");
              } else if (step === 4 && step4Value.hour === "") {
                alert("Podaj godzinę");
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
