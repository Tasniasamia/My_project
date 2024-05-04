import React, { useContext } from "react";
import TextEditor from "../../form/editor";
import { Form } from "antd";
import { tabbar } from "@/app/contexts/tabContext";

const Description = () => {
  const {tab,setTab}=useContext(tabbar)

    const handleFinish=(value)=>{
        console.log(value);
    }
  return (
    <div>
      <Form onFinish={handleFinish} layout="vertical">
      <Form.Item name="short_description" label="Short Description" required>
        <TextEditor />
      </Form.Item>
      <Form.Item name="description" label="Description" required>
        <TextEditor />
      </Form.Item>
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
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('general')}}>Previous</button>
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('product features')}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default Description;
