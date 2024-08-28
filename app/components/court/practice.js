"use client";
import { GoLaw } from "react-icons/go";
import { GiClawHammer } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { PiBookOpenText } from "react-icons/pi";

const Practice = () => {
  return (
    <div className="container ">
      {/* title */}
      <div>
        <h4 className="header-4-bold text-[#B68C5A]">service</h4>
        <h2 className="text-[#0C0C15] mt-[24px] about-title mt-[24px]">
          our practice Area
        </h2>
        <p className="mt-[40px] lg:w-[536px] w-full mb-[56px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
          Our legal services are designed to protect your rights and deliver
          results. With expertise across a range of practice areas, we provide
          personalized, professional support for every case.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]  ">
          <div className="group cursor-pointer practice bg-[#EFF5F5] hover:bg-[#B68C5A] px-[24px] py-[32px] rounded-[4px] border border-[#E4D7D7] duration-300 transition-all">
            <GoLaw className="text-[50px] group-hover:text-white duration-300 transition-all  text-[#0C0C15] group-hover:text-white" />
            <h4 className="header-4-line1 text-[#0C0C15] mt-[44px] mb-[40px]  group-hover:text-white duration-300 transition-all ">
              Law Family
            </h4>
            <p className="font-normal font-['Lato'] text-base text-[#0C0C15]  group-hover:text-white duration-300 transition-all ">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ut vitae
              eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut
              lobortis purus diam, vitae lobortis velit auctor sit amet{" "}
            </p>
          </div>
          <div className="group  cursor-pointer  practice bg-[#EFF5F5] hover:bg-[#B68C5A] px-[24px] py-[32px] rounded-[4px] border border-[#E4D7D7] duration-300 transition-all">
            <GiClawHammer className="text-[50px] group-hover:text-white duration-300 transition-all  text-[#0C0C15] group-hover:text-white" />
            <h4 className="header-4-line1 text-[#0C0C15] mt-[44px] mb-[40px]  group-hover:text-white duration-300 transition-all ">
              Law Criminal
            </h4>
            <p className="font-normal font-['Lato'] text-base text-[#0C0C15]  group-hover:text-white duration-300 transition-all ">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ut vitae
              eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut
              lobortis purus diam, vitae lobortis velit auctor sit amet{" "}
            </p>
          </div>
          <div className="group  cursor-pointer  practice bg-[#EFF5F5] hover:bg-[#B68C5A] px-[24px] py-[32px] rounded-[4px] border border-[#E4D7D7] duration-300 transition-all">
            <IoHome className="text-[50px] group-hover:text-white duration-300 transition-all  text-[#0C0C15] group-hover:text-white" />
            <h4 className="header-4-line1 text-[#0C0C15] mt-[44px] mb-[40px]  group-hover:text-white duration-300 transition-all ">
              Law Real-Estate
            </h4>
            <p className="font-normal font-['Lato'] text-base text-[#0C0C15]  group-hover:text-white duration-300 transition-all ">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ut vitae
              eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut
              lobortis purus diam, vitae lobortis velit auctor sit amet{" "}
            </p>
          </div>
          <div className="group  cursor-pointer  practice bg-[#EFF5F5] hover:bg-[#B68C5A] px-[24px] py-[32px] rounded-[4px] border border-[#E4D7D7] duration-300 transition-all">
            <PiBookOpenText className="text-[50px] group-hover:text-white duration-300 transition-all  text-[#0C0C15] group-hover:text-white" />
            <h4 className="header-4-line1 text-[#0C0C15] mt-[44px] mb-[40px]  group-hover:text-white duration-300 transition-all ">
              Law Professional Advice
            </h4>
            <p className="font-normal font-['Lato'] text-base text-[#0C0C15]  group-hover:text-white duration-300 transition-all ">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ut vitae
              eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut
              lobortis purus diam, vitae lobortis velit auctor sit amet{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-[50px] mb-[130px]">
          <button className="cursor-pointer header-6 hover:bg-transparent duration-300 transition-all border border-[#B68C5A] hover:text-[#0C0C15]  text-white md:px-[32px] px-[16px] py-[16px] bg-[#B68C5A] rounded-[4px]">
            view all service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
