import { Decoration } from "../common/decorations/Decoration";
import React, { useState } from "react";

const dataArray = [
  [
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    [
      {
        name: "Fundacja “Dbam o Zdrowie“",
        other: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        desc: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      },
      {
        name: "Fundacja “Dla dzieci“",
        other: "ubrania, meble, zabawki",
        desc: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
      },
      {
        name: "Fundacja “Bez domu“",
        other: "ubrania, jedzenie, ciepłe koce",
        desc: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      },
      {
        name: "Fundacja “Lorem Impsum 1“",
        other: "ubrania, jedzenie, ciepłe koce",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja “Lorem Impsum 2“",
        other: "ubrania, meble, zabawki",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja “Lorem Impsum 3“",
        other: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja “Lorem Impsum 4“",
        other: "ubrania, meble, zabawki",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja “Lorem Impsum 5“",
        other: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja “Lorem Impsum 6“",
        other: "ubrania, jedzenie, ciepłe koce",
        desc: "Cel i misja",
      },
    ],
  ],
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    [
      {
        name: "Organizacja “Lorem Ipsum 1”",
        other: "Ut, aliquam, purus, sit, amet",
        desc: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      },
      {
        name: "Organizacja “Lorem Ipsum 2”",
        other: "Egestas, sed, tempus",
        desc: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      },
      {
        name: "Organizacja “Lorem Ipsum 3”",
        other: "Mi, quis, hendrerit, dolor",
        desc: "Scelerisque in dictum non consectetur a erat nam.",
      },
      {
        name: "Organizacja “Lorem Ipsum 4”",
        other: "Mi, quis, hendrerit, dolor",
        desc: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      },
      {
        name: "Organizacja “Lorem Ipsum 5“",
        other: "Ut, aliquam, purus, sit, amet",
        desc: "Scelerisque in dictum non consectetur a erat nam.",
      },
      {
        name: "Organizacja “Lorem Ipsum 6”",
        other: "Egestas, sed, tempus",
        desc: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      },
    ],
  ],
  [
    "hjda bfjhasdb fjhasd 2342m3 n23khjnkf hj23hjo23r hjsfadouh b83b r4380tb whudfy btrhu04by0234t043y7rftb 4380b 3t7h3 408bgtf0ew3",
    [
      {
        name: "Zbiórka “Lorem Ipsum 1“",
        other: "Egestas, sed, tempus",
        desc: "Scelerisque in dictum non consectetur a erat nam.",
      },
      {
        name: "Zbiórka “Lorem Ipsum 2“",
        other: "Mi, quis, hendrerit, dolor",
        desc: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      },
      {
        name: "Zbiórka “Lorem Ipsum 3“",
        other: "Ut, aliquam, purus, sit, amet",
        desc: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      },
    ],
  ],
];

export function WhoHelp() {
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(0);

  const setActive = (e) => {
    let activeItem = document.querySelector(".btn__box .btn--active");
    if (activeItem) {
      activeItem.classList.remove("btn--active");
    }
    e.target.classList.add("btn--active");
  };

  const drawPagination = (arrayLength) => {
    let itemsQuantity = Math.floor(arrayLength / 3);
    const items = [];
    for (let i = 0; i < itemsQuantity; i++) {
      items.push(i + 1);
    }
    return items.map((item) => {
      let x = "";
      item === page + 1
        ? (x = "btn--pagination btn--active")
        : (x = "btn--pagination");
      return (
        <button
          className={x}
          key={item}
          onClick={(e) => {
            setPage(e.target.innerText - 1);
          }}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <section id="whoHelp">
      <h2 className="section__title">Komu pomagamy?</h2>
      <Decoration />
      <div className="btn__box">
        <button
          className="btn--active"
          onClick={(e) => {
            setActive(e);
            setSelected(0);
            setPage(0);
          }}
        >
          Fundacjom
        </button>
        <button
          onClick={(e) => {
            setActive(e);
            setSelected(1);
            setPage(0);
          }}
        >
          Organizacjom pozarządowym
        </button>
        <button
          onClick={(e) => {
            setActive(e);
            setSelected(2);
            setPage(0);
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <ul className="list">
        <span className="list__subtitle">{dataArray[selected][0]}</span>
        {dataArray[selected][1]
          .filter((item, index) => {
            return index >= page * 3 && index < page * 3 + 3;
          })
          .map((item) => {
            return (
              <li className="list__item" key={item.name}>
                <div className="box--left">
                  <span className="text--name">{item.name}</span>
                  <span className="text--description">{item.desc}</span>
                </div>
                <span className="text--other">{item.other}</span>
              </li>
            );
          })}
        {dataArray[selected][1].length > 3 ? (
          <div className="pagination__box">
            {drawPagination(dataArray[selected][1].length)}
          </div>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
}
