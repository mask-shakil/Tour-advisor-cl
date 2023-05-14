import React from "react";

const HotelCard = (props) => {
  const { name, img, location, price } = props.data;
  return (
    <div>
      <div class="card mb-3 mt-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              style={{ height: "200px" }}
              src={img}
              alt="Hotel Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8 text-center">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p>{location}</p>
              <p class="card-text">{price}</p>
              <a href="#" class="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
