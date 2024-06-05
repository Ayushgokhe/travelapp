import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="carouselheading">
      <h2>Quick and easy trip planner</h2>
      <p>Pick a vibe and explore the top destinations in India</p>
      </div>
    <div className="carouselDiv">
      <Carousel 
        responsive={responsive} 
        swipeable={true} 
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={responsive.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018206.jpg?k=4c7dd12aa94a3b673224299f1617eeb3f0e5a4f29910c68c6224d97964520793&o=" alt="Orchha" />
          <p className="legend">Orchha</p>
        </div>
        <div>
          <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018330.jpg?k=752e8ab831d20973da60558fef0ad119de7d55aff2a183931a064b6c2d94ea3d&o=" alt="Būndi" />
          <p className="legend">Būndi</p>
        </div>
        <div>
          <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018362.jpg?k=70bb068f5ad374af5d3f628260d998ab0dd71b7e0bfb1ddf53040be6fe8ea4f3&o=" alt="Agra" />
          <p className="legend">Agra</p>
        </div>
        <div>
          <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018162.jpg?k=b56277100459626c66be8e27db905d17ef2afed42ac97bcf6aa9070a59206016&o=" alt="Surat" />
          <p className="legend">Surat</p>
        </div>
        <div>
          <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018284.jpg?k=1461bebf1c99cab9ba48eeeaab97c403d93930c4a9d7aa5f91a47d55fd449122&o=" alt="Hampi" />
          <p className="legend">Hampi</p>
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default CarouselCard;
