import React from "react";

const PopularPackageCard = (props) => {
  const { title, img, day, price } = props.data;
  return (
    <div>
      <div class="card shadow mb-4">
        <img
          style={{ height: "250px" }}
          class="card-img-top"
          src={img}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{day}</p>
          <p class="card-text">{price}</p>
          <a href="#" class="btn btn-primary">
            See Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCard;
