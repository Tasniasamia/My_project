"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [active,setActive] = useState(0);
  const clients = [
    { id: 1, alt: "BWmedia",image:"/court/client.png" ,name: "Sania Graic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
    { id: 2, alt: "BWmedia",image:"/court/lawer.png", name: "Sania Graic Lawer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
    { id: 3, alt: "BWmedia",image:"/court/man.png", name: "Man 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
  ];

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settingsMain = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    // autoplay: true,
    // autoplaySpeed: 2000,
    asNavFor: nav2,
    ref: sliderRef1,
    initialSlide: 0,
    arrow:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsNav = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1,
    ref: sliderRef2,
    arrow:false,
    initialSlide: 0,
    beforforeChange: (current, next) => setActive(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="my-[150px]">
        <div className="md:w-[576px] w-full mx-auto">
          <Slider {...settingsNav}>
            {clients.map((client, index) => (
                
              <div key={index} >
                <div className={`flex justify-center items-center w-full !h-[113px] transition-opacity duration-300 ${active === index ? "opacity-100" : "opacity-50"}`}>
                  <img src={client?.image} alt={client.alt} className="w-[88px] h-[88px] object-fill rounded-full" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Slider {...settingsMain}>
          {clients.map((client, index) => (
            <div key={index} className="w-full text-center">
              <h1 className="text-lg font-bold">{client.name}</h1>
              <p className="text-sm">{client.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientSlider;
