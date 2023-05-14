import React, { useEffect, useState } from "react";
import "./HomeCarousel.css";
import Carousel from "react-bootstrap/Carousel";
const HomeCarousel = () => {
  const [carousels, setCarousel] = useState([]);
  useEffect(() => {
    fetch("CarouselData.json")
      .then((Response) => Response.json())
      .then((data) => setCarousel(data));
  }, []);

  return (
    <div>
      <Carousel className="mt-1">
        {carousels.map((carousel) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{carousel.captionTitle}</h3>
              <p>{carousel.captionData}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
