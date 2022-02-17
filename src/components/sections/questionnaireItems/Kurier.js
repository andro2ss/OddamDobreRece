import React from "react";

export function Kurier() {
  return (
    <div>
      <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
      <div>
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
            <textarea id="uwagiKurier" name="uwagiKurier" rows="4" cols="50" />
          </div>
        </div>
      </div>
    </div>
  );
}
