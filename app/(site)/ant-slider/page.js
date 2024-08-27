"use client";

import { Card, Carousel } from "antd";
import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Page = () => {
    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current?.prev();
    };

    const handleNext = () => {
        sliderRef.current?.next();
    };

    return (
        <div className="container">
            <h1 className="text-3xl text-center text-primary my-10 font-bold">
                Antd Custom Slider
            </h1>
            <div className="relative">
                <div className="absolute top-1/2 left-0 z-10 cursor-pointer transform -translate-y-1/2" onClick={handlePrev}>
                    <FaArrowAltCircleLeft size={40} />
                </div>
                <div className="absolute top-1/2 right-0 z-10 cursor-pointer transform -translate-y-1/2" onClick={handleNext}>
                    <FaArrowAltCircleRight size={40} />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                    <Card>
                        <Carousel
                            ref={sliderRef}
                            infinite={false}
                            autoplay={true}
                            autoplaySpeed={1000}
                        >
                            <div>
                                <img
                                    src="/realstate/slide1.png"
                                    alt="image"
                                    className="w-full h-[300px] object-fill"
                                />
                            </div>
                            <div>
                                <img
                                    src="/realstate/slide2.png"
                                    alt="image"
                                    className="w-full h-[300px] object-fill"
                                />
                            </div>
                            <div>
                                <img
                                    src="/realstate/slide3.png"
                                    alt="image"
                                    className="w-full h-[300px] object-fill"
                                />
                            </div>
                        </Carousel>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Page;
