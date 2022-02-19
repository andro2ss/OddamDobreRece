import React from "react";
import SelectInput from "../../common/inputs/SelectInput";
import OrganisationsCheckbox from "../../common/inputs/OrganisationsCheckbox";

export function Location({
  city,
  setCity,
  organisations,
  setOrganisations,
  textF,
  setTextF,
}) {
  const sData = {
    name: "lokalizacja",
    values: ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"],
  };
  const checkboxData = {
    name: "organisations",
    values: [
      "dzieciom",
      "samotnym matkom",
      "bezdomnym",
      "niepełnosprawnym",
      "osobom starszym",
    ],
  };
  return (
    <div>
      <div>
        <label htmlFor="liczbaWorkow">
          <h3>Lokalizacja:</h3>
        </label>
        <SelectInput value={city} setValue={setCity} selectData={sData} />
      </div>
      <div>
        <h4>Komu chcesz pomóc?</h4>
        <OrganisationsCheckbox
          options={checkboxData}
          val={organisations}
          setVal={setOrganisations}
        />
      </div>
      <div>
        <label htmlFor="wybranaOrganizacja">
          <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
        </label>
        <input
          type="text"
          id="wybranaOrganizacja"
          name="wybranaOrganizacja"
          value={textF}
          onChange={(e) => setTextF(e.target.value)}
        />
      </div>
    </div>
  );
}
