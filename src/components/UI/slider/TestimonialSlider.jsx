import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "At the moment I think we have the most advanced and complete online ordering system in Romania. From the first weeks of use, the Gloriafood system has provided us with a saving volume of approximately 20% of the turnover, and during the most difficult time of the pandemic, it has brought us even more than 60% of our monthly sales."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Vishal</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "It is an easy-to-use system that has a powerful and secure warning feature. Despite our small number of operations, the application gives credibility to our business, allowing customer loyalty. The answer is immediate and quick, adding quality to our services and attracting new customers."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Adithi Agarwal</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "The system is user-friendly. It has helped in making the major shift from offline to online sales (which was necessary since we are in lockdown). The fees from our local delivery partners were crazy! Plus, I think it is very nice your customer service is so fast and hospitable."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Nithesh Kamli</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
