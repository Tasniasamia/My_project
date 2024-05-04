"use client";
import { Form, Input } from "antd";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const [form] = Form.useForm();



  return (
    <div className="bg-black w-full">
      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute h-full w-full">
            <img className="h-full w-full -z-10" src="/footer_red.png"></img>
          </div>
          <Form
            form={form}
            className="relative"
            onFinish={(values) => {
            console.log(values);
            form.resetFields();
            }}
          >
            <div className="md:w-[60%] mx-auto">
              <div>
                <p className=" text-white text-base font-thin font-['Mulish'] leading-relaxed pt-20 mb-5"  >
                Your Email
                </p>
                <Form.Item name="email" className="contact w-full">
                  <Input
                    variant="borderless"
                    autoComplete="off"
                    className="w-full  mb-5 outline-none bg-black text-white contact2"
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center w-full lg:w-[60%] gap-2.5">
                <div className="bg-violet-100 h-[1px] w-full opacity-40 lg:block hidden"></div>
                <div>
                  <button className="bg-rose-500 text-white text-lg font-['Mulish'] capitalize md:px-8 md:py-3.5 px-4 py-2 ">
                  Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5">
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                  <div className="text-red-600 text-xl font-normal font-['Nico Moji'] uppercase leading-loose">
                  Car2Go                  
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div>
                    <span className="text-white text-base font-bold font-['Mulish'] capitalize leading-relaxed">
                     Car2Go<br />
                    To Contact Us
                    </span>
                    <span className="text-white text-base font-bold font-['Mulish'] capitalize leading-relaxed">
                      {" "}
                    </span>
                    <span className="text-rose-500 text-base font-bold font-['Mulish'] capitalize leading-relaxed">
                     +088 123 128 5485
                    </span>
                  </div>
                  <div>
                    <span className="text-white text-base font-bold font-['Mulish'] capitalize leading-relaxed">
                      say in touch
                      <br />
                    </span>
                    <span className="text-stone-300 text-base font-bold font-['Mulish'] leading-relaxed">
                      info@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                  <div className="text-white text-xl font-bold font-['Mulish'] capitalize">
                    Quick links
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-4 flex">
                  <Link
                    href="/contact"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                   contact us
                  </Link>
                  <Link
                    href="/terms"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                   terms & conditions
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                 privacy & policy
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                  <div className="text-white text-xl font-bold font-['Mulish'] capitalize">
                    useful Link
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-4 flex">
                  <Link
                    href="/about"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                   About us
                  </Link>
                  <Link
                    href="/blog"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                   Blog
                  </Link>
                  <Link
                    href="/faq"
                    className="text-stone-300 text-base font-bold font-['Mulish'] capitalize leading-relaxed hover:text-primary"
                  >
                 FAQ’S
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
                  <div className="text-white text-xl font-bold font-['Mulish'] capitalize">
                    follow us
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="w-full text-white text-base font-normal font-['Mulish'] leading-relaxed">
                    Car2Go description
                  </div>
                </div>
                <div className="flex gap-7">
                  <a
                    target="_blank"
                    href="www.twitter.com"
                    className="text-white hover:text-primary"
                  >
                    <FaXTwitter className="text-white hover:text-primary" />
                  </a>
                  <a
                    target="_blank"
                    href="www.facebook.com"
                    className="text-white hover:text-primary"
                  >
                    <FaFacebookF className="text-white hover:text-primary" />
                  </a>
                  <a
                    target="_blank"
                    href="www.linkedin.com"
                    className="text-white hover:text-primary"
                  >
                    <FaLinkedinIn className="text-white hover:text-primary" />
                  </a>
                  <a
                    target="_blank"
                    href="www.instagram.com"
                    className="text-white hover:text-primary"
                  >
                    <FaInstagram className="text-white hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <hr className="opacity-20 mb-5"></hr>
        <div className="flex flex-col items-center justify-center gap-1 pb-5">
          <p className="text-white text-base font-bold font-['Mulish'] capitalize leading-relaxed">
            Copyright ©_<span>{new Date().getFullYear()}</span>Car2Go
          </p>
          <br />
          <p className='text-white'>
            <Link href='https://appstick.com.bd/' target="_blank">Developed By<span className='text-primary'>Appstick</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
