import React from "react";
import SelectInput from "../../common/inputs/SelectInput";

export function BagsAmount({ value, setValue }) {
  const sData = {
    name: "bagsAmount",
    values: ["1", "2", "3", "4", "5"],
  };
  return (
    <div className="bagsAmount">
      <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <div className="select__container">
        <label>Liczba 60l worków:</label>
        <SelectInput selectData={sData} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
