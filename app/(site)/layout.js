"use client";
import Navbar from "../components/containerhome/navbar";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";


const Layout = ({ children }) => {

    return (
        <>



            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;