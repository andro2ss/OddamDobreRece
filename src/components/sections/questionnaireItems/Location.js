import React from "react";
import SelectInput from "../../common/SelectInput";

export function Location({ city, setCity }) {
  const sData = {
    name: "lokalizacja",
    values: ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"],
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
        <div>
          <button>dzieciom</button>
          <button>samotnym matkom</button>
          <button>bezdomnym</button>
          <button>niepełnosprawnym</button>
          <button>osobom starszym</button>
        </div>
      </div>
      <div>
        <label htmlFor="wybranaOrganizacja">
          <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
        </label>
        <input type="text" id="wybranaOrganizacja" name="wybranaOrganizacja" />
      </div>
    </div>
  );
}
