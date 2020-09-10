import React, { useState, useEffect } from "react";

import Rating from "./Rating";
import AddButton from "./AddButon";

import classic from "../assets/images/classic-carousel.jpg";
import loom from "../assets/images/loom-carousel.jpg";
import zen from "../assets/images/zen-carousel.jpg";
import data from "../assets/data/mattresses.json";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ChooseMattress() {
  const images = { classic, loom, zen };

  const [mattresses, setMattresses] = useState(null);
  const [selectedMattress, setSelectedMattress] = useState("classic");

  useEffect(() => {
    const _mattresses = [];

    for (const _mattress in data.mattresses) {
      _mattresses.push(_mattress);
    }

    setMattresses(_mattresses);
    setSelectedMattress(_mattresses[0]);
  }, []);

  return (
    <section className="choose-mattress">
      <div className="container">
        <img src={images[selectedMattress]} alt="classic" />

        <div className="container__info">
          <h2 className="container__info-title">Choose Your Mattress</h2>
          <span className="container__info-select-label">
            SELECT MATTRESS TYPE
          </span>
          {mattresses ? (
            <>
              <ul className="container__info-options">
                {mattresses.map((mattress) => (
                  <li
                    key={mattress}
                    className={`container__info-options__option ${
                      mattress === selectedMattress
                        ? "container__info-options__option--selected"
                        : null
                    }`}
                    onClick={() => setSelectedMattress(mattress)}
                  >
                    {data.mattresses[mattress].name}
                  </li>
                ))}
              </ul>
              <div className="container__info-description">
                <span className="container__info-description__name">{`${data.mattresses[selectedMattress].name} Matress`}</span>
                <span className="container__info-description__price">{`${formatter.format(
                  data.mattresses[selectedMattress].price
                )}`}</span>
              </div>
              <Rating
                reviewRating={data.mattresses[selectedMattress].reviewRating}
              />
            </>
          ) : null}
          <AddButton />
        </div>
      </div>
    </section>
  );
}
