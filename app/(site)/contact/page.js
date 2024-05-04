"use client";
import React from "react";
import phone from "../../../public/phone.png";
import email from "../../../public/email.png";
import location from "../../../public/location.png";
import Image from "next/image";
import facebook from "../../../public/facebook.png";
import x from "../../../public/x.png";
import linkedin from "../../../public/linkedin.png";
import tax from "../../../public/tax.png";
import { Form, Input } from "antd";

const contact = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <h1>Banner</h1>
      <div className="md:my-[100px] my-[50px] grid lg:grid-cols-2 gap-x-[24px] lg:gap-y-0 gap-y-[24px] grid-cols-1 lg:px-0 px-2">
        <div className="py-[40px] lg:ps-[40px] lg:pe-[50px] ps-[20px] pe-[20px] shadow-custom  rounded-xl">
          <h3 className="text-[24px] text-[#292B49] mb-[24px] font-medium capitalize">
            Contact information
          </h3>
          <p className="text-[#888AA0] mb-[16px]">
            Could you please clarify what you mean by "contact"? Are you looking
            for contact information for a specific individual, business,
          </p>
          <div>
            <div className="flex gap-x-2 border-b-[1px] py-[24px]">
              <Image
                src={phone}
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-fill"
              />
              <div className="">
                <h6 className="text-[#888AA0] mb-[8px]">Contact Phone</h6>
                <h6 className="text-[#292B49]">+005-2345-6859</h6>
              </div>
            </div>
            <div className="flex gap-x-2 border-b-[1px] py-[24px]">
              <Image
                src={email}
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-fill"
              />
              <div className="">
                <h6 className="text-[#888AA0] mb-[8px]">Contact Email</h6>
                <h6 className="text-[#292B49]">support@gmail.com</h6>
              </div>
            </div>
            <div className="flex gap-x-2 border-b-[1px] py-[24px]">
              <Image
                src={location}
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-fill"
              />
              <div className="">
                <h6 className="text-[#888AA0] mb-[8px]">Location</h6>
                <h6 className="text-[#888AA0] md:w-[320px] w-full">
                  4 apt. Flawing Street. The Grand Avenue.Liverpool, UK 33342
                </h6>
              </div>
            </div>
          </div>
          <div className="pt-[24px] flex gap-x-[16px] items-center">
            <h3 className="text-[#888AA0] w-[78px]">Follow us :</h3>
            <Image
              src={facebook}
              width={44}
              height={44}
              className="h-[44px] w-[44px] object-fill"
            />
            <Image
              src={x}
              width={44}
              height={44}
              className="h-[44px] w-[44px] object-fill"
            />
            <Image
              src={linkedin}
              width={44}
              height={44}
              className="h-[44px] w-[44px] object-fill"
            />
            <Image
              src={tax}
              width={44}
              height={44}
              className="h-[44px] w-[44px] object-fill"
            />
          </div>
        </div>
        <div className="py-[40px] lg:ps-[40px] lg:pe-[50px] ps-[20px] pe-[20px] shadow-custom  rounded-xl ">
          <h3 className="text-[24px] text-[#292B49] mb-[24px] font-medium capitalize">
            Send a message
          </h3>
          <p className="text-[#888AA0] mb-[16px]">
            Could you please clarify what you mean by "contact"? Are you looking
            for contact information for a specific individual, business,
          </p>

          <Form
            className=""
            layout="vertical"
            onFinish={(value) => {
              console.log(value);
            }}
          >
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-[24px]">
              <Form.Item
                name="name"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  placeholder="Name:"
                  className="pt-[15px] ps-[12px] pb-[16px] border-[1px] rounded "
                />
              </Form.Item>
              <Form.Item
                name="phone"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  placeholder="Phone:"
                  className="pt-[15px] ps-[12px] pb-[16px] border-[1px] rounded "
                />
              </Form.Item>
              <Form.Item
                name="email"
                className="w-full md:col-span-2 col-span-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  placeholder="Email Address:"
                  className="pt-[15px] ps-[12px] pb-[16px] border-[1px] rounded "
                />
              </Form.Item>

              <Form.Item
                className="md:col-span-2 col-span-1"
                name="TextArea"
                rules={[
                  {
                    required: true,
                    message: "Please write your message!",
                  },
                ]}
              >
                <Input.TextArea
                  className="border-[1px] rounded h-[127px] "
                  placeholder="Write Message"
                  maxLength={100}
                  style={{
                    height: 127,
                    resize: "none",
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item>
              <button
                type="submit" // <-- Set type to "submit"
                className="bg-[#186F65] text-white px-[26px] py-[13px] rounded mt-[30px] capitalize text-[18px] font-medium cursor-pointer"
              >
                submit now{" "}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default contact;
