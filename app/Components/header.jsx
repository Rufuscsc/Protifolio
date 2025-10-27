import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-24"
    >
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32"
        ></Image>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Wellens Rufus
        {/* <Image src={assets.hand_icon} alt="" className="w-6"></Image> */}
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[40px] font-Ovo">
        frontend web developer based in Nigeria
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend web developer with a passion for creating beautiful,
        functional, and user-friendly websites. I have a strong foundation in
        HTML, CSS, and JavaScript, and I am always eager to learn new
        technologies and techniques. My goal is to create websites that not only
        look great but also provide an excellent user experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href=""
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          {" "}
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </a>

        <a
          href="./sample.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          {" "}
          my resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </a>
      </div>
    </div>
  );
};

export default Header;
