import React from 'react'
import { projects } from "../constants/index.js";
import { motion } from "framer-motion";


function ProjectAll() {

  const SlideVariants = {
    hidden: { y: '-50%', opacity: 0 },  // Start above the screen(if positive down the screen)
    visible: { y: '0%', opacity: 1 },    // Slide to the original position
  };

  
  
  return (
    <>
    <div className="flex justify-center" >
     <div className="flex items-center mt-24">
     <span class="w-24 h-[2px] bg-[#1a1443]"></span>
     <p className="w-fit bg-[#1a1443] text-white p-2 px-5 rounded-md text-2xl">Project </p>
     <span class="w-24 h-[2px] bg-[#1a1443]"></span>
     </div>
     </div>
    <div className="py-24 grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 place-items-center max-w-[1200px] gap-y-12  mx-auto">
      {projects.map((pro,index) => (
        <>
        <div
          key={pro.id}
          className={`relative lg:max-w-[355px] xs:max-w-[300px] md:max-w-[355px] group group-hover:opacity-50 w-full border border-[#1d293a] hover:border-[#464c6a] rounded-[10px]`}
        >
          {/* trigger styles on a child element when a parent element is hovered, use group and group-hover */}
             <motion.div
              initial="hidden"  
             animate="hidden"
             whileHover="visible" // Trigger animation on hover
             variants={SlideVariants}
             className="absolute inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 ease-in-out"
             >
                <div className='max-w-[50px] '>
                <a href="https://travstay-frontend-880v.onrender.com">
                <img src="../public/img/play-video.svg" alt="live-demo"/>
                </a>
                </div>
              </motion.div>
          <div className="overflow-hidden h-[250px] object-cover w-auto  cursor-pointer">
            <img
              src={pro.image}
              alt="..."
              className="w-full h-full    rounded-t-[10px] group-hover:opacity-50 transition-opacity duration-300"
            />
          </div>
          <div className="bg-slate-800 flex flex-col gap-y-4 p-3 lg:h-[300px] xs:h-[360px] rounded-b-[10px] text-white">
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
    </>
  )
}

export default ProjectAll


