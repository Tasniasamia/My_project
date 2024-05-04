import React, { useContext } from "react";
import MultipleImageInput from "../../form/multiImage";
import { Form } from "antd";
import { tabbar } from "@/app/contexts/tabContext";

const Image = () => {
  const {tab,setTab}=useContext(tabbar)

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(value) => {
          console.log(value);
        }}
      >
        <MultipleImageInput label="Product Image" name="product" />
        <MultipleImageInput label="Thumb Image" name="thumb" />
        <MultipleImageInput label="Gallery Images" name="gallery" />
        <Form.Item>
          <button
            type="submit" // <-- Set type to "submit"
            className="bg-emerald-500 text-white px-[18px] py-2 rounded"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
      <div className="flex justify-end">
      <div className="flex gap-x-4 items-center">
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('status')}}>Previous</button>
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('shipping information')}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default Image;
