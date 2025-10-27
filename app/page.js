"use client";
import About from "./Components/About";
import Header from "./Components/header";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
    </>
  );
}
