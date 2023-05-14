import React from "react";
import "./Hotel.css";
import HotelCards from "./Cards/HotelCards";
// import { BsSearch } from "react-icons/fa";
const Hotel = () => {
  return (
    <div className="">
      <div class="position-relative mt-1">
        <img
          src="https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-generative-ai_629315-7088.jpg?size=626&ext=jpg&ga=GA1.2.309246416.1683256725&semt=sph"
          alt="Your Image"
          class="img-fluid"
        />
        <div class="position-absolute top-50 start-50 translate-middle text-center">
          <h1 class="text-light ">Find Hotels in Different Areas</h1>
          <div class="container mt-3">
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div class="input-group-append">
                  <button class="btn bg-white  ms-2" type="submit">
                    <i class="fa fa-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">Hotels</h1>
        <div className="row">
          <HotelCards></HotelCards>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
