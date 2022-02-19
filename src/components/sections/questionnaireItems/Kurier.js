import React, { useEffect, useState } from "react";
import TextInput from "../../common/inputs/TextInput";
import DateInput from "../../common/inputs/DateInput";
import TextareaInput from "../../common/inputs/TextareaInput";
import TimeInput from "../../common/inputs/TimeInput";

export function Kurier({ value, setValue }) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [data, setData] = useState("");
  const [hour, setHour] = useState("");
  const [notes, setNotes] = useState("");
  let formData = value;
  if (street === "" && value.street.length > 1) setStreet(value.street);
  if (city === "" && value.city.length > 1) setCity(value.city);
  if (postCode === "" && value.postCode.length > 1) setPostCode(value.postCode);
  if (telephone === "" && value.telephone.length > 1)
    setTelephone(value.telephone);
  if (data === "" && value.data.length > 1) setData(value.data);
  if (hour === "" && value.hour.length > 1) setHour(value.hour);
  if (notes === "" && value.notes.length > 1) setNotes(value.notes);

  useEffect(() => {
    formData = {
      street: street,
      city: city,
      postCode: postCode,
      telephone: telephone,
      data: data,
      hour: hour,
      notes: notes,
    };
    setValue(formData);
  }, [street, city, postCode, telephone, data, hour, notes]);
  return (
    <div>
      <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
      <div className="inputs__container--big">
        <div className="inputs__container--small">
          <h4>Adres odbioru:</h4>
          <TextInput label="Ulica" value={street} setValue={setStreet} />
          <TextInput label="Miasto" value={city} setValue={setCity} />
          <TextInput
            label="Kod pocztowy"
            value={postCode}
            setValue={setPostCode}
          />
          <TextInput
            label="Numer telefonu"
            value={telephone}
            setValue={setTelephone}
          />
        </div>
        <div className="inputs__container--small">
          <h4>Termin odbioru:</h4>
          <DateInput label="Data" value={data} setValue={setData} />
          <TimeInput label="Godzina" value={hour} setValue={setHour} />
          <TextareaInput
            label="Uwagi dla kuriera"
            value={notes}
            setValue={setNotes}
          />
        </div>
      </div>
    </div>
  );
}
