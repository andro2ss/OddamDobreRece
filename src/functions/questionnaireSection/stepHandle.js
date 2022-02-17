export default function stepHandle(valueStep, setStep, step) {
  let tempStep = step;
  tempStep += valueStep;
  if (tempStep < 1) {
    tempStep = 1;
  } else if (tempStep > 6) {
    tempStep = 6;
  }
  setStep(tempStep);
}
