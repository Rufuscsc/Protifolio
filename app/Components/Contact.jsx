import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e54a302-a0cb-4e9b-80cf-aa119f51d9a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-dark-hover/30 border-white/90"
                : "bg-white border-gray-400"
            }`}
            name="name"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-dark-hover/30 border-white/90"
                : "bg-white border-gray-400"
            }`}
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter Your Message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? "bg-dark-hover/30 border-white/90"
              : "bg-white border-gray-400"
          }`}
          name="message"
        ></textarea>
        <button
          type="submit"
          className={`w-max flex items-center justify-between gap-2 text-white py-3 px-8 rounded-full mx-auto duration-500 ${
            isDarkMode
              ? "bg-transparent border-[0.5px] hover:bg-dark-hover"
              : "bg-black/80 hover:bg-black"
          }`}
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="text-center mt-4 font-Ovo">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
