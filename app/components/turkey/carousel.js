"use client";

import React, { useState } from "react";
import Card from "./card";
import { data } from "./data";

const Carousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="p-[24px]">
            {data.map((item, index) => (
                <Card 
                    key={index} 
                    item={item} 
                    index={index} 
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            ))}
        </div>
    );
};

export default Carousel;
