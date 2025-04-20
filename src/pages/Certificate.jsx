import React from "react";
import certificate from "../assets/certificate/certificate.png";
import { learnings } from "../constants/index";

function Certificate() {
  return (
    <div className="flex justify-center items-center flex-col  max-w-[1200px]  mx-auto px-10">
      <div className="max-w-[800px] w-full mt-[120px]">
        <img
          src={certificate}
          alt="certificate"
          className="sm:w-[500px] xs:w-[600px] lg:w-[900px] rounded-[20px] mx-auto"
        />
      </div>
      <div className="w-full mb-[120px]">
        <div className="flex justify-between  items-center  text-[#16f2b3]  sm:max-w-[500px] md:max-w-[900px] mt-6 mx-auto">
          <h1 className="lg:text-2xl  sm:text-xl font-black">
            What I learn....
          </h1>
          <p className="md:text-xl text-[12px]">Nov2023 - April-2024</p>
        </div>
        {learnings.map((learning) => (
          <div className="flex md:max-w-[900px] mx-auto w-full sm:max-w-[650px] flex-col flex-wrap  border-2 text-gray-200  border-[#1d293a] hover:border-[#464c6a] rounded-[20px] mt-5 p-4">
            <div className="flex mb-2 gap-2  xs:text-sm lg:text-xl text-xl items-center">
              <img
                className="xs:hidden md:block md:max-h-[26px]"
                src="./public/img/fast forward.png"
                alt=".."
              />
              <p className="text-white xs:text-[13px] md:text-xl">{learning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
