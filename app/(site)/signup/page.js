"use client";
import PhoneNumberInput from "@/app/components/form/phoneNumberInput";
import { useUser } from "@/app/contexts/user";
import { postRegister, sendOtp } from "@/app/helpers/backend";
import { Form, Input, Modal, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useTimer } from "use-timer";

const CreateAccount = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [value, setValue] = useState("user");
  const [otpModal, setOtpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [registrationValues, setRegistrationValues] = useState({});
  const [loadingRequrest, setLoadingRequest] = useState(false);
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 150,
    timerType: "DECREMENTAL",
  });

  const { getUser } = useUser();

  useEffect(() => {
    if (email) {
      start();
    }
    if (time === 0) pause();
  }, [time, start, pause, email]);

  const inputSubmit = async (values) => {
    if (!!values?.email) {
      setEmail(values?.email);
      const { error, msg, data } = await sendOtp({
        email: values?.email,
        action: "registration",
      });
      if (error) {
        return message.error(msg);
      } else {
        setOtpModal(true);
        values.role = values?.radio || "user";
        setRegistrationValues(values);
      }
    }
  };
  const handleResendOTP = async () => {
    const res = await sendOtp({ email: email, action: "registration" });
    if (res?.error === false) {
      message.success(res.msg);
      reset();
    } else {
      message.error(res.msg);
    }
  };
  return (
    <div className="container">
      <div className="bg-formBG xl:mx-60 lg:mx-40 px-2 md:px-10 xl:px-60 md:my-20 md:py-40 py-10">
        <div className="flex justify-center items-center mb-10">
          <p className="paragraph_2 mb-2">Join Us</p>
        </div>
       
        <div className="">
          <Form onFinish={inputSubmit} layout="vertical">
            <div className="flex justify-center">
              <h1 className="relative inline-block text-gray2-200 mt-2 mb-[32px] ">
                <span className="bg-gray2-100 absolute h-[1px] w-10 top-[50%] -left-12 opacity-50"></span>
                Sign in with your email
                <span className="bg-gray2-100 absolute h-[1px] w-10 top-[50%] -right-12 opacity-50"></span>
              </h1>
            </div>
            <Form.Item
              name={"name"}
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your User Name!",
                },
                {
                  pattern: /^[^\d]+$/,
                  message: "Name cannot be a number!",
                },
              ]}
            >
              <Input className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            </Form.Item>
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
            <PhoneNumberInput name="phone" label={'Phone Number'} required={true} className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  validator: (_, value) => {
                    if (value && value.length !== 6) {
                      return Promise.reject("Password length must be 6 characters!");
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input.Password className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            </Form.Item>
            <Form.Item
              name={"confirm_password"}
              label={"Retype Password"}
              rules={[
                {
                  required: true,
                  message: "Please input the password again",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        
                          "The new password that you entered do not match!"
                        
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password className="rounded-none p-2 bg-formBG border border-[#ebedf9]" />
            </Form.Item>
            <button className=" w-full py-3 bg-primary text-white mb-5">
              Continue
            </button>
            <div className="mb-5 flex justify-center items-center gap-2">
              <p className="text-gray2-200">
              Already have an account?
              </p>
              <Link href="/login" className="text-primary">
                Sign in now!
              </Link>
            </div>
          </Form>

          <Modal
            open={otpModal}
            onCancel={() => setOtpModal(false)}
            footer={null}
            width={1000}
          >
            <div className=" w-4/5 md:w-3/5 mx-auto py-20">
              <div className="flex flex-col justify-center items-center mb-10">
                <p className="paragraph_2 mb-5">Verify Code</p>
                <p className="text-gray2-100 text-center">
                OTP code send to this
                  <span className="text-primary"> {email} </span>
                 email account.
                </p>
              </div>
              <Form
                name="basic"
                className="max-w-[360px] mx-auto"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={async (values) => {
                  setLoadingRequest(true)
                  if (!!values?.otp) {
                    setOtpModal(false);
                    const payload = {
                      ...registrationValues,
                      otp: values?.otp,
                    };
                    const { error, msg, data } = await postRegister(payload);
                    if (error) {
                      setLoadingRequest(false)
                      return message.error(msg);
                    } else {
                      setOtpModal(false);
                      if (data?.role === "driver") {
                        setLoadingRequest(false)
                        router.push("/profile/driver");
                        localStorage.setItem("token", data.token);
                        message.success(msg);
                      } else if (data?.role === "admin") {
                        setLoadingRequest(false)
                        router.push("/admin/profile");
                        localStorage.setItem("token", data.token);
                        message.success(msg);
                      } else {
                        setLoadingRequest(false)
                        router.push("/profile/user");
                        localStorage.setItem("token", data.token);
                        getUser();
                        message.success(msg);
                      }
                    }
                  }
                }}
              >
                <Form.Item name="otp" className="my-8">
                  <OTPInput
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      width: "50px",
                      height: "48px",
                      marginRight: "1rem",
                      fontSize: "20px",
                      border: "1px solid #F79C39",
                      outline: "none",
                    }}
                  />
                </Form.Item>
                <p className="dark:text-White_Color">
                  {time === 0 ? (
                    <span
                      className="text-primary cursor-pointer"
                      onClick={async () => {
                        const { error, msg } = await sendOtp({
                          email: email,
                          action: "registration",
                        });
                        if (error) return message.error(msg);
                        message.success(msg);
                        reset();
                        start();
                      }}
                    >
                      Your OTP has expired.{" "}<span className="text-blue-400"onClick={handleResendOTP}>Resend OTP</span> 
                    </span>
                  ) : (
                    <span className="text-primary">
                      Your OTP will expire in {" "}
                      {time}s
                    </span>
                  )}
                </p>
                <button className="bg-primary w-full text-white h-10 rounded-md mt-4 button_paragraph">
                  Verify
                </button>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
