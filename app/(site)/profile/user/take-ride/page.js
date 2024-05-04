"use client"
import { useState, useEffect } from 'react';
import ToggleButton from '../../../../components/common/profile/toggle_button';
import LocationInput from '../../../../components/common/location';
import { useFetch } from '../../../../helpers/hooks';
import { DatePicker, Form, Radio, message } from 'antd';
import FormSelect from '../../../../components/form/select';
import { MdLocationOn, MdOutlineAccessTimeFilled } from 'react-icons/md';
import FormDatePicker from '../../../../components/form/date_picker';
import ButtonHome from '../../../../components/common/button_home';
import { postRide } from '@/app/helpers/backend';

const page = () => {
    const [form] = Form.useForm();
    const [activeTab, setActiveTab] = useState("1");
 
    const [radio, setRadio] = useState()
    const [radio2, setRadio2] = useState()

    useEffect(() => {
        setRadio('a')
        setRadio2('a')
    }, [])

    const onFinish = async(values) => {
        console.log(values)
        console.log(values?.date?.format('YYYY-MM-DDTHH:mm:ssZ'))
        const payload={
            ride: values?.ride,
            schedule: activeTab === 2 ? true : false,
            date: activeTab === 2 && values?.date?.format('YYYY-MM-DDTHH:mm:ssZ') ,
            from: {
                address: values?.from?.name,
                location: {
                    lat: values?.from?.lat,
                    lng: values?.from?.lng
                }
            },
             to: {
                address: values?.to?.name,
                location: {
                    lat: values?.to?.lat,
                    lng: values?.to?.lng
                }
            }
          }
          console.log(payload);
          const payload2={
            ride: values?.ride,
            from: {
                address: values?.from?.name,
                location: {
                    lat: values?.from?.lat,
                    lng: values?.from?.lng
                }
            },
             to: {
                address: values?.to?.name,
                location: {
                    lat: values?.to?.lat,
                    lng: values?.to?.lng
                }
            }
          }
      
         const {error,msg}=await postRide(activeTab === 2 ? payload : payload2)
         if (error) {
            message.error(msg);
        } else {
            message.success(msg);
        }
    }

    return (
        <div>

            <div className='md:container px-2 md:px-0 md:mx-auto border border-secondary_text rounded-lg relative '>
                <div className='absolute -bottom-24 -left-20 hidden md:block'>
                    <img src='/Frame.png' alt='' />
                </div>
                <div className="flex justify-center">
                    <ToggleButton
                        text1={"Ride Now"}
                        text2={"Schedule a Ride"}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>

                <Form form={form} layout="vertical" className="mb-10" onFinish={onFinish} >
                    <div className='flex justify-center '>
                        <div className=' w-full md:w-4/5 '>
                        <Form.Item name="ride" rules={[{ required: true, message: 'Please input your ride name!' }]} label="Ride" >
                        <input type='text' name='ride' placeholder='Ride Id' className="text-dark_text paragraph_3  placeholder-secondary_text placeholder:paragraph_3 border-b py-1 focus:outline-none focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" />
                        </Form.Item>

                            {
                                activeTab === 2 && <>
                                    <div className='flex justify-between items-center bg-[#f3f2d0] rounded-lg p-4 md:p-8 my-8'>
                                        <div className='w-full' >
                                            <div className='flex justify-between'>
                                                <div>
                                                    <p className='header_4 text-dark_text flex items-center gap-2 mb-2'>
                                                        <MdOutlineAccessTimeFilled />
                                                        Time
                                                    </p>
                                                </div>
                                            </div>
                                            <FormDatePicker
                                                name="date"
                                                label="Select Date"
                                                showTime
                                                required
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                </>
                            }

                            <div className='flex justify-between items-center bg-[#f3f2d0] rounded-lg p-4 md:p-8 my-8'>
                                <div className='w-full' >
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='header_4 text-dark_text flex items-center gap-2 mb-2'>
                                                <MdLocationOn />
                                                Pickup Location
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        radio !== undefined &&
                                        <Form.Item
                                            // label="Select Pickup Address"
                                            name="pickup_point"
                                            required
                                            initialValue={radio}
                                        >
                                            <Radio.Group
                                                defaultValue={radio}
                                                onChange={(e) => {
                                                    setRadio(e.target.value)
                                                }}
                                            >
                                           
                                                <Radio value="a">Google Map</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    }

                                    {/* {
                                        radio === 'a' &&

                                        <FormSelect
                                            name="from_1"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            options={savedAddress?.map((item) => ({
                                                label: item?.address,
                                                value: item._id
                                            }))}
                                            placeholder={'Select Pickup Address'}
                                        />
                                    }

                                    {
                                        radio === 'b' &&
                                        <FormSelect
                                            // label="select pickup Address"
                                            name="from_2"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            options={recentAddress?.map((item) => ({
                                                label: item?.address,
                                                value: item._id
                                            }))}
                                            placeholder={'Select Pickup Address'}
                                        />

                                    } */}

                                    {
                                        radio === 'a' &&
                                        <LocationInput
                                            name="from"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            placeholder={'Select Pickup Address'}
                                        />
                                    }
                                </div>
                            </div>
                            <div className='flex justify-between items-center bg-[#f3f2d0] rounded-lg p-4 md:p-8 my-8'>
                                <div className='w-full' >
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='header_4 text-dark_text flex items-center gap-2 mb-2'>
                                                <MdLocationOn />
                                                Destination
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        radio2 !== undefined &&
                                        <Form.Item
                                            // label="Select Pickup Address"
                                            name="destination_point"
                                            required
                                            initialValue={radio2}
                                        >
                                            <Radio.Group
                                                defaultValue={radio2}
                                                onChange={(e) => {
                                                    setRadio2(e.target.value)
                                                }}
                                            >
                                                {/* <Radio value="a">Saved Address</Radio>
                                                <Radio value="b">Recent Address</Radio> */}
                                                <Radio value="a">Google Map</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    }

                                    {/* {
                                        radio2 === 'a' &&

                                        <FormSelect
                                            name="to_1"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            options={savedAddress?.map((item) => ({
                                                label: item?.address,
                                                value: item._id
                                            }))}
                                            placeholder={'Select Pickup Address'}
                                        />
                                    }

                                    {
                                        radio2 === 'b' &&
                                        <FormSelect
                                            // label="select pickup Address"
                                            name="to_2"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            options={recentAddress?.map((item) => ({
                                                label: item?.address,
                                                value: item._id
                                            }))}
                                            placeholder={'Select Pickup Address'}
                                        />

                                    } */}

                                    {
                                        radio2 === 'a' &&
                                        <LocationInput
                                            name="to"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select pickup point',
                                                },
                                            ]}
                                            placeholder={'Select Pickup Address'}
                                        />
                                    }
                                </div>
                            </div>

                            <ButtonHome className="w-full"> Submit</ButtonHome>

                        </div>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default page;

