"use client";

import Image from "next/image";
import { FaClock } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="container py-[130px]">
      <h4 className="header-4-bold text-[#B68C5A]">service</h4>
      <h2 className="text-[#0C0C15] mt-[24px] about-title mt-[24px]">
        Case Study
      </h2>
      <p className="mt-[56px] lg:w-[536px] w-full mb-[85px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
        Our legal services are designed to protect your rights and deliver
        results. With expertise across a range of practice areas, we provide
        personalized, professional support for every case.
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[24px]">
        <div className="lg:col-span-2 col-span-1 grid grid-cols-1 gap-[24px]">
          <div className="px-[26px] py-[15px] bg-[#EFF5F5] rounded-[8px]">
            <button className="px-[15px] py-[10px] bg-[#B68C5A] text-white rounded-[4px] cursor-pointer font-normal font-['Lato'] text-xs">
              Read More
            </button>
            <p className="pt-[16px] text-[#021C1B] blog-text">
              10 Essential Legal Rights You Should Be Aware of: Protecting
              Yourself and Navigating Complex Legal Situations with Confidence
            </p>
          </div>
          <div className="px-[26px] py-[15px] bg-[#EFF5F5] rounded-[8px]">
            <button className="px-[15px] py-[10px] bg-[#B68C5A] text-white rounded-[4px] cursor-pointer font-normal font-['Lato'] text-xs">
              Read More
            </button>
            <p className="pt-[16px] text-[#021C1B] blog-text">
              10 Essential Legal Rights You Should Be Aware of: Protecting
              Yourself and Navigating Complex Legal Situations with Confidence
            </p>
          </div>
          <div className="px-[26px] py-[15px] bg-[#EFF5F5] rounded-[8px]">
            <button className="px-[15px] py-[10px] bg-[#B68C5A] text-white rounded-[4px] cursor-pointer font-normal font-['Lato'] text-xs">
              Read More
            </button>
            <p className="pt-[16px] text-[#021C1B] blog-text">
              10 Essential Legal Rights You Should Be Aware of: Protecting
              Yourself and Navigating Complex Legal Situations with Confidence
            </p>
          </div>
          <div className="px-[26px] py-[15px] bg-[#EFF5F5] rounded-[8px]">
            <button className="px-[15px] py-[10px] bg-[#B68C5A] text-white rounded-[4px] cursor-pointer font-normal font-['Lato'] text-xs">
              Read More
            </button>
            <p className="pt-[16px] text-[#021C1B] blog-text">
              10 Essential Legal Rights You Should Be Aware of: Protecting
              Yourself and Navigating Complex Legal Situations with Confidence
            </p>
          </div>
        </div>
        <div className="col-span-1 p-[20px] bg-[#EFF5F5]">
          <Image
            src="/court/blog.png"
            width={455}
            height={327}
            alt="blog"
            className="rounded-[8px] w-full md:h-[327px] h-[250px] object-fill"
          />
          <button className="mt-[28px] py-[10px] px-[15px] bg-[#B68C5A] text-white rounded-[4px] cursor-pointer font-normal font-['Lato'] text-xs">
            Read More
          </button>
          <p className="text-[#021C1B] my-[26px] text-[18px] font-semibold font-[Lato] lowercase line-height-[130%]">
            Key Legal Rights Every Individual Should Know: A Guide to Protecting
            Yourself
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-[6px] items-center">
              <Image
                src="/court/image.png"
                width={30}
                height={30}
                alt="image"
                className="w-[30px] h-[30px] object-fill rounded-[30px]"
              />
              <span className="text-base font-normal font-[Lato] text-[#021C1B] capitalize">Antony Das</span>
            </div>
            <div className="flex gap-[6px] items-center">
              <FaClock className="text-[15.22px] text-[#B68C5A]"
              />
              <span className="text-base font-normal font-[Lato] text-[#021C1B] uppercase">10 min to read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
