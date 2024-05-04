"use client";
import { postVerifyOtp, sendOtp } from "@/app/helpers/backend";
import { Form, message } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useTimer } from "use-timer";

const OTP = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userEmail = params.get("email");
  const [otp, setOtp] = useState("");
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 150,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    if (params.get("email")) {
      start();
    }
    if (time === 0) pause();
  }, [time, start, pause, reset, userEmail]);

  const handleResendOTP = async () => {
    const res = await sendOtp({ email: userEmail, action: "forgot_password" });
    if (res?.error === false) {
      message.success(res.msg);
      reset();
    } else {
      message.error(res.msg);
    }
  };

  return (
    <div className="container">
      <div className="bg-formBG xl:mx-60 lg:mx-40 px-2 md:px-10 xl:px-60 my-20 py-40">
        <div className="flex flex-col justify-center items-center mb-10">
          <p className="paragraph_2 mb-5">Verify Code</p>
          <p className="text-gray2-100 text-center">
            OTP code send to this
            <span className="text-primary"> {userEmail} </span>
             email account.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Form
            onFinish={async (values) => {
              console.log("otp", otp);
              const { error, msg, data } = await postVerifyOtp({
                email: params.get("email"),
                otp: values?.otp,
                action: "forgot_password",
              });
              if (error) {
                return message.error(msg);
              } else {
                message.success(msg);
                localStorage.setItem("token", data.token);
                router.push("/reset-password");
              }
            }}
            layout="vertical"
          >
            <div className="mb-5 gg">
              <Form.Item
                name="otp"
                rules={[
                  { required: true, message: "Please input your OTP!" },
                  {
                    pattern: /^\d+$/,
                    message: "OTP must contain only numbers!",
                  },
                ]}
              >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span className="mr-2"></span>}
                  renderInput={(props) => <input {...props} />}
                />
              </Form.Item>
            </div>
            {time === 0 ? (
              <p className="text-red-500 mb-3">
                Your OTP has expired.{" "}
                <span
                  onClick={handleResendOTP}
                  className="text-blue-400 underline font-bold cursor-pointer"
                >
                  Resend OTP
                </span>
              </p>
            ) : (
              <div className="text-center text-primary mb-3">
                <p>
                  Your OTP will expire in {time} min
                </p>
              </div>
            )}
            <button className=" w-full py-3 bg-primary text-white mb-5">
              Verify OTP
            </button>
          </Form>
        </div>
        <div className="mb-5 flex justify-center items-center gap-2">
          <p className="text-gray2-200">Already have an account?</p>
          <Link href="/login" className="text-primary">
            Sign in now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OTP;