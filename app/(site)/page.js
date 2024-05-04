"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rate } from "antd";
import client from "../../public/client.png";
import Image from "next/image";
const Page = () => {
  return (
    <div className="bg-[#e3e3e3]">
    <div className="max-w-[1320px] mx-auto lg:px-0 p-2  py-20 swipe_slide">
      <div className="flex lg:flex-row flex-col justify-between lg:items-end items-center ">
        <div>
          <h1 className="lg:text-[50px] text-[32px] text-[#0F0F0F] font-bold lg:text-start text-center">
            What people say..
          </h1>
          <p className="md:text-[20px] text-[#969BA0] lg:text-start text-center">
            This can be detailed description or just a short text.
          </p>
        </div>
        <div className="lg:block hidden">
          <button className=" px-[24px] py-[16px] bg-[#F8991F] text-white rounded lg:mt-0 mt-4 lg:mx-0 mx-8">
            See More
          </button>
        </div>
      </div>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        modules={[Pagination]}
        bulletActiveClass='swiper-pagination-bullet-active'
      >
        <SwiperSlide>
          <div className="bg-white md:p-[36px] p-[15px] mt-[50px] mb-[35px] rounded-xl shadow-sm">
            <Rate disabled defaultValue={2} style={{ color: "#F8991F" }} />
            <p className="lg:text-[20px] my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="flex gap-x-[12px] items-end">
              <Image
                src={client}
                height={65}
                width={65}
                className="h-[65px] w-[65px] object fill rounded-full"
              />
              <div>
                <h2 className="text-[18px] text-[#0F0F0F] mb-2">Angela Karamoy</h2>
                <h2 className="text-[#969BA0]">Happy Customer</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white md:p-[36px] p-[15px] mt-[50px] mb-[35px] rounded-xl shadow-sm">
            <Rate disabled defaultValue={2} style={{ color: "#F8991F" }} />
            <p className="lg:text-[20px] my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="flex gap-x-[12px] items-end">
              <Image
                src={client}
                height={65}
                width={65}
                className="h-[65px] w-[65px] object fill rounded-full"
              />
              <div>
                <h2 className="text-[18px] text-[#0F0F0F] mb-2">Angela Karamoy</h2>
                <h2 className="text-[#969BA0]">Happy Customer</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white md:p-[36px] p-[15px] mt-[50px] mb-[35px] rounded-xl shadow-sm">
            <Rate disabled defaultValue={2} style={{ color: "#F8991F" }} />
            <p className="lg:text-[20px] my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="flex gap-x-[12px] items-end">
              <Image
                src={client}
                height={65}
                width={65}
                className="h-[65px] w-[65px] object fill rounded-full"
              />
              <div>
                <h2 className="text-[18px] text-[#0F0F0F] mb-2">Angela Karamoy</h2>
                <h2 className="text-[#969BA0]">Happy Customer</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white md:p-[36px] p-[15px] mt-[50px] mb-[35px] rounded-xl shadow-sm">
            <Rate disabled defaultValue={2} style={{ color: "#F8991F" }} />
            <p className="lg:text-[20px] my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="flex gap-x-[12px] items-end">
              <Image
                src={client}
                height={65}
                width={65}
                className="h-[65px] w-[65px] object fill rounded-full"
              />
              <div>
                <h2 className="text-[18px] text-[#0F0F0F] mb-2">Angela Karamoy</h2>
                <h2 className="text-[#969BA0]">Happy Customer</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="lg:hidden flex justify-center my-4">
          <button className=" px-[24px] py-[16px] bg-[#F8991F] text-white rounded lg:mt-0 mt-4 lg:mx-0 mx-4">
            See More
          </button>
        </div>
    </div>
    </div>
  );
};

export default Page;
