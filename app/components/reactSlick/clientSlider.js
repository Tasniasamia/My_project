"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { useRef, useState } from "react";
import Image from "next/image";

function ClientSlider() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  const slideRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <CiCircleChevRight className="!text-4xl !text-red-500" />,
    prevArrow: <CiCircleChevLeft className="!text-4xl !text-red-500" />,
    beforeChange: (oldIndex, newIndex) => {
      setActive(newIndex);
      setPrev(newIndex === 0 ? clients.length - 1 : newIndex - 1);
      setNext(newIndex === clients.length - 1 ? 0 : newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const clients = [
    { id: 1, name: "Sania Graic", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 2, name: "Sania Graic1", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 3, name: "Sania Graic2", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 4, name: "Sania Graic3", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 5, name: "Sania Graic4", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 6, name: "Sania Graic5", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." }
  ];

  return (
    <div className="py-[150px]">
      <div className="container bg-red-300">
        <Slider {...settings} ref={slideRef}>
          {clients.map((client, index) => {
            let justifyClass = "justify-center";
            if (index === prev) {
              justifyClass = "justify-end";
            } else if (index === next) {
              justifyClass = "justify-start";
            }

            return (
              <div key={index} className="w-full">
                <div className={`flex items-center transition-opacity duration-500 ease-in-out ${active === index ? "opacity-100 justify-center" : "opacity-50"} ${justifyClass}`}>
                  <Image
                    src="/court/lawer.png"
                    alt="justice"
                    width={100}
                    height={100}
                    className="h-[50px] w-[50px] object-fill rounded-full"
                  />
                </div>
                <div className={`w-full transition-opacity duration-500 ease-in-out ${active === index ? "opacity-100" : "opacity-0"}`}>
                  <h1 className="text-center mb-2">{client.name}</h1>
                  <p className="text-center">{client.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ClientSlider;
