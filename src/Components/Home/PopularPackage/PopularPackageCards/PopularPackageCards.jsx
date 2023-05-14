import React, { useEffect, useState } from "react";
import PopularPackageCard from "../PopularPackageCard/PopularPackageCard";

const PopularPackageCards = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("PopularPackageCardsData.json")
      .then((Response) => Response.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mt-5 text-white">Popular Packages</h1>
        <div className="row mt-5">
          {packages.map((Package) => (
            <div class="col-md-4">
              <PopularPackageCard data={Package}></PopularPackageCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCards;
