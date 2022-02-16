import { Decoration } from "../common/decorations/Decoration";
import React, { useState } from "react";

const dataArray = [
  [
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    [
      {
        name: "Fundacja jem frytki",
        other: "1, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem fgnfgn",
        other: "2, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem bcvb",
        other: "3, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem sfghdsf",
        other: "4, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem xv",
        other: "5, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem df",
        other: "6, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem xbcvc",
        other: "7, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem wefwsfg",
        other: "8, dasdla",
        desc: "Cel i misja",
      },
      {
        name: "Fundacja jem asaxs",
        other: "9, dasdla",
        desc: "Cel i misja",
      },
    ],
  ],
  [
    "jkabfdkjasb dkjaskjfdb kjasbfkjaskf bkasbfk askfakf aks fkhafgkh hgf bajfljhgfjad hshb ajdghd jgaj jhfjh ahbfhab afjlhn bafcjhba ",
    [
      {
        name: "Organizacja jem asaxs",
        other: "1 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Organizacja jem dasdas",
        other: "2 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Organizacja jem afvsdagv",
        other: "3 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Organizacja jem cvvc",
        other: "4 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Organizacja jem khjkhj",
        other: "5 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Organizacja jem yiu",
        other: "6 askdb as",
        desc: "asfasfcasdcas",
      },
    ],
  ],
  [
    "hjda bfjhasdb fjhasd 2342m3 n23khjnkf hj23hjo23r hjsfadouh b83b r4380tb whudfy btrhu04by0234t043y7rftb 4380b 3t7h3 408bgtf0ew3",
    [
      {
        name: "Zbiórka jem yiu",
        other: "1 askdb as",
        desc: "asfasfcasdcas",
      },
      {
        name: "Zbiórka jem cvxccvcv",
        other: "2 askdb as",
        desc: "asfascxvxcvxcvxcvxcfcasdcas",
      },
      {
        name: "Zbiórka jem asdsad",
        other: "3 askdb as",
        desc: "asfasfcasdcas",
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
