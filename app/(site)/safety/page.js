import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="md:mb-[100px]">
     <div className="md:mt-[100px] mt-[50px] flex lg:flex-row  flex-col items-center  lg:gap-x-[110px] bg-[#F4F4F4]  gap-y-[24px] 
    px-3 md:px-5 xl:px-0">
      <div className="lg:w-1/2 w-full lg:ps-[80px] 2xl:ps-[300px] ">
        <h3 className="text-[24px] font-medium text-[#292B49] mb-[12px] capitalize">
          Car2Go rides are now covered by insurance
        </h3>
        <p className="text-[14px] pb-[20px] text-[#292B49] border-b-[1px]">
          Not sure if you’re eligible to be a rider? If you have the following,
          you can join us!
        </p>
        <p className="text-[#888AA0] font-normal mt-[26px] xl:text-[16px] text-[14px]  w-full ">
         It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>
      <div className=" lg:w-1/2 w-full">
        <Image
          src="/group.png"
          width={905}
          height={485}
          className=" lg:h-[485px] w-full h-[285px] object-fill"
        />
      </div>
    </div>
    <div className="md:mt-[100px] mt-[50px] flex lg:flex-row  flex-col items-center  lg:gap-x-[110px] bg-[#F4F4F4]  gap-y-[24px] 
    px-3 md:px-5 xl:px-0">
       <div className=" lg:w-1/2 w-full">
        <Image
          src="/group.png"
          width={905}
          height={485}
          className=" lg:h-[485px] w-full h-[285px] object-fill"
        />
      </div>
      <div className="lg:w-1/2 w-full xl:pe-[70px] 2xl:pe-[300px] ">
        <h3 className="text-[24px] font-medium text-[#292B49] mb-[12px] capitalize">
        Safety of Captains
        </h3>
        <p className="text-[14px] pb-[20px] text-[#292B49] border-b-[1px]">
          Not sure if you’re eligible to be a rider? If you have the following,
          you can join us!
        </p>
        <p className="text-[#888AA0] font-normal mt-[26px] xl:text-[16px] text-[14px]  w-full ">
         It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>
     
    </div>
    <div className="md:mt-[100px] mt-[50px] flex lg:flex-row  flex-col items-center  lg:gap-x-[110px] bg-[#F4F4F4]  gap-y-[24px] 
    px-3 md:px-5 xl:px-0">
      <div className="lg:w-1/2 w-full xl:ps-[80px] 2xl:ps-[300px] ">
        <h3 className="text-[24px] font-medium text-[#292B49] mb-[12px] capitalize">
          Car2Go rides are now covered by insurance
        </h3>
        <p className="text-[14px] pb-[20px] text-[#292B49] border-b-[1px]">
          Not sure if you’re eligible to be a rider? If you have the following,
          you can join us!
        </p>
        <p className="text-[#888AA0] font-normal mt-[26px] xl:text-[16px] text-[14px]  w-full ">
         It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>
      <div className=" lg:w-1/2 w-full">
        <Image
          src="/group.png"
          width={905}
          height={485}
          className=" lg:h-[485px] w-full h-[285px] object-fill"
        />
      </div>
    </div>
    </div>
  
  );
};

export default page;
