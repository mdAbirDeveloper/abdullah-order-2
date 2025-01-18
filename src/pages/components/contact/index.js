import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <div className="w-[1440px] mx-auto mt-2 mb-2">
        <div className="w-[1440px] h-[812px] flex rounded-3xl">
          <div className="w-[1021px] h-full bg-white rounded-l-3xl"></div>
          <div className="w-[419px] h-full bg-[#55A6C4] rounded-r-3xl"></div>
        </div>

        <div className="flex">
          <div className="ml-20 mt-[-630px]">
            <h2
              style={{ fontWeight: "600", lineHeight: "24px" }}
              className="text-[46px]"
            >
              Contact <span className="text-[#55A6C4]">US</span>
            </h2>
            <p className="text-[14px] my-5">
              Airport Road، Building 7, Level 1, Zone A, The
              Business Gate, Riyadh,
            </p>
            <div className="w-[548px]">
              <input
                placeholder="Contact name"
                className="text-3xl mt-4 w-full"
                style={{ borderBottom: "2px solid black" }}
              />
              <input
                placeholder="Contact Phone"
                className="text-3xl mt-6 w-full"
                style={{ borderBottom: "2px solid black" }}
              />
              <input
                placeholder="Contact Email"
                className="text-3xl mt-6 w-full"
                style={{ borderBottom: "2px solid black" }}
              />
              <textarea
                className="w-full mt-3"
                placeholder="let's talk about your idea"
                style={{ borderBottom: "2px solid black" }}
              ></textarea>
              <button className="text-white bg-blue-500 rounded-2xl w-full py-3 mt-6">
                Submit
              </button>

              <div className="mt-4 flex justify-between">
                <div className="flex">
                  <FaPhoneVolume className="text-4xl mt-2 mr-2" />
                  <div>
                    <p>Phone</p>
                    <p>+966533360688</p>
                  </div>
                </div>
                <div className="flex">
                  <FaPhoneVolume className="text-4xl mt-2 mr-2" />
                  <div>
                    <p>Phone</p>
                    <p>+966533360688</p>
                  </div>
                </div>
                <div className="flex">
                  <IoIosMailOpen className="text-4xl mt-2 mr-2" />
                  <div>
                    <p>E-MAIL</p>
                    <p>info@csc-fog.sa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[500px] h-[650px] ml-36 rounded-2xl mt-[-720px]">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093774!2d-122.41941548468154!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74c8a8bb%3A0xb38f6f2721b6a2e0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1695258046123!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
