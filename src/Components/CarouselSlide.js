import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import logo from "../Images/7kclogo2.jpg";
import carousel1 from "../Images/carousel1.jpg";
import carousel2 from "../Images/carousel2.jpg";
import carousel3 from "../Images/carousel3.jpg";
import carousel4 from "../Images/carousel4.jpg";
import carousel5 from "../Images/carousel5.jpg";
import carousel6 from "../Images/carousel6.png";

function CarouselSlide() {
  return (
    <>
      <div id="home">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel4} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel5} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel6} alt="Sixth slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <img className="d-block w-50 midlogo" src={logo} alt="" />
      </div>
    </>
  );
}

export default CarouselSlide;
