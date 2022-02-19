import stepHandle from "./stepHandle";
import { updateUser } from "../accountSection/updateUser";

export default function nextStepHandle(
  step,
  step1Value,
  step2Value,
  step3ValueOrg,
  step3ValueTxtF,
  step3ValueCity,
  step4Value,
  setStep,
  sumData
) {
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
  } else if (step === 5) {
    updateUser(sumData);
    stepHandle(1, setStep, step);
  } else {
    stepHandle(1, setStep, step);
  }
}
