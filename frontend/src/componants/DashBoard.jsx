  import React from "react";
  import Navbar from "./Navbar";
  import CardsImg from "./CardsImg";
  import Carousel1 from "./CarouselCard";
  import Footer from "./Footer"
  import SearchForm from './search/SearchForm';
  import BlogSection from './Blogs/BlogSection'

  const DashBoard = () => {
    return (
      <div>
        <Navbar />
        <div class="background-div">
        <SearchForm/>
        </div>
        <CardsImg/>
        <Carousel1/>
        <BlogSection/>
        <Footer/>
      </div> 
    );   
  };

  export default DashBoard;
