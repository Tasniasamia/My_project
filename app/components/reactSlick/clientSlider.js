"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientSlider() {
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
    afterChange: () => {
      adjustSlideStyles();
    },
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

  const adjustSlideStyles = () => {
    // Reset all slide styles
    document.querySelectorAll('.slick-slide').forEach(slide => {
      const img = slide.querySelector('img');
      const textDiv = slide.querySelector('div > div > div > div ');

      if (img) {
        img.style.opacity = '1'; // Reset image opacity
      }
      if (textDiv) {
        textDiv.style.opacity = '1'; // Reset text opacity
      }
    });

    // Adjust styles for active but not current slides
    const activeSlides = document.querySelectorAll('.slick-slide.slick-active:not(.slick-current)');
    activeSlides.forEach(slide => {
      // const img = slide.querySelector('img');
      const textDiv = slide.querySelector('div > div > div > div ');
      const img = slide.querySelector('div > div > div > div > img ');


      if (img) {
        img.style.opacity = '0.5'; // Set image opacity to 0.5
      }
      if (textDiv) {
        textDiv.style.opacity = '0'; // Hide text by setting opacity to 0
      }
    });
  };

  useEffect(() => {
    adjustSlideStyles(); // Adjust styles on initial render
  }, []);

  return (
    <div className="container">
      <div className="my-[150px]">
        <div className="md:w-[576px] w-full mx-auto">
          <Slider {...settingsNav}>
            {clients.map((client, index) => (
              <div key={index}>
                <div className="flex-col justify-center items-center w-full !h-[113px] transition-opacity duration-300">
                  <img
                    src={client.image}
                    alt={client.alt}
                    className="w-[88px] h-[88px] object-fill rounded-full"
                  />
                  <div>
                    {client.description}
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

export default ClientSlider;
