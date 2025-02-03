import React from "react";
import certificate from "../assets/certificate/certificate.png";
import {learnings} from "../constants/index"

function Certificate() {
  return (
    <div className="flex justify-center items-center flex-col my-[120px]">
      <div className="w-[900px]">
        <img src={certificate} alt="certificate" />
      </div>
      <div>
        <div className="flex justify-between  items-center mx-auto text-[#16f2b3]  w-[900px] mt-6">
          <h1 className="text-2xl font-black">What I learn....</h1>
          <p>Nov2023 - Feb-2024</p>
        </div>
        {learnings.map((learning) => (
            <div className="flex w-[900px] flex-col border-2 text-gray-200  border-[#1d293a] hover:border-[#464c6a] rounded-[20px] mt-5 p-4">
            <div className="flex mb-2 gap-2  xs:text-sm lg:text-xl text-xl items-center">
              <img
                className="max-h-24 xs:max-h-4"
                src="./public/img/fast forward.png"
                alt=".."
              />
              <p className="text-white">
                {learning}
              </p>
            
            </div>
            </div>
        ))}
          </div>
     </div>
  );
}

export default Certificate;
