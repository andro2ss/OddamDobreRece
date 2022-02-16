import React, { useEffect, useState } from "react";

function Questionnaire({ setInfoBarText }) {
  const [step, setStep] = useState(1);
  const [sectionBody, setSectionBody] = useState(<>init</>);

  useEffect(() => {
    switch (step) {
      case 1:
        setInfoBarText(
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        );
        setSectionBody(
          <div>
            <h3>Zaznacz co chcesz oddać:</h3>
            <div className="checkbox__container">
              <div className="flex">
                <input type="radio" id="ubrania1" name="ubrania1" />
                <label htmlFor="ubrania1">
                  ubrania, które nadają się do ponownego użycia
                </label>
              </div>
              <div className="flex">
                <input type="radio" id="ubrania2" name="ubrania2" />
                <label htmlFor="ubrania2">ubrania, do wyrzucenia</label>
              </div>
              <div className="flex">
                <input type="radio" id="zabawki" name="zabawki" />
                <label htmlFor="zabawki">zabawki</label>
              </div>
              <div className="flex">
                <input type="radio" id="ksiazki" name="ksiazki" />
                <label htmlFor="ksiazki">książki</label>
              </div>
              <div className="flex">
                <input type="radio" id="inne" name="inne" />
                <label htmlFor="inne">Inne</label>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        setInfoBarText(
          "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
        );
        setSectionBody(
          <div>
            <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <div>
              <label htmlFor="liczbaWorkow">Liczba 60l worków:</label>
              <select name="liczbaWorkow" id="liczbaWorkow">
                <option value="">--wybierz--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        );
        break;
      case 3:
        setInfoBarText(
          "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
        );
        setSectionBody(
          <div>
            <div>
              <label htmlFor="liczbaWorkow">
                <h3>Lokalizacja:</h3>
              </label>
              <select name="lokalizacja" id="lokalizacja">
                <option value="">--wybierz--</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
            </div>
            <div>
              <h4>Komu chcesz pomóc?</h4>
              <box>
                <button>dzieciom</button>
                <button>samotnym matkom</button>
                <button>bezdomnym</button>
                <button>niepełnosprawnym</button>
                <button>osobom starszym</button>
              </box>
            </div>
            <div>
              <label htmlFor="wybranaOrganizacja">
                <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
              </label>
              <input
                type="text"
                id="wybranaOrganizacja"
                name="wybranaOrganizacja"
              />
            </div>
          </div>
        );
        break;
      case 4:
        setInfoBarText("Podaj adres oraz termin odbioru rzeczy.");
        setSectionBody(
          <div>
            <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
            <box>
              <div>
                <h4>Adres odbioru:</h4>
                <div className="flex">
                  <label htmlFor="ulica">Ulica</label>
                  <input type="text" id="ulica" name="ulica" />
                </div>
                <div className="flex">
                  <label htmlFor="miasto">Miasto</label>
                  <input type="text" id="miasto" name="miasto" />
                </div>
                <div className="flex">
                  <label htmlFor="kodPocztowy">Kod pocztowy</label>
                  <input type="text" id="kodPocztowy" name="kodPocztowy" />
                </div>
                <div className="flex">
                  <label htmlFor="nrTel">Numer telefonu</label>
                  <input type="text" id="nrTel" name="nrTel" />
                </div>
              </div>
              <div>
                <h4>Termin odbioru:</h4>
                <div>
                  <label htmlFor="data">Data</label>
                  <input type="text" id="data" name="data" />
                </div>
                <div>
                  <label htmlFor="godzina">Godzina</label>
                  <input type="text" id="godzina" name="godzina" />
                </div>
                <div>
                  <label htmlFor="uwagiKurier">Uwagi dla kuriera</label>
                  <textarea
                    id="uwagiKurier"
                    name="uwagiKurier"
                    rows="4"
                    cols="50"
                  />
                </div>
              </div>
            </box>
          </div>
        );
        break;
    }
  }, [step]);

  const stepHandle = (valueStep) => {
    let tempStep = step;
    tempStep += valueStep;
    if (tempStep < 1) {
      tempStep = 1;
    } else if (tempStep > 4) {
      tempStep = 4;
    }
    setStep(tempStep);
  };

  return (
    <section id="questionnaire">
      <span className="stepCounter">Krok {step}/4</span>
      <div>{sectionBody}</div>
      <box className="btn__container">
        {step === 1 ? (
          ""
        ) : (
          <button className="btn__stepChange" onClick={() => stepHandle(-1)}>
            Wstecz
          </button>
        )}
        {step === 4 ? (
          ""
        ) : (
          <button className="btn__stepChange" onClick={() => stepHandle(1)}>
            Dalej
          </button>
        )}
      </box>
    </section>
  );
}

export default Questionnaire;
