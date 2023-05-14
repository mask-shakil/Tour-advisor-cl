import React, { useEffect, useState } from "react";

const ChooseUs = () => {
  const [chooses, setChooses] = useState([]);
  useEffect(() => {
    fetch("ChooseUsData.json")
      .then((Response) => Response.json())
      .then((data) => setChooses(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5 text-center text-white">why choose us ?</h1>
      <div className="container bg-white rounded">
        <div className="row mt-5">
          {chooses.map((choose) => (
            <div className="col-md-6 mt-5">
              <div className="  mb-4">
                <div class="card-body text-center">
                  {/* <img
                    style=""
                    class="rounded-circle mb-4"
                    src={""}
                    alt="Card image cap"
                  /> */}
                  <img
                    src={choose.img}
                    alt=""
                    className="rounded-circle mb-4"
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h5 class="card-title">{choose.title}</h5>
                  <p class="card-text">{choose.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
