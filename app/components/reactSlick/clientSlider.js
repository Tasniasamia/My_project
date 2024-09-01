// "use client";   
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";

// function ClientSlider() {
//   const [activeSlide, setActiveSlide] = useState(0);

  



//   return (
//     <div className="container mx-auto my-[150px]">
//       <Slider {...settings}>
//         {clients.map((client, index) => (
//           <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//             <div
//               className={`flex justify-center items-center w-full md:w-[576px] !h-[113px] transition-opacity duration-300 ${activeSlide === index ? "opacity-100" : "opacity-50"}`}
//             >
//               <img src={"/court/client.png"} alt={client.alt} className="w-[88px] h-[88px] object-fill rounded-full" />
//             </div>
//             <div
//               className={`w-full transition-opacity duration-300 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
//             >
//               <h1 className="text-center md:text-left">{client.name}</h1>
//               <p className="text-center md:text-left">{client.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default ClientSlider;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ClientSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const clients = [
    { id: 1, alt: "BWmedia", name: "Sania Graic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
    { id: 2, alt: "BWmedia", name: "Sania Graic 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
    { id: 3, alt: "BWmedia", name: "Sania Graic 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt voluptates, asperiores, voluptatem a consequatur doloremque, voluptatibus vero magni ducimus natus animi expedita! Est consequuntur ab atque repellendus doloribus cumque" },
    // Add more clients as needed
  ];
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3, // Define slidesToShow only once
    centerMode: true,
    centerPadding: "0px",
    className: "center",
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: nav1, // Correctly formatted
    ref: (slider) => (sliderRef2 = slider), // Correctly formatted
    swipeToSlide: true,
    focusOnSelect: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="container">
    <div className="my-[150px]">
     <div className="w-[576px] mx-auto">
      <Slider {...settings}
       
      >
       {clients.map((client, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div
              className={`flex justify-center items-center w-full md:w-[576px] !h-[113px] transition-opacity duration-300 `}
            >
              <img src={"/court/client.png"} alt={client.alt} className="w-[88px] h-[88px] object-fill rounded-full" />
            </div>
           
          </div>
        ))}
      </Slider>
      </div>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
       {
        clients?.map((i,index)=>{
            return (
                <div className="w-full text-center">
                 <h1>{i?.name}</h1>
                 <p>{i?.description}</p>
                </div>
            )
        })
       }
      </Slider>
     
    </div>
    </div>
  );
}

export default ClientSlider;

