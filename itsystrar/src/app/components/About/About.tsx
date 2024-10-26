import Image, { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface AboutProps {
  image: StaticImageData | string;
  icon: IconType;
}

const About: React.FC<AboutProps> = ({ image, icon: Icon }) => {
  return (
    <div className="font-nunito md:p-20 p-10 w-full md:h-[100vh] flex justify-center items-center">
      <div className="flex gap-10 flex-col md:flex-row items-center md:items-stretch">
        <div className="relative md:w-1/2 flex justify-center items-center">
          <Icon className="absolute -bottom-5 -right-5 md:bottom-16 md:-left-12 text-7xl" />
          <Image
            className="rounded-xl"
            src={image}
            alt="två tjejer sitter vid en dator och arbetar"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between items-center md:items-start gap-5 md:pr-16 text-center md:text-start text-sm">
          <h1 className="whitespace-nowrap font-bold text-6xl">ABOUT US</h1>
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
          <div className=" self-end w-16 border-b-8"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
