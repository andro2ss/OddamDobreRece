import React from "react";
import uniqId from "../../functions/common/uniqId";

function OrganisationsCheckbox({ options, val, setVal }) {
  function newArray(array, arrItem, operation) {
    let tempArr = array;
    if (operation === "add") {
      tempArr.push(arrItem);
      return tempArr;
    } else if (operation === "remove") {
      tempArr = array.filter((item) => {
        return item !== arrItem;
      });
      return tempArr;
    }
  }

  return (
    <div className="organisation__container">
      {options.values.map((item) => {
        let tempClass = "btn__organisation";
        if (val.length > 0) {
          if (!!val.find((x) => x === item)) {
            tempClass = tempClass + " active";
          }
        }
        return (
          <div className={tempClass} key={uniqId()}>
            <input
              type="checkbox"
              id={item.replace(/\s/g, "")}
              name={options.name}
              value={item}
              onChange={(event) => {
                event.target.parentElement.classList.toggle("active");
                let operation = "";
                if (event.target.parentElement.classList.contains("active")) {
                  operation = "add";
                } else {
                  operation = "remove";
                }
                let temp = newArray(val, item, operation);
                setVal(temp);
              }}
            />
            <label htmlFor={item.replace(/\s/g, "")}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}

export default OrganisationsCheckbox;
