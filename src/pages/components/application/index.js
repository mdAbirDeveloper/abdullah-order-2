/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Application = () => {
  return (
    <div>
      <div
        style={{ width: "1415px", height: "1087px" }}
        className="mx-auto bg-[#063434] rounded-3xl"
      >
        <div className="ml-12 pt-8">
          <div>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "104px",
                lineHeight: "124px",
                color: "white",
              }}
            >
              CSC
            </h2>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "104px",
                lineHeight: "124px",
                color: "#B7EC42",
              }}
            >
              Applications
            </h2>
          </div>

          <div className="mt-3">
            <div className="flex">
              <div className="h-[402px] w-[742px]">
                <img
                  alt=""
                  src="/jhar.jpeg"
                  className="h-[402px] w-[742px] rounded-2xl"
                ></img>
                <div className="flex ml-10 absolute mt-[-100px]">
                  <h2
                    style={{
                      fontWeight: "500",
                      fontSize: "53px",
                      lineHeight: "36px",
                      color: "white",
                    }}
                  >
                    Agriculture
                  </h2>
                  <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 ml-80" />
                </div>
              </div>
              <div className="ml-5">
                <img
                  alt=""
                  src="/hero-right-img.jpeg"
                  className="h-[402px] w-[524px] rounded-2xl"
                ></img>
                <div className="flex ml-10 absolute mt-[-100px]">
                  <h2
                    style={{
                      fontWeight: "500",
                      fontSize: "53px",
                      lineHeight: "36px",
                      color: "white",
                    }}
                  >
                    Fog Effects
                  </h2>
                  <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 ml-28" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex mt-5">
                <div className="mr-5">
                  <img
                    alt=""
                    src="/application.jpeg"
                    className="h-[346px] w-[413px] rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute mt-[-140px]">
                    <h2
                      style={{
                        fontWeight: "500",
                        fontSize: "34px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                      className="w-[280px]"
                    >
                      Commercial & Industrial Humidification
                    </h2>
                    <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mt-5 ml-2" />
                  </div>
                </div>

                <div className="mr-5">
                  <img
                    alt=""
                    src="/application-2.jpeg"
                    className="h-[346px] w-[413px] rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute mt-[-140px]">
                    <h2
                      style={{
                        fontWeight: "500",
                        fontSize: "34px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                      className="w-[280px]"
                    >
                      Gas Turbine Fogging
                    </h2>
                    <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mt-5 ml-2" />
                  </div>
                </div>

                <div className="mr-5">
                  <img
                    alt=""
                    src="/application-3.jpeg"
                    className="h-[346px] w-[413px] rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute mt-[-140px]">
                    <h2
                      style={{
                        fontWeight: "500",
                        fontSize: "34px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                      className="w-[280px]"
                    >
                      Water <br></br> Treatment
                    </h2>
                    <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mt-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        style={{ width: "1377px", height: "30px" }} className="bg-[#0A4949] mx-auto rounded-b-3xl">

      </div>
    </div>
  );
};

export default Application;
