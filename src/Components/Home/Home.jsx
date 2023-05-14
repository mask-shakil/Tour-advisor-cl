import React from "react";
import HomeCarousel from "../HomeCarouselSlider/HomeCarousel";
import PopularPackageCards from "./PopularPackage/PopularPackageCards/PopularPackageCards";
import ChooseUs from "./ChooseUs/ChooseUs";
import "../Home/Home.css";
import UpComingCards from "./UpComingPackage/UpComingCards";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="body">
      <HomeCarousel></HomeCarousel>
      <PopularPackageCards></PopularPackageCards>
      <ChooseUs></ChooseUs>
      <UpComingCards></UpComingCards>
      <Footer></Footer>
    </div>
  );
};

export default Home;
