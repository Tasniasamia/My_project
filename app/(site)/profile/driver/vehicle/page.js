'use client';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../../../components/common/title';
import { Card, Checkbox, Form, Switch, message } from 'antd';
import { useAction, useFetch } from '../../../../helpers/hooks';
import { useRouter } from 'next/navigation';
import { fetchVehicleCategories, postVehicle, vehicleDetails } from '@/app/helpers/backend';
import FormInput, { HiddenInput } from '@/app/components/form/input';
import FormSelect from '@/app/components/form/select';
import MultipleImageInput from '@/app/components/form/multiImage';
import Button from '@/app/components/common/button';
import { useUser } from '@/app/contexts/user';
import { DetailTable } from '@/app/components/common/table';

const page = () => {
    const { push } = useRouter()
    const [form] = Form.useForm()
    const [categories, getCategories] = useFetch(fetchVehicleCategories)
    const [data,getData,{loading}]=useFetch(vehicleDetails,{},false)
    const [ac,setAc]=useState(false);
    const [online,setOnline]=useState(false);
    const {user,getUser}=useUser()
    const [item,setItem]=useState({});
    console.log(data);
    const [image, setImage] = useState(0)
    const [document, setDocuments] = useState(0)
    useEffect(()=>{
        getData({_id:user?.vehicle?._id})
        console.log(user?.vehicle?._id);
    },[user])
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
        // values.images = values?.image[0]?.originFileObj;
        // values.documents = values?.image[0]?.originFileObj;
        values.ac=ac ? true : false;
        values.online=online ? true : false;
        const {error,msg}=await postVehicle(values);
        if(!error){
            getUser();
            message.success(msg);

        }
        else{
            message.error(msg);
        }
      }

    return (
        <>
          {
            user?.vehicle?._id ? (
                <div className='mx-4'>
                <div className='flex justify-between'>
                <PageTitle item="Vehicle Details" />
                <div className=''>
                {typeof data === "object" && 
                 <Button 
                 onClick={()=>{push(`/profile/driver/vehicle/edit/${data?._id}`)}}>
                 Update Vehicle
                 </Button>
                
                }
               
                </div>
                </div>
                {data  ?
                 <div className="grid grid-cols-2 gap-4">
                 <div>
                   <DetailTable
                     title="Vehicle Details"
                     columns={[
                       { text: "Vehicle Name", dataIndex: 'name' },
                       { text: "Category", dataIndex: 'category', formatter: (_, d) => d?.category?.name },
                       { text: "model", dataIndex: 'model' },
                       { text: "year", dataIndex: 'year' },
                       {text:"max_power", dataIndex: 'max_power'},
                       {text: "min_power", dataIndex: "min_power"},
                       {text:"capacity",dataIndex:"capacity"},
                       {text:"color",dataIndex:"color"},
                       {text:"fuel_type",dataIndex:"fuel_type"},
                       {text:"mileage",dataIndex:"mileage"},
                       {text:"gear_type",dataIndex:"gear_type"},
                        // {text:"ac",dataIndex:"ac"},
                       {text:"vehicle_number",dataIndex:"vehicle_number"},
                       // {text:"online",dataIndex:"online"}
                  ]}
                     data={data} 
                     more={(
                     <>
                     <tr className='border-b-2'>
                     <td className="py-2 px-4">AC</td>
                     <td className="py-2 px-4 text-sm ">{data?.ac ? "Yes" : "N/A"}</td>
                     </tr>
                     <tr className='border-b-2'>
                     <td className="py-2 px-4">Online</td>
                     <td className="py-2 px-4 text-sm">{data?.online ? "Yes" : "N/A"}</td>
                     </tr>
                     </>
                     )}
                     />
                 </div>
                 <div>
                   <div className="border rounded-md p-4 bg-white shadow-md">
                     <h6 className="title">Vehicle Images</h6>
                     <div className="body mt-2">
                       <div className="text-center mb-3" style={{ height: 300 }}>
                         <img src={data?.images?.[image]} style={{ height: '100%' }} alt="" />
                       </div>
                       <div className="d-flex flex-wrap gap-2">
                         {data?.images?.map((image, index) => (
                           <div
                             key={index}
                             role="button"
                             onClick={() => setImage(index)}
                             style={{ height: 80 }}
                             className="rounded inline-block text-center bg-white p-2">
                             <img src={image} style={{ height: '100%' }} alt="" />
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                   <div className="border rounded-md p-4 bg-white shadow-md mt-4">
                     <h6 className="title">Documents</h6>
                     <div className="body mt-2">
                       <div className="text-center mb-3" style={{ height: 300 }}>
                         <img src={data?.documents?.[document]} style={{ height: '100%' }} alt="" />
                       </div>
                       <div className="d-flex flex-wrap gap-2">
                         {data?.documents?.map((image, index) => (
                           <div
                             key={index}
                             role="button"
                             onClick={() => setDocuments(index)}
                             style={{ height: 80 }}
                             className="rounded inline-block text-center bg-white p-2">
                             <img src={image} style={{ height: '100%' }} alt="" />
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
                : 
                <div className='md:text-4xl text-xl flex justify-center items-center text-primary md:my-[150px] my-8'>
                  There is no Vehicle
                </div>}
               
              </div>
            )
                :
                (
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
                        <Checkbox 
                        onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                            setAc(e.target.checked)
                          }}>
                           AC
                        </Checkbox>
                        <Checkbox 
                        onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                            setOnline(e.target.checked)
                          }}>
                           Online
                        </Checkbox>
                        <MultipleImageInput name="documents" label="Documents"max={4} />
                        {/* <MultipleImageInput name="documents" label="Document" max={1}/> */}
                        <MultipleImageInput name="images" label="Images" max={4}/>
                        {/* <MultipleImageInput name="images" label="Image" max={1}/> */}
                    </div>
                    <Button type="primary" htmlType="submit">Add Vehicle</Button>
                </Form>
        </div>
                )
        }  
        </>
           
        
    );
};

export default page;