import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa6";

const About = () => {
  return (
    <div className="md:w-[1440px] md:h-[625px] mx-auto rounded-3xl bg-white my-2 px-1">
      <div className="pt-28 md:ml-16 md:flex">
        <div className="md:text-[55px] text-[30px]">
          <h1
            className="flex md:text-[55px] text-[55px] md:justify-start justify-center mb-2 text-black"
            style={{ fontWeight: "700", lineHeight: "66px" }}
          >
            About Us,{" "}
            <BiSolidLike className="bg-black text-white rounded-full p-2 text-5xl mt-3 ml-2" />
          </h1>
          <h2
            style={{ fontWeight: "700", }}
            className="md:leading-[66px] leading-3 text-black"
          >
            <span className="text-2xl mt-[30px] md:ml-8">01</span> Fog and spray
            systems,
          </h2>
        </div>

        <div className="md:ml-56 flex md:mt-0 mt-2">
          <h2 style={{ fontSize: "25px" }} className="font-bold text-black">
            02
          </h2>
          <h4
            style={{ fontWeight: "700", fontSize: "22px", lineHeight: "24px" }}
            className="mt-4 ml-1 text-black"
          >
            We are a Saudi company specialized in <br></br> fogging and spraying
            systems.
          </h4>
        </div>
      </div>

      <div className="md:flex justify-center items-center py-10 mt-5">
        <div className="md:flex gap-6 justify-around">
          <div className="md:w-[331px] mt-2">
            <div className="w-full">
            <FaStarOfLife className="md:ml-36 md:mt-20 ml-44 mb-12 text-6xl text-[#7BBFD9]" />
            </div>
          </div>
          {/* Continuous warranty and maintenance */}
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md md:w-[331px] mt-2">
            <h3 className="text-lg font-semibold mb-2 text-black" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
              Continuous warranty and maintenance
            </h3>
            <p className="text-gray-600" style={{fontWeight: "700", fontSize: "17px", lineHeight: "20px"}}>
              Specialized maintenance team, and comprehensive warranty on all
              devices and products
            </p>
            <p className="text-gray-500 font-bold text-right mt-9">03</p>
          </div>

          {/* Custom fabrication and installation */}
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md md:w-[331px] mt-2">
            <h3 className="text-lg font-semibold mb-2 text-black" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
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
          <div className="bg-[#F7F7F5] p-6 rounded-lg shadow-md md:w-[331px] mt-2">
            <h3 className="text-lg font-semibold mb-2 text-black" style={{fontWeight: "700", fontSize: "24px", lineHeight: "37px"}}>
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
