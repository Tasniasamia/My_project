import { Col, Row } from "antd";
import React from "react";

const Page = () => {
  return (
    // <div className="container grid grid-flow-col auto-cols-fr gap-4">
    //   <div className="w-[300px] h-[60px] text-white capitalize text-[18px] bg-amber-600 box-shape flex justify-center items-center">
    //     Schedule Ride
    //   </div>
    //   <div className="w-[300px] h-[60px] text-white capitalize text-[18px] bg-amber-600 box-shape flex justify-center items-center">
    //     Schedule Ride
    //   </div>
    //   <div className="w-[300px] h-[60px] text-white capitalize text-[18px] bg-amber-600 box-shape flex justify-center items-center">
    //     Hire A Driver
    //   </div>
    // </div>
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px] bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px] bg-amber-600 box-shape flex justify-center items-center">
            Hire A Driver{" "}
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl bg-amber-600 box-shape flex justify-center text-[14px] items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px]  bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px]  bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px]  bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px]  bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
        <Col md={6} sm={8} xs={12} className="gutter-row">
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl text-[14px]  bg-amber-600 box-shape flex justify-center items-center">
            Schedule Ride
          </div>
        </Col>
       
      </Row>
    </div>
  );
};

export default Page;
