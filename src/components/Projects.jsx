import React, { useState } from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { projects } from "../constants/index.js";

// const Tags = styled.div`
//   {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 8px;
//     margin-top: 4px;
//  }

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-white font-black mt-[500px] lg:mt-[200px]"
    >
      <p className="text-center md:text-[60px] sm:text-[10px] xs:text-[20px] lg:text-[40px] font-black">
        Project
      </p>
      <div className="flex flex-wrap justify-evenly rounded-lg gap-2 mt-8">
        {projects.slice(0, 3).map((pro) => (
          <>
          <Tilt
            key={pro.id}
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className="max-w-[360px]  border border-[#1d293a] hover:border-[#464c6a]   rounded-[20px"
          >
            <div className="overflow-hidden h-[300px] object-cover w-auto  cursor-pointer">
              <img
                src={pro.image}
                alt="..."
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="bg-[#1b203e]  p-4 h-[350px]">
              <h1 className="text-blue-200">{pro.title}</h1>
              <h2>{pro.date}</h2>
              <p>{pro.description}</p>
              <div className="flex flex-wrap gap-2">
              {pro.tags?.map((tag,index) =>(
                 <h1 key={index} className="bg-gray-200 p-2 text-black  rounded-lg">{tag}</h1>
              ))} 
              </div>
              
            </div>
          </Tilt>
          </>
        ))}
      </div>
      <motion.button
         whileHover={{
           scale: 1.05,
           boxShadow: "0px 0px 8px rgba(0,0,0,0.3",
         }}
         className="z-10 mx-auto mt-8 cursor-pointer font-bold text-gray-200  md:w-auto p-5 border border-purple-400 rounded-xl text-xl"
       >
         view more
       </motion.button>
    </motion.div>
  );
}

export default Projects;
