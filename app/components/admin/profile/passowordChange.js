"use client"
import React from 'react'
import { Form, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import { updatePassword } from '@/app/helpers/backend'
import Button from '../../common/button'

const PasswordChange = () => {
    const [form] = Form.useForm()
    const { push } = useRouter()

    return (
        <div className=''>
            <div className='flex justify-center'>
                <div className='flex items-center justify-between w-4/5 md:w-3/5 py-4'>
                    <h1 className='text-2xl md:text-xl font-bold'>Change Password</h1>
                </div>
            </div>
            <hr className='border-Font2_Color w-full' />
            <div className=' w-4/5 md:w-3/5 mx-auto py-16'>

                <Form layout="vertical" form={form}
                    onFinish={async (values) => {
                        const { error, msg } = await updatePassword(values)
                        if (!error) {
                            localStorage.setItem('token', '')
                            message.success(msg)
                            push('/login')
                        } else {
                            message.error(msg)
                        }
                    }}
                >
                    <div>
                        <Form.Item
                            name="old_password"
                            label="Old Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your old password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='Enter Your Old Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
                        </Form.Item>
                        <Form.Item
                            name="new_password"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder='Enter Your New Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
                        </Form.Item>
                        <Form.Item
                            name="confirm_password"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('new_password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder='Confirm Your Password' className=' focus:text-dark_text w-full border rounded-md h-10  pl-2' />
                        </Form.Item>
                        <Button variant="primary" className="mt-1">{'Change Password'}</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default PasswordChange