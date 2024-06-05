import React from "react";
import Navbar from "./Navbar";
import CardsImg from "./CardsImg";
import Carousel1 from "./CarouselCard";
import Footer from "./Footer"

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <div class="background-div"></div>
      <CardsImg/>
      <Carousel1/>
      <Footer/>
    </div> 
  );   
};

export default DashBoard;
