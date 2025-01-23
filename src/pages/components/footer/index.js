/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="md:w-[1440px] mx-auto md:h-[1006px] h-[856px] rounded-t-2xl bg-[#55A6C4] bg-[url('/fotter-img.png')] bg-contain bg-no-repeat bg-center">
          <div className="flex">
            <div className="mt-16">
              <img
                src="/logo.png"
                alt=""
                className="md:w-[268px] md:h-[107px] ml-20 md:block hidden"
              />
            </div>
            <div className="md:mt-16 mt-4 md:ml-[700px]">
              <div className="flex">
                <p className="text-[20px] text-white ml-5">Our work</p>
                <p className="text-[20px] text-white ml-5">Products</p>
                <p className="text-[20px] text-white ml-5">Application</p>
              </div>
              <div className="flex mt-5">
                <p className="text-[20px] text-white ml-5">About US</p>
                <p className="text-[20px] text-white ml-5">Contact US</p>
              </div>
            </div>
          </div>

          <div className="mt-32 text-white md:ml-20 ml-3 text-2xl">
            <p>For any inquiries</p>
            <p>please call: +966533360688</p>
            <p>Email: info@csc-fog.sa</p>
          </div>

          <div className="flex">
            <h2
              style={{ fontWeight: "700" }}
              className="text-[#B8FE22] mt-28 md:ml-20 md:text-[168px] text-[79px] md:leading-[174px] leading-[110px] ml-2"
            >
              Join Our <br></br>
              Clints
            </h2>
            <div
              className="md:block hidden rounded-[30px] p-4 md:h-[162px] h-[122px] md:w-[162px] w-[122px] mx-auto md:mt-72 mt-36 md:ml-96 bg-[#B8FE22] mr-2"
              style={{ border: "3px solid skyblue" }}
            >
              <GoArrowUpRight className="h-[65px] w-[65px] mx-auto mt-8 font-bold text-black" />
            </div>
          </div>

          <div
            className="md:hidden block rounded-[30px] p-4 h-[122px] w-[122px] mx-auto mr-9 mt-[-90px] bg-[#B8FE22]"
            style={{ border: "3px solid skyblue" }}
          >
            <GoArrowUpRight className="h-[65px] w-[65px] mx-auto mt-4 font-bold text-black" />
          </div>

          <div>
            <div className="border-t-2 mt-16 flex justify-center pt-5 text-white px-2">
              <p>
                Airport Road، Building 7, Level 1, Zone A, The Business Gate,
                Riyadh |
              </p>
              <p className="ml-2"> CSC Group Copyright 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
