"use client";

import { Button } from "antd";
import { useEffect, useRef } from "react";

const Page = () => {
  const ref = useRef(null);
  useEffect(() => {
  console.dir(ref.current);
  }, []);

  return (
    <div>
      <Button
        id="btnId"
        onClick={() =>{document.getElementById("demo2").innerHTML = "<div><p class='font-bold capitalize'>hello world</p>hello world</p></div><div>hello world</div>";}}
      >
        click me
      </Button>
      <div id="demo1"ref={ref}></div>
      <div id="demo2"></div>
      <form id="myForm"onClick="return false">
        <input type="text" id="name" name="name" className="border "/>
        <input type="submit" value="Submit"className="bg-blue-400 p-4" />  
      </form>
    </div>
  );
};

export default Page;
