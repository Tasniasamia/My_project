"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Shape from '../../images/testimonial/shape-1.png'
// import Shape1 from '../../images/testimonial/feedback.svg'
// import Shape3 from '../../images/testimonial/left-img.jpg'
// import Shape4 from '../../images/testimonial/shape-2.svg'
// import Shape5 from '../../images/testimonial/shape-3.svg'


const TestimonialS3 = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const testimonials = [
        { id: 1, title: "Sania Graic", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 2, titel: "Sania Graic1", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 3, titel: "Sania Graic2", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 4, titel: "Sania Graic3", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 5, titel: "Sania Graic4", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 6, titel: "Sania Graic5", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 7, titel: "Sania Graic", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 8, titel: "Sania Graic1", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 9, titel: "Sania Graic2", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 10, titel: "Sania Graic3", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 11, titel: "Sania Graic4", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." },
        { id: 12, titel: "Sania Graic5", Des: "Meet our dedicated legal team, committed to providing expert advice and achieving the best outcomes for our clients." }
      ];
    
    return (
        <section className="wpo-testimonial-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content-wrap testimonial-slider-s3">
                            <div className="wpo-section-title">
                                <h2>Trusted electricity Care</h2>
                                <h3>What Our Client’s Says</h3>
                            </div>
                            <div className="slider-nav-s2">
                                <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={1} swipeToSlide={true} focusOnSelect={true} fade={true}>
                                    {testimonials.slice(2, 5).map((testimonial, item) => (
                                        <div className="content" key={item}>
                                            <p>{testimonial.Des}</p>
                                            <div className="client-name">
                                                <h4>{testimonial.title}/</h4>
                                                {/* <span>{testimonial.sub}</span> */}
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="img-slider slider-for-s2">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={false} fade={false} slidesToShow={3} swipeToSlide={true}>
                                    {testimonials.slice(1, 5).map((testimonial, item) => (
                                        <div className="image" key={item}>
                                            <img src={'/court/client.png'} alt="" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="left-image">
                            {/* <img src={"/court/lawer.png"} alt="" /> */}
                            <span className="feedback">
                                {/* <img src={Shape1} alt="" /> */}
                                Feedback</span>

                            {/* <div className="shape">
                                <img src={Shape} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="shape-2">
                <img src={Shape4} alt="" />
            </div>
            <div className="shape-3">
                <img src={Shape5} alt="" />
            </div> */}
        </section>
    );
};

export default TestimonialS3;