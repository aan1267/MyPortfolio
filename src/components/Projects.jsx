import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../constants/index.js";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider.jsx";

const handleClick = () => {
  window.scrollTo(0, 0);
};

function Projects() {

  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-white font-black mt-[500px] lg:mt-[200px] xs:mt-[90px]"
    >
      <p
        className="text-center md:text-[60px] sm:text-[10px] xs:text-[25px] lg:text-[40px] font-black"
        id="project"
      >
        Project
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center gap-2 rounded-lg mt-8 xs:mt-3">
        {projects.slice(0, 3).map((pro, index) => (
          <>
            <Tilt
              key={pro.id}
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className={`max-w-[370px] md:max-w-[320px] xs:max-w-[290px] border border-[#1d293a] hover:border-[#464c6a] rounded-[20px] ${
                index === 2 ? "lg:block hidden" : ""
              } ${index === 1 ? "hidden md:block" : ""}`}
            >
              <div className="overflow-hidden h-[350px]  xs:h-[250px] p-5  object-cover w-auto  cursor-pointer">
                <img
                  src={pro.image}
                  alt="..."
                  className="w-full h-full rounded-t-lg"
                />
              </div>
              <div className="bg-[#1b203e]  p-4 md:h-[190px] xs:h-[150px] rounded-b-[20px] text-sm">
                <h1 className="text-[#16f2b3] mb-2">{pro.title}</h1>
                <p>{pro.description}</p>
                {/* <div className="flex flex-wrap gap-2">
              {pro.tags?.map((tag,index) =>(
                 <h1 key={index} className="bg-gray-200 p-2 text-black  rounded-lg">{tag}</h1>
              ))} 
              </div> */}
              </div>
            </Tilt>
          </>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div
          className={`cursor-pointer mx-auto font-bold text-gray-200 mt-5 md:w-auto md:p-5 xs:p-3 border rounded-xl md:text-xl xs:text-sm ${
            theme === "light" ? "border-red-700" : "border-purple-400"
          }`}
        >
          <Link to="/project/all" onClick={handleClick}>
            view more
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
