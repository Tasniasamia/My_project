"use client"
import Link from "next/link";

const Error404 = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-center items-center my-20">
          <p className="header_2">Oops! That Page Doesnt Exist.</p>
          <div className="h-full mb-5">
            <img src="/404.png" alt="404"></img>
          </div>
          <p className="capitalize paragraph_5 text-[#888AA0] mb-5">
            the page you requested cannot be found
          </p>
          <Link href="/" className="text-white paragraph_5 capitalize px-8 py-3 bg-primary">
           Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
