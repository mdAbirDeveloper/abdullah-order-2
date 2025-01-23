/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Application = () => {
  return (
    <div>
      <div
        className="mx-auto bg-[#063434] rounded-3xl md:w-[1415px] md:h-[1087px]"
      >
        <div className="md:ml-12 mx-2 pt-8">
          <div>
            <h2
              style={{
                fontWeight: "700",
                color: "white",
              }}
              className="md:text-[104px] text-[40px] md:leading-[124px]"
            >
              CSC
            </h2>
            <h2
              style={{
                fontWeight: "700",
                color: "#B7EC42",
              }}
              
              className="md:text-[104px] text-[40px] md:leading-[124px]"
            >
              Applications
            </h2>
          </div>

          <div className="mt-3">
            <div className="md:flex">
              <div className="md:h-[402px] md:w-[742px] w-full">
                <img
                  alt=""
                  src="/jhar.jpeg"
                  className="md:h-[402px] md:w-[742px] w-full rounded-2xl"
                ></img>
                <div className="flex ml-10 absolute md:mt-[-100px] mt-[-80px]">
                  <h2
                    style={{
                      fontWeight: "500",
                      lineHeight: "36px",
                      color: "white",
                    }}
                    className="md:text-[53px] text-[40px] md:leading-[36px]"
                  >
                    Agriculture
                  </h2>
                  <GoArrowUpRight className="md:text-6xl text-4xl bg-[#B8FE22] rounded-full p-1 md:ml-80 ml-20 text-black" />
                </div>
              </div>

              <div className="md:ml-5 md:mt-0 mt-3">
                <img
                  alt=""
                  src="/hero-right-img.jpeg"
                  className="md:h-[402px] h-[346px] md:w-[524px] w-full rounded-2xl"
                ></img>
                <div className="flex ml-10 absolute mt-[-80px]">
                  <h2
                    style={{
                      fontWeight: "500",
                      lineHeight: "36px",
                      color: "white",
                    }}
                    className="md:text-[53px] text-[40px]"
                  >
                    Fog Effects
                  </h2>
                  <GoArrowUpRight className="md:text-6xl text-4xl bg-[#B8FE22] rounded-full p-1 md:ml-28 ml-[75px] text-black" />
                </div>
              </div>
            </div>

            <div>
              <div className="md:flex mt-5">
                <div className="md:mr-5">
                  <img
                    alt=""
                    src="/application.jpeg"
                    className="md:h-[346px] md:w-[413px] w-full rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute mt-[-140px]">
                    <h2
                      style={{
                        fontWeight: "500",
                        fontSize: "34px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                      className="w-[280px] md:text-[34px] text-[28px]"
                    >
                      Commercial & Industrial Humidification
                    </h2>
                    <GoArrowUpRight className="md:text-6xl text-4xl bg-[#B8FE22] rounded-full p-1 md:mt-5 mt-10 ml-2 text-black" />
                  </div>
                </div>

                <div className="md:mr-5 md:mt-0 mt-3">
                  <img
                    alt=""
                    src="/application-2.jpeg"
                    className="md:h-[346px] md:w-[413px] w-full rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute md:mt-[-140px] mt-[-110px]">
                    <h2
                      style={{
                        fontWeight: "500",
                        lineHeight: "36px",
                        color: "white",
                      }}
                      className="w-[280px] md:text-[34px] text-[34px]"
                    >
                      Gas Turbine Fogging
                    </h2>
                    <GoArrowUpRight className="md:text-6xl text-4xl bg-[#B8FE22] rounded-full p-1 mt-5 ml-2 text-black" />
                  </div>
                </div>

                <div className="md:mr-5 md:mt-0 mt-3 md:mb-0 pb-3">
                  <img
                    alt=""
                    src="/application-3.jpeg"
                    className="md:h-[346px] md:w-[413px] w-full rounded-2xl"
                  ></img>
                  <div className="flex ml-10 absolute md:mt-[-140px] mt-[-120px]">
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
                    <GoArrowUpRight className="md:text-6xl text-4xl bg-[#B8FE22] rounded-full p-1 mt-5 ml-2 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0A4949] mx-auto rounded-b-3xl md:w-1377px] md:h-[30] md:block hidden">
      </div>
    </div>
  );
};

export default Application;
