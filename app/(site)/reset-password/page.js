'use client';
import { Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { postResetPassword } from "@/app/helpers/backend";

const ResetPassword = () => {
    const router = useRouter()

    const handleSubmit = async (values) => {
        const payload = {
            ...values,
            token: localStorage.getItem('token')
        }
        const { error, msg, data } = await postResetPassword(payload)
        if (error) {
            message.error(msg)
        } else {
            message.success(msg)
            router.push('/login')
        }
    }

    return (
        <div>
            <div className="container">
                <div className="bg-formBG" >
                    <div className="my-16 md:my-36 py-24" >
                        <div className="lg:w-[648px] w-full mx-auto" >
                            <p className='text-center header_3 header_1 mb-8' >
                                Reset Your Password
                            </p>
                            <div className="divide-y ">
                                <div className="text-dark_text  sm:text-lg sm:leading-7">
                                    <Form layout="vertical" onFinish={handleSubmit}>
                                        <Form.Item
                                            name="password"
                                            label="New Password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input.Password placeholder='Enter Your Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
                                        </Form.Item>
                                        <Form.Item
                                            name="confirm_password"
                                            label="Re-type Password"
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please confirm your password!',
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password placeholder={'Confirm Your Password'} className=' focus:text-dark_text w-full border rounded-md h-10  pl-2' />
                                        </Form.Item>
                                        <button className=" w-full py-3 bg-primary text-white mb-5 uppercase font-bold">
                                            Reset
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;