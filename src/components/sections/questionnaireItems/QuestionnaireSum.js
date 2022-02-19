import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestioSum } from "../../../actions";

function QuestionnaireSum({ data1, data2, data3, data4, data5 }) {
  const data0 = useSelector((state) => state.step1);
  const dispatch = useDispatch();
  const sum = useSelector((state) => state.questioSummary);
  useEffect(() => {
    dispatch(
      setQuestioSum({
        co: data0.item,
        ile: data1,
        komu: data3,
        lokalizacja: data2,
        organizacja: data4,
        ulica: data5.street,
        miasto: data5.city,
        kodPocztowy: data5.postCode,
        telefon: data5.telephone,
        data: data5.data,
        godzina: data5.hour,
        uwagiKurier: data5.notes,
      })
    );
  }, []);

  return (
    <div className="questionnaireSummary">
      <h3>Podsumowanie Twojej darowizny</h3>
      <div>
        <h4>Oddajesz:</h4>
        <div className="box">
          <img src={require("../../../assets/Icon1@2x.png")} alt="koszulka" />
          <span>
            {sum.ile} {sum.ile !== 1 ? "worki" : "worek"}, {sum.co}, {sum.komu}
          </span>
        </div>
        <div className="box">
          <img
            src={require("../../../assets/Icon4@2x.png")}
            alt="ikona odswiezania"
          />
          {sum.organizacja === "" ? (
            <span>dla lokalizacji: {sum.lokalizacja} </span>
          ) : (
            <span>dla organizacji: {sum.organizacja}</span>
          )}
        </div>
      </div>
      <div className="container--big">
        <div>
          <h4>Adres odbioru:</h4>
          <ul>
            <li>
              <span>Ulica</span>
              <span>{sum.ulica}</span>
            </li>
            <li>
              <span>Miasto</span>
              <span>{sum.miasto}</span>
            </li>
            <li>
              <span>Kod pocztowy</span>
              <span>{sum.kodPocztowy}</span>
            </li>
            <li>
              <span>Numer telefonu</span>
              <span>{sum.telefon}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Termin odbioru:</h4>
          <ul>
            <li>
              <span>Data</span>
              <span>{sum.data}</span>
            </li>
            <li>
              <span>Godzina</span>
              <span>{sum.godzina}</span>
            </li>
            <li>
              <span>Uwagi dla kuriera</span>
              <span>{sum.uwagiKurier}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireSum;
