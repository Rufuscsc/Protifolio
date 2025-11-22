import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-24"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32"
        ></Image>
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Wellens Rufus
        {/* <Image src={assets.hand_icon} alt="" className="w-6"></Image> */}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[40px] font-Ovo"
      >
        frontend web developer based in Nigeria
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a frontend web developer with a passion for creating beautiful,
        functional, and user-friendly websites. I have a strong foundation in
        HTML, CSS, and JavaScript, and I am always eager to learn new
        technologies and techniques. My goal is to create websites that not only
        look great but also provide an excellent user experience.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href=""
          className={`px-10 py-3 border border-white rounded-full flex items-center gap-2 text-white transition-all duration-500 ${
            isDarkMode ? "bg-transparent" : "bg-black"
          }`}
        >
          {" "}
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./sample.pdf"
          className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white transition-all duration-500 ${
            isDarkMode ? "text-black" : ""
          }`}
        >
          {" "}
          my resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
