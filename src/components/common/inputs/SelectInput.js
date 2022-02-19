import React from "react";
import uniqId from "../../../functions/common/uniqId";

function SelectInput({ selectData, value, setValue }) {
  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="0"
            value="0"
            name={selectData.name}
            key={uniqId()}
            checked={value === 0}
            onChange={() => {
              setValue(0);
            }}
          />
          <p className="select-box__input-text">--wybierz--</p>
          {selectData.values.map((val) => {
            return (
              <div key={uniqId()}>
                <input
                  className="select-box__input"
                  type="radio"
                  id={val.replace(/\s/g, "")}
                  value={val}
                  name={selectData.name}
                  checked={value === val}
                  onChange={() => {
                    setValue(val);
                  }}
                />
                <p className="select-box__input-text">{val}</p>
              </div>
            );
          })}
        </div>
        <img
          className="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        {selectData.values.map((val) => {
          return (
            <li key={uniqId()}>
              <label
                className="select-box__option"
                htmlFor={val.replace(/\s/g, "")}
                aria-hidden="aria-hidden"
                onClick={() => {
                  setValue(val);
                }}
              >
                {val}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectInput;
