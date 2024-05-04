"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { RiHome4Fill } from "react-icons/ri";

const Banner = ({ path, product }) => {

  return (
    <div className="bg-background1 py-[60px] lg:py-[150px]">
      <div className="container ">
        <h1 className="text-center header_1 text-white capitalize">{path}</h1>
        <div className="mt-[13.5px]  flex gap-2 items-center justify-center">
          <Link
            href="/"
            className="text-primary flex gap-2 items-center cursor-pointer"
          >
          <RiHome4Fill style={{ color: "#FE4651" }} />
            Home
          </Link>
          <FaAngleRight style={{ color: "white" }} />
          <h6 className="text-white capitalize">{product ? product : path}</h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
