"use client";
import About from "@/app/components/court/about";
import Blog from "@/app/components/court/blog";
import Booking from "@/app/components/court/booking";
import Client from "@/app/components/court/client";
import Counter from "@/app/components/court/counter";
import Hero from "@/app/components/court/hero";
import Justice from "@/app/components/court/justice";
import Mission from "@/app/components/court/mission";
import Practice from "@/app/components/court/practice";
import Project from "@/app/components/court/project";

const page = () => {
    return (
        <div >
            <Hero/>
            <Counter/>
            <Mission/>
            <Practice/>
            <About/>
            <Justice/>
            <Project/>
            <Client/>
            <Blog/>
            <Booking/>
        </div>
    );
};

export default page;