import React from "react";

export function ItemsToGive({ setValue, value }) {
  const stuffs = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "Inne",
  ];

  return (
    <div className="ItemsToGive">
      <h3>Zaznacz co chcesz oddać:</h3>
      <div className="checkbox__container">
        {stuffs.map((item) => {
          return (
            <div className="radio__container" key={item}>
              <input
                id={item}
                type="radio"
                name="itemToGive"
                value={item}
                onChange={() => {
                  setValue({ item });
                }}
                checked={value.item === item}
              />
              <label
                htmlFor="itemToGive"
                onClick={(e) => {
                  e.target.parentElement.firstChild.checked = true;
                  setValue({ item });
                }}
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
