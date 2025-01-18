import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-[1440px] h-[625px] mx-auto rounded-3xl bg-white my-2">
      <div className="pt-28 ml-16 flex">
        <div>
          <h1
            className="flex"
            style={{ fontWeight: "700", fontSize: "55px", lineHeight: "66px" }}
          >
            About Us,{" "}
            <BiSolidLike className="bg-black text-white rounded-full p-2 text-5xl mt-3 ml-2" />
          </h1>
          <h2
            style={{ fontWeight: "700", fontSize: "55px", lineHeight: "66px" }}
          >
            <span className="text-2xl mt-[30px] ml-8">01</span> Fog and spray
            systems,
          </h2>
        </div>

        <div className="ml-56 flex">
          <h2 style={{ fontSize: "25px" }} className="font-bold">
            02
          </h2>
          <h4
            style={{ fontWeight: "700", fontSize: "22px", lineHeight: "24px" }}
            className="mt-4 ml-1"
          >
            We are a Saudi company specialized in <br></br> fogging and spraying
            systems.
          </h4>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 mt-5">
        <div className="flex gap-6 justify-around">
          <div className="w-[331px]">
            <div className="w-full">
            <FaStarOfLife className="ml-36 mt-20 text-6xl text-[#7BBFD9]" />
            </div>
          </div>
          {/* Continuous warranty and maintenance */}
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md w-[331px]">
            <h3 className="text-lg font-semibold mb-2" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
              Continuous warranty and maintenance
            </h3>
            <p className="text-gray-600" style={{fontWeight: "700", fontSize: "17px", lineHeight: "20px"}}>
              Specialized maintenance team, and comprehensive warranty on all
              devices and products
            </p>
            <p className="text-gray-500 font-bold text-right mt-9">03</p>
          </div>

          {/* Custom fabrication and installation */}
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md w-[331px]">
            <h3 className="text-lg font-semibold mb-2" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
              Custom fabrication and installation
            </h3>
            <p className="text-gray-600 mb-4" style={{fontWeight: "700", fontSize: "17px", lineHeight: "20px"}}>
              Fabrication of core components, assembly and installation of
              systems on site, programming of control panels, and pre-delivery
              commissioning
            </p>
            <p className="text-gray-500 font-bold text-right">04</p>
          </div>

          {/* Integrated solutions for engineering design */}
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md w-[331px]">
            <h3 className="text-lg font-semibold mb-2" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
              Integrated solutions for engineering design
            </h3>
            <p className="text-gray-600 mb-4" style={{fontWeight: "700", fontSize: "17px", lineHeight: "20px"}}>
              Comprehensive systems design, including field planning,
              engineering design (civil, mechanical, electronic), and component
              selection.
            </p>
            <p className="text-gray-500 font-bold text-right">05</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
