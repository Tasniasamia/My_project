"use client";
import { useUser } from "@/app/contexts/user";
import { postLogin } from "@/app/helpers/backend";
import { Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { getUser } = useUser();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setError(null);
    const { error, msg, data } = await postLogin(values);
    if (error) {
      message.error(msg);
      setError(msg);
    } else {
      if (data?.role === "admin") {
        message.success(msg);
        localStorage.setItem("token", data.token);
        router.push("/admin/profile");
      }
      else if (data?.role === "driver") {
        localStorage.setItem("token", data.token);
        message.success(msg);
        getUser();
        router.push("/profile/driver");

      }

       else {
        localStorage.setItem("token", data.token);
        router.push("/profile/user");
       
      }
    }
  };



  return (
    <div className="container">
      <div className="bg-formBG xl:mx-60 lg:mx-40 px-2 md:px-10 xl:px-60 md:my-20 md:py-40 py-10">
        <div className="flex justify-center items-center mb-10">
          <p className="paragraph_2 mb-10">Welcome Back.</p>
        </div>
        <div className="text-center block w-full mb-10">
          <h1 className="relative inline-block text-gray2-200">
            <span className="bg-gray2-100 absolute h-[1px] w-10 top-[50%] -left-12 opacity-50"></span>
           Sign in with your email
            <span className="bg-gray2-100 absolute h-[1px] w-10 top-[50%] -right-12 opacity-50"></span>
          </h1>
        </div>
        <div className="">
         
          <Form onFinish={handleSubmit} layout="vertical" form={form}>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
                {
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            </Form.Item>

            <Form.Item
              name={"password"}
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                className="rounded-none p-2 bg-formBG border border-[#ebedf9]"
              />
            </Form.Item>

            <div className="mb-5">
              <Link href="/forget-password" className="text-primary">
               Forget Password?
              </Link>
            </div>

            <button className=" w-full py-3 bg-primary text-white">
              Login
            </button>
          </Form>
          <div className="text-center mt-3 text-[#828282] ">
            {" "}
            Create a New Account ?{" "}
            <Link href="/signup" className=" text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
