/* eslint-disable @next/next/no-img-element */

import { GoArrowUpRight } from "react-icons/go";

const Products = () => {
  return (
    <div className="md:w-[1440px] mx-auto bg-white rounded-3xl mt-2 pb-7">
      <div>
        <h2
          style={{ fontWeight: "700", lineHeight: "82px" }}
          className="text-center py-16 md:text-[68px] text-[48px] text-black"
        >
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-2 px-2">
          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                PUMPS
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black" />
            </div>
            <img
              src="/pump.png"
              className="w-[474px] h-[474px] mt-[-50px]"
              alt=""
            />
          </div>
          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                FITTINGS
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black" />
            </div>
            <img
              src="/fittings.png"
              className="w-[474px] h-[474px] mt-[-30px]"
              alt=""
            />
          </div>
          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                NOZZLES
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black relative" />
            </div>
            <img
              src="/nozzel.png"
              className="w-[474px] h-[474px] mt-[-120px]"
              alt=""
            />
          </div>

          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                HYDRAULIC HOSES
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black relative" />
            </div>
            <img
              src="/hoses.png"
              className="w-[474px] h-[474px] mt-[-120px]"
              alt=""
            />
          </div>

          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                FILTER
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black" />
            </div>
            <img
              src="/filter.png"
              className="w-[474px] md:h-[474px] mt-[-50px]"
              alt=""
            />
          </div>

          <div 
          className="md:h-[555px] h-[476px]"
            style={{
              
              background: "#7BBFD9",
              borderRadius: "27px",
            }}
          >
            <div className="flex justify-between mt-10 ml-5">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "57px",
                  color: "black",
                }}
              >
                MIST FAN
              </h2>
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 text-black" />
            </div>
            <img
              src="/fan.png"
              className="w-[474px] h-[474px] mt-[-50px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
