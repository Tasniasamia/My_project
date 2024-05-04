"use client";
import React from "react";
import { Form, Input, message } from "antd";
import { sendOtp } from "@/app/helpers/backend";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="bg-formBG xl:mx-60 lg:mx-40 px-2 md:px-10 xl:px-60 my-20 py-40">
        <div className="flex flex-col justify-start items-start mb-10">
          <p className="paragraph_2 mb-5">Forgot Your Password</p>
          <p className="text-gray2-100">
            Please confirm your email address below and we will send you a verification code
          </p>
        </div>

        <div className="">
          <Form onFinish={async (values) => {

            if (values?.email) {
              const { error, msg, data } = await sendOtp({ email: values?.email, action: 'forgot_password'});
              if (error) {
                return message.error(msg);
              } else {
                message.success(`OTP sent to ${values?.email}`);
                router.push(`/otp?email=${values?.email}`);
              }
            }
          }} layout="vertical">
            <Form.Item name={"email"} label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                }]}>
              <Input className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            </Form.Item>

            <button className=" w-full py-3 bg-primary text-white mb-5">
             Continue
            </button>

            <div className="mb-5 flex justify-center items-center gap-2">
              <p className="text-gray2-200">Already have an account?</p>
              <a href="" className="text-primary">
                Sign in now!
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
