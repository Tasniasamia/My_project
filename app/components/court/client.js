"use client";

import Image from "next/image";

const Client = () => {
  return (
    <div className="bg-[#EFF5F5] py-[60px]">
      <div className="container flex lg:flex-row flex-col justify-between ">
        <div className="lg:basis-1/2 basis-full h-[552px] relative  ">
          <Image
            src="/court/client.png"
            alt="client"
            width={463}
            height={552}
            className="lg:w-[463px] w-full h-full object-fill mt-[-34px] relative z-0"
          />
          <div className="lg:p-[40px] sm:p-[20px] p-[10px] bg-white client mt-[-34px] z-10 relative  sm:absolute w-full sm:w-[80%] md:w-[calc(100%-122px)] bottom-0 right-0">
            <h5 className="text-[24px] font-normal text-[#0C0C15] font-[Lato]">
              “The best team of movers”
            </h5>
            <p className="text-[16px] font-normal line-height-[24px] text-[#5B5353] font-[Lato] mt-[13px] lg:mb-[53px] mb-[10px] ">
              Lorem ipsum dolor sit amet, consectetr adipiscing elit. Vestibulum
              efficitur justo vitae sapien pellentesque porttitor.
            </p>
            <div>
              <p className="text-[#0C0C15] text-base font-medium line-height-[16.997px] font-[Lato]">
                Matt Cannon
              </p>
              <p className="text-[#0C0C15] text-[#5B5353] text-sm font-medium line-height-[16.997px] font-[Lato]">
                Civil Law
              </p>
            </div>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full  flex flex-col items-end">
          <div className="">
            <h4 className="header-4-bold text-[#B68C5A]">service</h4>
        
            <h2 className="text-[#0C0C15] mt-[24px] about-title mt-[24px]">
              Case Study
            </h2>
          <p className="mt-[40px] lg:w-[536px] w-full mb-[50px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%] ">
            Our legal services are designed to protect your rights and deliver
            results. With expertise across a range of practice areas, we provide
            personalized, professional support for every case.
          </p>
          <div className="flex gap-[10px] mt-[50px] items-center">
          <button className="cursor-pointer header-6 hover:bg-transparent duration-300 transition-all border border-[#B68C5A]   text-white md:px-[32px] px-[16px] py-[16px] bg-[#B68C5A] rounded-[4px]">
            Get Appoinment
          </button>
          <button className="cursor-pointer text-[16px] font-medium text-white md:px-[32px] px-[16px] py-[16px] border  hover:bg-[#B68C5A] duration-300 transition-all hover:border-[#B68C5A] rounded-[4px]">
            Learn More
          </button>
        </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Client;
