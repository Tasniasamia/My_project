import { Col, Row } from 'antd';
import React from 'react';

const PathBox = () => {
    return (
        <div > 
              <div className="container ">
      <div>
      <Row gutter={[8, 8]}>
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
          <div className=" text-white capitalize py-5 font-medium px-6 md:text-xl bg-amber-600 box-shape flex justify-center text-[14px] items-center">
            Schedule Ride
          </div>
        </Col>
       </Row>

      </div>
    
    </div>
        </div>
    );
};

export default PathBox;