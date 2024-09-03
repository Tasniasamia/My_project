"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial2() {
  const clients = [
    {
      id: 1,
      alt: "BWmedia",
      image: "/court/client.png",
      name: "Sania Graic",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque",
    },
    {
      id: 2,
      alt: "BWmedia",
      image: "/court/lawer.png",
      name: "Sania Graic Lawer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque",
    },
    {
      id: 3,
      alt: "BWmedia",
      image: "/court/man.png",
      name: "Man 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque",
    },
  ];

  const settingsNav = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    initialSlide: 0,
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
    afterChange: () => handleSlideChange(), // Call handleSlideChange after every slide change
  };

  const handleSlideChange = () => {
    // Get all elements with the slick-active class
    const activeSlides = document.querySelectorAll('.slick-active');
    
    // Loop through each active slide
    activeSlides.forEach((slide, index) => {
      if (index === 1) {
        // Set opacity to 1 for the second active slide
        slide.style.opacity = '1';
      } else {
        // Set opacity to 0.5 for other slides
        slide.style.opacity = '0.5';
      }
    });
  };

  useEffect(() => {
    // Run the function on mount and after every render
    handleSlideChange();
  }, []);

  return (
    <div className="container">
      <div className="my-[150px]">
        <div className="md:w-[576px] w-full mx-auto">
          <Slider {...settingsNav}>
            {clients.map((client, index) => (
              <div key={index}>
                <div
                  className={`flex-col justify-center items-center w-full !h-[113px] transition-opacity duration-300`}
                >
                  <img
                    src={client.image}
                    alt={client.alt}
                    className="w-[88px] h-[88px] object-fill rounded-full"
                  />
                  <div>
                    {client?.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
