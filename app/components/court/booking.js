"use client";
import { ImUserCheck } from "react-icons/im";

const Booking = () => {
  return (
    <div className="container pb-[150px]">
      {/* title */}
      <div className="text-center">
        <h4 className="header-4-bold text-[#B68C5A]">our mission</h4>
        <h2 className="text-[#0C0C15] mt-[24px] about-title">
          our promise to you !
        </h2>

        <div className="flex justify-center  mt-[40px] mb-[56px] ">
          <p className="lg:w-[535px] w-full  text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
            Meet our dedicated legal team, committed to providing expert advice
            and achieving the best outcomes for our clients
          </p>
        </div>
      </div>
      {/* content */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
        <div className="rounded-[4px] bg-[#EFF5F5] py-[54px] px-[40px] group">
          <div className="flex items-center ">
            <div className="pe-[60px] border-r-[1.5px] w-fit border-[#D9CDCD] group-hover:border-[#B68C5A] duration-300 transition-all">
              <ImUserCheck className="text-[56px] text-[#0C0C15] group-hover:text-[#B68C5A] duration-300 transition-all" />
            </div>
            <div className="flex flex-col items-end sm:ps-[68px] ps-[30px]">
              <div>
                <p className="text-base font-normal capitalize font-[Lato] text-[#0C0C15] mb-[8px] group-hover:text-[#B68C5A] duration-300 transition-all">
                  Book
                </p>
                <p className="text-base font-bold capitalize font-[Lato] text-black group-hover:text-[#B68C5A] duration-300 transition-all">
                  my data
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[4px] bg-[#EFF5F5] py-[54px] px-[40px] group">
          <div className="flex items-center ">
            <div className="pe-[60px] border-r-[1.5px] w-fit border-[#D9CDCD] group-hover:border-[#B68C5A] duration-300 transition-all">
              <ImUserCheck className="text-[56px] text-[#0C0C15] group-hover:text-[#B68C5A] duration-300 transition-all" />
            </div>
            <div className="flex flex-col items-end sm:ps-[68px] ps-[30px]">
              <div>
                <p className="text-base font-normal capitalize font-[Lato] text-[#0C0C15] mb-[8px] group-hover:text-[#B68C5A] duration-300 transition-all">
                  Book
                </p>
                <p className="text-base font-bold capitalize font-[Lato] text-black group-hover:text-[#B68C5A] duration-300 transition-all">
                  my data
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[4px] bg-[#EFF5F5] py-[54px] px-[40px] group">
          <div className="flex items-center ">
            <div className="pe-[60px] border-r-[1.5px] w-fit border-[#D9CDCD] group-hover:border-[#B68C5A] duration-300 transition-all">
              <ImUserCheck className="text-[56px] text-[#0C0C15] group-hover:text-[#B68C5A] duration-300 transition-all" />
            </div>
            <div className="flex flex-col items-end sm:ps-[68px] ps-[30px]">
              <div>
                <p className="text-base font-normal capitalize font-[Lato] text-[#0C0C15] mb-[8px] group-hover:text-[#B68C5A] duration-300 transition-all">
                  Book
                </p>
                <p className="text-base font-bold capitalize font-[Lato] text-black group-hover:text-[#B68C5A] duration-300 transition-all">
                  my data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
