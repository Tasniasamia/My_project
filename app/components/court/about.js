"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="py-[60px] bg-[#EFF5F5] mb-[150px]">
      <div className="container flex lg:flex-row flex-col gap-[120px]">
        <div className="lg:basis-1/2 basis-full">
          <Image
            src="/court/about.png"
            width={510}
            height={566}
            alt="hero"
            className="w-full h-[566px] object-fill"
          />
        </div>
        <div className="lg:basis-1/2 basis-full">
          <h4 className="header-4-bold text-[#B68C5A]">about us</h4>
          <h2 className="about-title2 text-[#0C0C15] md:w-[347px] w-full mt-[24px]">
            welcome to our law firm company
          </h2>
          <h3 className="about-subtitle my-[40px] text-[#0C0C15] md:w-[300px] w-full ps-[40px] border-l-[5px] border-[#B68C5A]">
            attorney general and criminal lawyer
          </h3>
          <p className="my-[40px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
            Our firm is committed to delivering justice with integrity and
            expertise. We provide personalized legal services, ensuring every
            client receives trusted guidance and dedicated support
          </p>
          <button className="cursor-pointer header-6 hover:bg-transparent duration-300 transition-all border border-[#B68C5A] hover:text-[#0C0C15]  text-white md:px-[32px] px-[16px] py-[16px] bg-[#B68C5A] rounded-[4px]">
            About Our Firm
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
