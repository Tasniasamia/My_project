"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, FreeMode, EffectCoverflow } from "swiper/modules";
import { useState, useRef } from "react";

const ClientSlider = () => {
  const [active, setActive] = useState(0);
  const slideRef = useRef(null);

  const clients = [
    { id: 1, name: "Sania Graic", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 2, name: "Sania Graic1", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 3, name: "Sania Graic2", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 4, name: "Sania Graic3", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 5, name: "Sania Graic4", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
    { id: 6, name: "Sania Graic5", description: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." }
  ];

  return (
    <div className="mb-[150px] container">
      <div className="text-center">
        <h4 className="header-4-bold text-[#B68C5A]">our mission</h4>
        <h2 className="text-[#0C0C15] mt-[24px] about-title">
          our promise to you!
        </h2>

        <div className="flex justify-center mt-[40px] mb-[56px]">
          <p className="lg:w-[535px] w-full text-[#5B5353] font-normal uppercase font-['Lato'] text-base leading-[170%]">
            Meet our dedicated legal team, committed to providing expert advice
            and achieving the best outcomes for our clients.
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={-120} // Adjusted to a moderate negative value
        className="flex justify-center items-center"
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        modules={[Navigation, Autoplay, FreeMode, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        ref={slideRef}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {clients.map((client, index) => {
          // Determine the justification based on the slide's position relative to the active slide
          let justifyClass = "justify-center";
          if (index === active - 1 || (active === 0 && index === clients.length - 1)) {
            justifyClass = "justify-end";
          } else if (index === active + 1 || (active === clients.length - 1 && index === 0)) {
            justifyClass = "justify-start";
          }

          return (
            <SwiperSlide key={client.id}>
              <div className={`flex items-center transition-opacity duration-500 ease-in-out ${justifyClass} ${active === index ? "opacity-100" : "opacity-50"}`}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
