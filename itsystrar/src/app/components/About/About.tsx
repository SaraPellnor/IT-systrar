import Image from "next/image";
import React from "react";
import aboutImage from "./img/20240518_112819.jpg";
import { IoIosFlower } from "react-icons/io";

const About = () => {
  return (
    <div className=" md:p-20 text-black w-full h-[100vh]  flex flex-col justify-center md:flex-row bg-white items-center">
      <h1 className="absolute top-12 right-[25%] font-bold z-10 text-6xl">ABOUT US</h1>
      <div className=" md:w-1/2 w-4/5 flex justify-center items-center ">
        <IoIosFlower className="absolute md:bottom-16 bottom- left-[4%] text-7xl" />
        <Image
          className=""
          src={aboutImage}
          alt="aboute image"
        />
      </div>
      <div className=" relative h-min md:w-1/2 flex flex-col gap-5 items-center justify-center md:p-16 p-7 text-xs pt-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellendus cumque maxime praesentium corrupti veritatis minus quasi
          impedit sequi ducimus. Numquam ut perspiciatis ea ab illo asperiores
          magni, architecto minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellendus cumque maxime praesentium corrupti veritatis minus quasi
          impedit sequi ducimus. Numquam ut perspiciatis ea ab illo asperiores
          magni, architecto minus!
        </p>
        <div className=" absolute bottom-0 right-16 w-16 border-b-8 border-black"></div>
      </div>
    </div>
  );
};

export default About;
