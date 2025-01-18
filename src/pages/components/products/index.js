/* eslint-disable @next/next/no-img-element */

import { GoArrowUpRight } from "react-icons/go";

const Products = () => {
  return (
    <div className="w-[1440px] mx-auto bg-white rounded-3xl mt-2 pb-7">
      <div>
        <h2
          style={{ fontWeight: "700", fontSize: "68px", lineHeight: "82px" }}
          className="text-center py-16 "
        >
          Our Products
        </h2>

        <div className="grid grid-cols-3 gap-2">
          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4" />
            </div>
            <img src="/pump.png" className="w-[474px] h-[474px] mt-[-50px]" alt="" />
          </div>
          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4" />
            </div>
            <img src="/fittings.png" className="w-[474px] h-[474px] mt-[-30px]" alt="" />
          </div>
          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 relative" />
            </div>
            <img src="/nozzel.png" className="w-[474px] h-[474px] mt-[-120px]" alt="" />
          </div>

          
          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4 relative" />
            </div>
            <img src="/hoses.png" className="w-[474px] h-[474px] mt-[-120px]" alt="" />
          </div>


          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4" />
            </div>
            <img src="/filter.png" className="w-[474px] h-[474px] mt-[-50px]" alt="" />
          </div>

          <div
            style={{
              height: "505px",
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
              <GoArrowUpRight className="text-6xl bg-[#B8FE22] rounded-full p-1 mr-4" />
            </div>
            <img src="/fan.png" className="w-[474px] h-[474px] mt-[-50px]" alt="" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Products;
