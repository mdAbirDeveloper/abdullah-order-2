/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose, IoMdMenu } from "react-icons/io";
const HeroSection = () => {
  const [selected, setSelected] = useState("About Us"); // State to track the selected item

  const navItems = [
    "Our work",
    "About Us",
    "Our Products",
    "Contact Us",
    "Login",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* bg-[url("/elefent.jpg")] bg-cover bg-center  */}
      <div className="md:w-[1440px] md:h-[42px] bg-[#B8FE22] mx-auto text-center text-black">
        <p className="md:text-xl text-sm pt-2 pb-2">
          High quality misting and spray solutions to meet all your needs.
        </p>
      </div>

      <div>
        {isMenuOpen && (
          <div className="bg-white p-4 rounded-2xl shadow-md absolute top-28 right-0">
            <ul className="flex flex-col space-y-2">
              <li onClick={toggleMenu} className="hover:bg-gray-100 p-2 font-bold text-xl rounded-md bg-[#55A6C4] text-white text-center">Our work</li>
              <li onClick={toggleMenu} className="hover:bg-gray-100 p-2 font-bold text-xl rounded-md bg-[#55A6C4] text-white text-center">About Us</li>
              <li onClick={toggleMenu} className="hover:bg-gray-100 p-2 font-bold text-xl rounded-md bg-[#55A6C4] text-white text-center">Our Products</li>
              <li onClick={toggleMenu} className="hover:bg-gray-100 p-2 font-bold text-xl rounded-md bg-[#55A6C4] text-white text-center">Contact Us</li>
              <li onClick={toggleMenu} className="hover:bg-gray-100 p-2 font-bold text-xl rounded-md bg-[#55A6C4] text-white text-center">Login</li>
            </ul>
          </div>
        )}
      </div>

      <div className='md:w-[1440px] md:h-[1206px] rounded-b-2xl bg-[#55A6C4] mx-auto md:bg-[url("/elefent.png")] bg-[url("/elefent-mobile.png")] bg-contain bg-no-repeat md:bg-center bg-bottom'>
        <div className="flex justify-between">
          <img
            alt="logo"
            className="pt-[20px] md:pl-[50px] md:h-[107px] md:w-[268px] h-[80] w-[180px] ml-2"
            src="/logo.png"
          />
          <button
            className="md:hidden block text-4xl bg-[#B8FE22] rounded-full text-black p-5 mt-4 mr-3"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoMdClose /> // Display close icon when menu is open
            ) : (
              <IoMdMenu /> // Display menu icon when menu is closed
            )}
          </button>
        </div>
        <p className="text-[#B8FE22] text-[25px] font-serif md:mt-[120px] md:ml-[59px] md:text-left text-center mt-3 md:px-0 px-7">
          Make your summer cool with the latest fog and spray systems
        </p>

        <div className="flex md:ml-[870px] md:justify-start justify-center md:mt-[76px] my-[20px]">
          <GoArrowUpRight className="text-5xl bg-[#B8FE22] rounded-full p-1 mt-1 mr-2 text-black md:block hidden" />
          <div>
            <button className="bg-white text-black font-serif text-xl p-3 font-normal rounded-3xl md:block hidden">
              Our Products
            </button>
          </div>
        </div>

        <div className="md:ml-[50px] ml-6 mt-[-40px] md:text-left">
          <h1
            className="md:text-[91.5px] text-[53px] md:leading-[100px] leading-[60px] mt-16 md:mt-10 md:text-black text-white mb-3"
            style={{
              fontWeight: "700",
            }}
          >
            Own Your <br></br> Fog system,
          </h1>
          <h2
            style={{ fontWeight: "400" }}
            className="md:text-[84px] text-[50px] font-bold md:text-black text-white md:mt-0 mt-[-15px]"
          >
            Own Your Cool!
          </h2>
        </div>

        <div className="">
          <div className="md:ml-[59px] mt-3 flex text-center">
            <p
              style={{
                fontWeight: "500",
                lineHeight: "36px",
                fontSize: "24px",
                color: "white",
              }}
              className="md:block hidden"
            >
              We are your partners in success, not just <br></br> suppliers of
              mist and fog systems. Invest <br></br> in the best, and experience
              the difference.
            </p>
            <p className="block md:hidden text-[18px] text-white ml-4 text-left">
              We are your partners in success, not just suppliers of mist and
              fog systems. Invest in the best, and experience the difference.
            </p>
            <div className="rounded-[30px] font-thin h-[174px] w-[172px] bg-[#B8FE22] ml-[150px] md:block hidden">
              <div
                className="rounded-[30px] p-4 h-[152px] w-[152px] mx-auto mt-3"
                style={{ border: "3px solid black" }}
              >
                <GoArrowUpRight className="h-[55px] w-[55px] mx-auto mt-8 font-bold text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-[50px] mt-8 ml-1">
          {/* for desktop device only, it's hide in mobile mode */}
          <div className="md:text-left md:block hidden">
            <div className="">
              <button
                className="py-1 px-3 mr-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Industrial Cooling
              </button>

              <button
                className="py-1 px-3 mr-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Central Cooling
              </button>

              <button
                className="py-1 px-3 mr-2 md:mt-0 mt-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Maintenance & Support
              </button>
            </div>
            <div className="flex">
              <button
                className="py-1 px-3 mr-2 mt-3"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Commercial Cooling
              </button>

              <button
                className="py-1 px-3 mr-2 mt-3"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Request a Quote Now
              </button>
              <button className="mt-4">
                <GoArrowUpRight className="text-4xl bg-[#B8FE22] rounded-full p-1 text-black" />
              </button>
            </div>
          </div>

          {/* for mobile device only, it's hide in desktop mode */}
          <div className="md:text-left md:hidden block ml-3 pb-7">
            <div className="">
              <button
                className="py-1 px-3 mr-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Industrial Cooling
              </button>

              <button
                className="py-1 px-3 mr-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Central Cooling
              </button>
            </div>
            <div className="flex">
              <button
                className="py-1 px-3 mr-2 mt-3"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Commercial Cooling
              </button>

              <button
                className="py-1 px-3 mr-2 mt-3"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Request a Quote Now
              </button>
            </div>
            <div className="flex mt-1">
              <button
                className="py-1 px-3 mr-2 md:mt-0 mt-2"
                style={{
                  fontWeight: "500",
                  fontSize: "19",
                  color: "white",
                  lineHeight: "36px",
                  border: "1.5px solid white",
                  borderRadius: "24px",
                }}
              >
                Maintenance & Support
              </button>
              <GoArrowUpRight className="text-4xl mt-3 bg-[#B8FE22] rounded-full p-1 text-black" />
            </div>
          </div>
        </div>

        <div className="h-[324px] w-[316px] bg-white rounded-2xl md:ml-[972px] md:mt-[-320px] mt-7 mx-auto md:block hidden">
          <div>
            <button
              className="absolute bg-white p-2 rounded-3xl mt-7 ml-[190px] text-black"
              style={{
                fontWeight: "500",
                fontSize: "17px",
                lineHeight: "19px",
              }}
            >
              High Quality
            </button>
            <img
              alt=""
              className="h-[208px] w-[299px] mx-2 pt-2 rounded-2xl"
              src="/hero-right-img.jpeg"
            />
          </div>
          <div className="ml-2 mt-4 text-black">
            <p
              style={{
                fontWeight: "700",
                fontSize: "27px",
                lineHeight: "32px",
              }}
            >
              NOZZLES
            </p>
            <p
              className="flex"
              style={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "28px",
                marginTop: "20px",
              }}
            >
              High performance{" "}
              <GoArrowUpRight className="text-3xl bg-[#B8FE22] rounded-full p-1 ml-16" />
            </p>
          </div>
        </div>

        <div className="pb-4 md:block hidden">
          <nav className="flex items-center justify-center bg-white py-3 rounded-full md:w-[620px] md:mx-auto mx-2 mt-10 shadow-lg">
            <ul className="flex md:gap-8 gap-1 text-black font-medium md:text-lg text-xs">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setSelected(item)} // Update the selected item
                  className={`cursor-pointer py-2 rounded-full px-2 ${
                    selected === item ? "bg-[#B8FE22]" : ""
                  } hover:underline`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
