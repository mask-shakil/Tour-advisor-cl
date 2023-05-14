import React, { useEffect, useState } from "react";

const UpComingCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("UpComingCardsData.json")
      .then((Response) => Response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mt-5 text-white ">Upcoming packages</h1>
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-3 mt-5 mb-4">
              <div class="card text-center shadow">
                <img
                  style={{ height: "200px" }}
                  src={card.img}
                  class="card-img-top"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{card.title}</h5>
                  <h5 class="card-title">{card.day}</h5>
                  <p class="card-text">
                    <small class="text-muted">{card.publish}</small>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">{card.price}</small>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingCards;
