"use client";
import Image from "next/image";
import food from "../../../public/food2.png";
import { FcGoogle } from "react-icons/fc";
import { Form, Input, Select } from "antd";

const Page = () => {
  const { Option } = Select;

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[40%] w-full xl:py-[60px] xl:px-[112px] px-[20px] bg-[#FFF9FA]">
        <h2 className="md:text-[50px] text-[40px] mb-[32px] text-[#0F0F0F] font-semibold text-center">
          Join Us!
        </h2>
        <button className="w-full bg-white rounded text-[#0F0F0F] flex items-center gap-x-2 py-[13px] justify-center">
          <FcGoogle size={16} />
          <span>Sign in Google</span>
        </button>
        <button className="w-full rounded text-[#0F0F0F] py-[13px] text-center text-[14px]">
          Sign In with your Email
        </button>
        <Form
          layout="vertical"
          onFinish={(value) => {
            console.log(value);
          }}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[24px]">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ require: true, message: "Please input your name" }]}
              className="lg:col-span-2 col-span-1 text-[#0F0F0F] font-semibold mb-[24px]"
            >
              <Input
                placeholder="Name"
                className="py-[15px] px-[16px] rounded-2xl"
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ require: true, message: "Please input your email" }]}
              className="lg:col-span-2 col-span-1 text-[#0F0F0F] font-semibold mb-[24px]"
            >
              <Input
                placeholder="Email Address"
                className="py-[15px] px-[16px] rounded-xl"
              />
            </Form.Item>
            <Form.Item
              label="Age"
              type="number"
              name="age"
              rules={[{ require: true, message: "Please input your age" }]}
              className=" text-[#0F0F0F] font-semibold mb-[24px]"
            >
              <Input
                placeholder="Email Address"
                className="h-[50px] rounded-xl"
              />
            </Form.Item>
            <Form.Item
              name={`gender`}
              label={`Gender`}
              className="rounded-xl"
              rules={[
                {
                  required: true,
                  message: "please select the gender",
                },
              ]}
            >
              <Select placeholder="Gender" className="rounded-xl h-[50px]">
                {" "}
                <Option value="1">Male</Option>
                <Option value="2">Female</Option>
                <Option value="3">Others</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ require: true, message: "Please input your password" }]}
              className="lg:col-span-2 col-span-1 text-[#0F0F0F] font-semibold mb-[24px]"
            >
              <Input.Password
                placeholder="Passoword"
                className="py-[15px] px-[16px] rounded-xl"
              />
            </Form.Item>
          </div>
          <Form.Item>
            <button className="w-full text-white rounded  py-[13px] text-center bg-[#F8991F] capitalize">
              <span>Join Us</span>
            </button>
          </Form.Item>
        </Form>
        <p className="text-[14px] text-center pb-[60px]">
          I have an account already.
          <span className="text-[#F8991F]">Log in</span>
        </p>
      </div>
      <Image
        src={food}
        width={792}
        height={845}
        className="lg:w-[60%] w-full object-fill h-[845px]"
      />
    </div>
  );
};

export default Page;
