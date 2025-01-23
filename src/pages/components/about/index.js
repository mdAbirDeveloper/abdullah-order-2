import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa6";

const About = () => {
  return (
    <div className="md:w-[1440px] md:h-[625px] mx-auto rounded-3xl bg-white my-2 px-1">
      <div className="pt-28 md:ml-16 md:flex">
        <div className="md:text-[55px] text-[30px]">
          <h1
            className="flex md:text-[55px] text-[30px] md:justify-start justify-start ml-3 mb-2 text-black"
            style={{ fontWeight: "700", lineHeight: "66px" }}
          >
            About Us,{" "}
            <BiSolidLike className="bg-black text-white rounded-full p-2 text-5xl md:mt-3 mt-0 ml-2" />
          </h1>
          <h2
            style={{ fontWeight: "700" }}
            className="md:leading-[66px] leading-3 text-black md:ml-0 ml-3 md:block hidden"
          >
            <span className="text-2xl md:ml-8">
              01
            </span>{" "}
            Fog and spray systems,
          </h2>
          <div className="flex ml-3 text-black">
            <p className="text-[25px] md:hidden block font-bold">01</p>
            <p className="text-[30px] md:hidden block font-bold ml-1 mt-1">Fog and spray systems,</p>
          </div>
        </div>

        <div className="md:ml-56 ml-3 flex md:mt-0 mt-4">
          <h2 style={{ fontSize: "25px" }} className="font-bold text-black">
            02
          </h2>
          <h4
            style={{ fontWeight: "700", fontSize: "22px", lineHeight: "24px" }}
            className="mt-4 ml-1 text-black md:block hidden"
          >
            We are a Saudi company specialized in <br></br> fogging and spraying
            systems.
          </h4>
          <h4
            style={{ fontWeight: "700", fontSize: "22px", lineHeight: "24px" }}
            className="mt-4 ml-2 text-black md:hidden block "
          >
            We are a Saudi company <br></br>specialized in fogging and <br></br>
            spraying systems.
          </h4>
        </div>
      </div>

      <div className="md:flex justify-center items-center md:py-10 pb-10 mt-5">
        <div className="md:flex gap-6 justify-around">
          <div className="md:w-[331px] mt-2">
            <div className="">
              <FaStarOfLife className="md:ml-36 md:mt-20 ml-2 mt-0 mb-[-35px] text-6xl text-[#7BBFD9]" />
            </div>
          </div>
          {/* Continuous warranty and maintenance */}
          <div className="bg-[#F7F7F5] md:mx-0 mx-10 p-6 rounded-lg shadow-md md:w-[331px] md:mt-2">
            <h3
              className="text-lg font-semibold mb-2 text-black"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "37px",
              }}
            >
              Continuous warranty and maintenance
            </h3>
            <p
              className="md:text-gray-600 text-black"
              style={{
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
              Specialized maintenance team, and comprehensive warranty on all
              devices and products
            </p>
            <p className="text-gray-500 font-bold text-right mt-9">03</p>
          </div>

          {/* Custom fabrication and installation */}
          <div className="bg-[#F7F7F5] md:mx-0 mx-10 p-6 rounded-lg shadow-md md:w-[331px] md:mt-2 mt-8">
            <h3
              className="text-lg font-semibold mb-2 text-black"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "37px",
              }}
            >
              Custom fabrication and installation
            </h3>
            <p
              className="md:text-gray-600 text-black mb-4"
              style={{
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
              Fabrication of core components, assembly and installation of
              systems on site, programming of control panels, and pre-delivery
              commissioning
            </p>
            <p className="text-gray-500 font-bold text-right">04</p>
          </div>

          {/* Integrated solutions for engineering design */}
          <div className="bg-[#F7F7F5] md:mx-0 mx-10 p-6 rounded-lg shadow-md md:w-[331px] md:mt-2 mt-8">
            <h3
              className="text-lg font-semibold mb-2 text-black"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "37px",
              }}
            >
              Integrated solutions for engineering design
            </h3>
            <p
              className="md:text-gray-600 text-black mb-4"
              style={{
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
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
