'use client'
import { updatePassword } from '@/app/helpers/backend';
import { Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

const ChangePassword = () => {
    const router = useRouter();
    const [form] = Form.useForm();

    const handlePassword = async (values) => {
        const postData = {
            old_password: values.old_password,
            new_password: values.new_password,
            confirm_password: values.confirm_password
        }
        const res = await updatePassword(postData);
        if (res?.error === false) {
            message.success(res.msg);
            localStorage.removeItem('token');
            window.location.reload();
            router.push('/login');
        } else {
            message.error(res.msg);
        }

    }

    return (
        <div className='p-4'>
            <h2 className='header_2 text-[#2b2b2b] font-bold capitalize'>Change Password</h2>
            <Form onFinish={handlePassword} form={form} className='mt-6'>

                <Form.Item
                    name="old_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Current Password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Current Password *"
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <Form.Item
                    name="new_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your New Password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="New Password *"
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Retype_New Password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Retype New Password *"
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <button
                    htmltype="submit"
                    className="uppercase text-white bg-primary px-[32px] py-[14px] mb-[40px]"
                >
                    Change Password
                </button>
            </Form>
        </div>
    );
};

export default ChangePassword;