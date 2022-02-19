import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { step1NewValue } from "../../../actions";

export function ItemsToGive() {
  const stuffs = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "Inne",
  ];
  const step1Value = useSelector((state) => state.step1);
  const dispatch = useDispatch();

  return (
    <div className="ItemsToGive">
      <h3>Zaznacz co chcesz oddać:</h3>
      <div className="checkbox__container">
        {stuffs.map((item) => {
          return (
            <div className="radio__container" key={item}>
              <input
                id={item.replace(/\s/g, "")}
                type="radio"
                name="itemToGive"
                value={item}
                onChange={(e) => {
                  dispatch(step1NewValue({ item }));
                }}
                checked={step1Value.item === item}
              />
              <label
                htmlFor="itemToGive"
                onClick={(e) => {
                  e.target.parentElement.firstChild.checked = true;
                  dispatch(step1NewValue({ item }));
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
