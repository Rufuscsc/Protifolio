import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Service = ({ isDarkMode }) => {
  return (
    <div id="service" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My service</h2>

      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        I am a skilled web developer with expertise in creating responsive and
        user-friendly websites.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`px-8 py-12 border-[0.2px] border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${
              isDarkMode
                ? "hover:bg-dark-hover hover:shadow-white"
                : "hover:bg-lightHover hover:shadow-black"
            }`}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3
              className={`text-lg my-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-5 ${isDarkMode ? "text-white/80" : "text-gray-600"}`}
            >
              {description}
            </p>
            <a
              href={link}
              alt=""
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
