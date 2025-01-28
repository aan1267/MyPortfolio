import React from 'react'
import { motion } from "framer-motion";
import { projects } from "../constants/index.js";


function ProjectAll() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 1}} >

     <div className="flex justify-center my-24">
     <div className="flex items-center">
     <span class="w-24 h-[2px] bg-[#1a1443]"></span>
     <p className="w-fit bg-[#1a1443] text-white p-2 px-5 rounded-md text-2xl">Project </p>
     <span class="w-24 h-[2px] bg-[#1a1443]"></span>
     </div>
     </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center max-w-[1200px] gap-y-6 mx-auto">
      {projects.map((pro,index) => (
        <>
        <div
          key={pro.id}
          className={`relative max-w-[355px] group group-hover:opacity-50 w-full border border-[#1d293a] hover:border-[#464c6a] rounded-[10px]  ${index === 2 ? "lg:block hidden":""} ${index === 1 ? "hidden md:block":""}`}
        >
             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
               <p className="text-white text-xl font-bold">
                <a href="https://travstay-frontend-880v.onrender.com">Demo</a>
               </p>
            </div>
          <div className="overflow-hidden h-[250px] object-cover w-auto  cursor-pointer">
            <img
              src={pro.image}
              alt="..."
              className="w-full h-full rounded-t-[10px]  rounded-t-[10px] group-hover:opacity-50 transition-opacity duration-300"
            />
          </div>
          <div className="bg-slate-800 flex flex-col gap-y-2 p-3 h-[300px] rounded-b-[10px] text-white">
            <div className="text-[#16f2b3] flex  justify-between">
                {pro.title}
            <h2>{pro.date}</h2>
            </div>
            <p>{pro.description}</p>
           <div className="flex flex-wrap gap-2">
           {pro.tags?.map((tag,index) =>(
               <p key={index} className="text-[14px] bg-gray-200 text-black rounded p-2">{tag}</p>
            ))} 
           </div>
        </div>
        </div>
        </>
      ))}
    </div>
  </motion.div>
  )
}

export default ProjectAll