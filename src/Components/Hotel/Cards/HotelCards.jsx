import React, { useEffect, useState } from "react";
import HotelCard from "../Card/HotelCard";

const HotelCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("HotelCardsData.json")
      .then((Response) => Response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div className="col-6">
              <HotelCard data={card}></HotelCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCards;
<h1>hotel cards</h1>;
