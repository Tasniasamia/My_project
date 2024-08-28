"use client";
import About from "@/app/components/court/about";
import Counter from "@/app/components/court/counter";
import Hero from "@/app/components/court/hero";
import Justice from "@/app/components/court/justice";
import Mission from "@/app/components/court/mission";
import Practice from "@/app/components/court/practice";

const page = () => {
    return (
        <div >
            <Hero/>
            <Counter/>
            <Mission/>
            <Practice/>
            <About/>
            <Justice/>
        </div>
    );
};

export default page;