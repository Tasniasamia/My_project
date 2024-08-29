import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ClientSlider() {
  const navSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: ".slider-for",
  };

  const forSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} text-gray-800`} onClick={onClick}>
        <i className="fa fa-angle-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} text-gray-800`} onClick={onClick}>
        <i className="fa fa-angle-left"></i>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/4 lg:w-2/5 mb-4">
          <Slider {...navSettings} className="slider-nav">
            <div className="client-thumbnail">
              <img src="assets/img/client1.png" alt="Client 1" className="img-fluid w-full" />
            </div>
            <div className="client-thumbnail">
              <img src="assets/img/client2.png" alt="Client 2" className="img-fluid w-full" />
            </div>
            <div className="client-thumbnail">
              <img src="assets/img/client3.png" alt="Client 3" className="img-fluid w-full" />
            </div>
            <div className="client-thumbnail">
              <img src="assets/img/client2.png" alt="Client 4" className="img-fluid w-full" />
            </div>
            <div className="client-thumbnail">
              <img src="assets/img/client1.png" alt="Client 5" className="img-fluid w-full" />
            </div>
          </Slider>
        </div>
        <div className="w-full md:w-4/5 lg:w-3/5">
          <Slider {...forSettings} className="slider-for">
            <div className="client-feedback-text text-center">
              <div className="client-name text-center">
                <h5>EvA Doe</h5>
                <h6>Beautiful, Welcoming Yoga Studio!</h6>
              </div>
              <div className="testimonials-content">
                <p>Duis fermentum leo velit, nec lobortis elit rutrum vitae...</p>
              </div>
            </div>
            <div className="client-feedback-text text-center">
              <div className="client-name text-center">
                <h5>Martharajas</h5>
                <h6>Beautiful, Welcoming Yoga Studio!</h6>
              </div>
              <div className="testimonials-content">
                <p>Fusce laoreet augue sit amet metus vulputate interdum...</p>
              </div>
            </div>
            <div className="client-feedback-text text-center">
              <div className="client-name text-center">
                <h5>KATI SATOUN</h5>
                <h6>Beautiful, Welcoming Yoga Studio!</h6>
              </div>
              <div className="testimonials-content">
                <p>Duis fermentum leo velit, nec lobortis elit rutrum vitae...</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ClientSlider;
