import React, { useEffect } from "react";
import { Decoration } from "../../common/decorations/Decoration";
import { useDispatch } from "react-redux";
import { step1NewValue } from "../../../actions";

function QuestionnaireThanks({
  setData1,
  setData2,
  setData3,
  setData4,
  setData5,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(step1NewValue("init"));
    setData1(0);
    setData2(0);
    setData3([]);
    setData4("");
    setData5({
      street: "",
      city: "",
      postCode: "",
      telephone: "",
      data: "",
      hour: "",
      notes: "",
    });
  }, []);
  return (
    <div className="questionnaireThanks">
      <span>
        Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
        informacje o odbiorze.
      </span>
      <Decoration />
    </div>
  );
}

export default QuestionnaireThanks;
