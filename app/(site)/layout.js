"use client";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";


const Layout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;