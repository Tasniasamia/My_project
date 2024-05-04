'use client';
import React, { useEffect } from 'react'
import { Form, message } from 'antd'
import { updateUser } from '../../../helpers/backend';
import PhoneNumberInput from '../../form/phoneNumberInput';
import FormInput from '../../form/input';
import MultipleImageInput from '../../form/multiImage';
import Button from '../../common/button';

const AdminProfileEdit = ({ setEdit, user, getUser }) => {
    const [form] = Form.useForm();
    const i18n = useI18n();
    useEffect(() => {
        form.setFieldsValue({
            ...user,
            country: {
                value: user?.country?._id,
                label: user?.country?.name
            },
            image:
                user?.image?.length > 0
                    ? [
                        {
                            uid: '-1',
                            name: 'image.png',
                            status: 'done',
                            url: user?.image,
                        },
                    ]
                    : [],
        })
    }, [user])

    return (
        <div className='rounded-b-lg bg-white p-7 shadow-sm'>
            <div className='container mx-auto'>
                <Form layout="vertical" form={form} onFinish={
                    async (values) => {
                        const data = {
                            name: values.name,
                            email: values.email,
                            phone: values.phone
                        }
                        const res = await updateUser({
                            ...data,
                            image: values?.image?.length > 0 ? values?.image[0]?.originFileObj : null
                        })
                        if (res?.error === false) {
                            message.success('Profile updated Successfully')
                            getUser()
                            setEdit(false)
                        } else {
                            message.error(res?.message)
                        }
                    }
                }>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <FormInput name="name" label="Name" required />
                        <MultipleImageInput
                            name="image"
                            label={"Profile Picture"}
                            max={1}
                            required
                            style={{ backgroundColor: '#888AA0' }}
                            className="!bg-[#D2D2D2]"
                        />
                        <FormInput name="email" label="Email"readOnly style={{ backgroundColor: '#888AA0' }} className="!bg-[#D2D2D2]" />
                        <PhoneNumberInput name="phone" label='Phone Number' required={true} />
                    </div>
                    <Button variant="primary" className="mt-1">'Update'</Button>
                </Form>
            </div>

        </div>
    )
}

export default AdminProfileEdit