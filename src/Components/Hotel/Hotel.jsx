import React from "react";
import "./Hotel.css";
const Hotel = () => {
  return (
    <div>
      <div class="media mt-1">
        <img
          src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-302.jpg?size=626&ext=jpg&ga=GA1.2.309246416.1683256725&semt=sph"
          class="mr-3 img-fluid"
          alt="your-image"
        />
        <div class="media-body">
          <h5 class="mt-0 ms-5 text-light">Your title here</h5>
          <p className="ms-5 text-white">Your text here</p>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
