"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation,FreeMode} from "swiper/modules";
const Justice = () => {
  return (
    <div className="mb-[150px]">
      <div className="text-center">
        <h4 className="header-4-bold text-[#B68C5A]">our mission</h4>
        <h2 className="text-[#0C0C15] mt-[24px] about-title">
          our promise to you !
        </h2>
        <p className="mt-[40px] mb-[56px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
          Meet our dedicated legal team, committed to providing expert advice
          and achieving the best outcomes for our clients
        </p>
     
     
      </div>
      <Swiper
        slidesPerView={4}
        slidesPerGroupSkip={2}

        freeMode={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full"

        autoplay={{
          delay: 2500,
        }}
        modules={[Navigation,Autoplay,FreeMode]}
        // className="w-full "
      >
        <SwiperSlide>        
            <div className="h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>        
            <div className=" h-[480px] w-full relative group cursor-pointer">
            <Image src="/court/lawer.png" alt="justice" width={424} height={480} className="h-full w-full object-fill"/>
            <div className="justice w-full p-[32px] absolute bottom-[-100%]  group-hover:bottom-0  group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden">
              <h5 className="text-[18px] font-['Lato'] font-bold text-white">AlinaGAin</h5>
              <p className="text-sm font-['Lato'] font-normal mt-[12px] text-white">criminal Lawyer</p>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Justice;
