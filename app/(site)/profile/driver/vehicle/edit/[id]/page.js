'use client';
import React, { useEffect, useState } from 'react';
import { Card, Checkbox, Form, Switch, message } from 'antd';
import { useRouter } from 'next/navigation';
import { fetchVehicleCategories, patchVehicle, postVehicle, vehicleDetails } from '@/app/helpers/backend';
import FormInput, { HiddenInput } from '@/app/components/form/input';
import FormSelect from '@/app/components/form/select';
import MultipleImageInput from '@/app/components/form/multiImage';
import Button from '@/app/components/common/button';
import { useAction, useFetch } from '@/app/helpers/hooks';

const page = ({params}) => {
    const { push } = useRouter()
    const [form] = Form.useForm()
    const [categories, getCategories] = useFetch(fetchVehicleCategories);
    const [data,getData, {loading}]=useFetch(vehicleDetails,{});
    const [ac,setAc]=useState(false);
    const [online,setOnline]=useState(false);

    useEffect(() => {
        getData({
            _id: params.id
        })
    }, [params])

    useEffect(() => {
        if (data?._id) {
            setAc(data?.ac);
            setOnline(data?.online);
            form.setFieldsValue({
                ...data,
                images: data?.images?.map((d, index) => ({
                    uid: '-' + (index + 1),
                    name: `image${index}.png`,
                    status: 'done',
                    url: d
                })),
                documents: data?.documents?.map((d, index) => ({
                    uid: '-' + (index + 1),
                    name: `image${index}.png`,
                    status: 'done',
                    url: d
                })),
                category: data?.category?._id
            })
        }
    }, [data?._id])
    const onFinish =async (values) => {
        console.log(values)
        const imgArray = [];
        let docArray = [];

        const preImg = [];
        const preDoc = [];

        if (values?.images?.length > 0) {
            for (let i = 0; i < values?.images.length; i++) {
                values?.images[i]?.uid < 0
                    ? preImg.push(values?.images[i]?.url)
                    : imgArray.push(values?.images[i].originFileObj);
            }
        }

        if (values?.documents?.length > 0) {
            for (let i = 0; i < values?.documents.length; i++) {
                values?.documents[i]?.uid < 0
                    ? preDoc.push(values?.documents[i]?.url)
                    : docArray.push(values?.documents[i].originFileObj);
            }
        }

        values.images = imgArray;
        values.documents = docArray;
        if (preImg?.length > 0) {
            values.images = preImg;
        }
        if (preDoc?.length > 0) {
            values.documents = preDoc;
        }
      
        values.ac=ac ? true : false;
        values.online=online ? true : false;
        
        const {error,msg}=await patchVehicle(values);
        if(!error){
            getData()
            message.success(msg)
            push('/profile/driver/vehicle');
            
        }
        else{
            message.error(error);
        }
      }

    return (
        <div className='mx-4'>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <HiddenInput name="_id" />
                    <FormInput name="name" label="Vehicle Name" required />
                        {categories && (
                            <FormSelect
                                label="Vehicle Category"
                                name="category"
                                initialValue=""
                                options={categories?.categories?.map((cat) => ({
                                    label: cat?.name,
                                    value: cat?._id,
                                }))}
                            />
                        )}
                        <FormInput name="model" label="Vehicle Model" required className="border border-2" />
                        <FormInput name="year" label="Vehicle Year"  required />
                        <FormInput name="max_power" label="Max Power" required />
                        <FormInput name="max_speed" label="Max Speed" required />
                        <FormInput name="capacity" label="Capacity"  type="number" required />
                        <FormInput name="color" label="Color" required />
                        <FormInput name="fuel_type" label="Fuel Type" required />
                        <FormInput name="mileage" type="number" label="Mileage" required />
                        <FormSelect
                                label="Gear_type"
                                name="gear_type"
                                initialValue=""
                                options={[{
                                    label: "automatic",
                                    value: "automatic",
                                },
                                {
                                    label: "manual",
                                    value: "manual",
                                }]
                            }
                            />
                        <FormInput name="vehicle_number" label="Vehicle Number"  type="number" required />
                        <Checkbox checked={ac}
                        onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                            setAc(e.target.checked)
                          }}>
                           AC
                        </Checkbox>
                        <Checkbox checked={online}
                        onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                            setOnline(e.target.checked)
                          }}>
                           Online
                        </Checkbox>
                        <MultipleImageInput name="documents" label="Documents"max={4} />
                        <MultipleImageInput name="images" label="Images" max={4}/>
                    </div>
                    <Button type="primary" htmlType="submit">Update Vehicle</Button>
                </Form>
        </div>
    );
};

export default page;