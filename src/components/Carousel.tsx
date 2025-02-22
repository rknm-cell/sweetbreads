import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const image02 = "/src/assets/image02.JPG";
const image03 = "/src/assets/image03.jpg";

const BandCarousel = () => {
  const image01 =
    "https://images.gofundme.com/asVI3aocMY56ZAGthWoXS2v3ibk=/1200x900/https://d2g8igdw686xgo.cloudfront.net/81750377_1722298030933641_r.jpeg";

  console.log(image02);
  return (
    <div className="carousel-wrapper">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
        emulateTouch={true}
      >
        <div className="carousel-slide">
          <img src={image01} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={image02} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={image03} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default BandCarousel;
