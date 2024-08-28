"use client";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="bg-[#EFF5F5] pt-[150px] mb-[150px]">
      <div className="container flex lg:flex-row flex-col lg:gap-0 gap-[40px]">
        <div className="lg:basis-1/2 basis-full flex flex-col items-center justify-end ">
          <Image
            src="/court/man.png"
            width={476}
            height={552}
            alt="hero"
            className="w-[476px] md:h-[552px] h-[400px] object-fill"
          />
        </div>
        <div className="md:basis-1/2 basis-full">
          <h4 className="header-4-bold text-[#B68C5A]">our mission</h4>
          <h2 className="text-[#0C0C15] mt-[24px] about-title">
            our promise to you !
          </h2>
          <p className="mt-[24px] text-[#5B5353] font-normal uppercase font-['Lato'] text-base line-height-[170%]">
            Our promise to you is unwavering and unmatched: relentless
            dedication, personalized attention, and a fierce pursuit of justice.
            From the moment you walk through our doors, your case becomes our
            top priority. We pledge to defend your rights with absolute
            integrity, transparency, and professionalism. No matter how
            challenging or complex your legal matter may be, we will stand by
            your side, fight tirelessly, and guide you every step of the way. We
            are committed to exploring every avenue and leaving no stone
            unturned to ensure your voice is heard. Our mission is not just to
            represent you but to partner with you in achieving the best possible
            outcome. With us, you gain a devoted ally who is deeply invested in
            your success and well-being. We promise a journey of advocacy marked
            by unwavering support and a relentless drive for justice, ensuring
            that you feel confident and secure throughout the entire process
          </p>
          <Image
            src="/court/signature.png"
            alt="hero"
            width={403}
            height={114}
            className="mt-[40px] w-auto h-auto object-fill"
          />
          <p className="text-[#5B5353] font-normal uppercase font-['Lato'] text-base mt-[10px]">
            founder & senior lawyer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
