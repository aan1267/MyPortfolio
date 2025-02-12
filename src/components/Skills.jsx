import React from 'react'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";


function Skills() {

    const skills=[
        "HTML5","CSS3","JavaScript","Bootstrap","React","Material UI","Tailwind CSS","Node.js","MongoDB","Git","Postman"
      ]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay:0.5}}
    className="text-center text-white font-black lg:mt-[200px]"
  >
     <h1 className="md:text-[60px] sm:text-[10px] mt-[150px] xs:text-[25px] lg:text-[40px] "  id="skills">Skills</h1>
     <Marquee
      gradient={false}
      speed={200}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction="left"
    >
  {skills.map( (skill) => (
     <div className="border-t border-b py-20 xs:py-8 px-6 mt-3  border-[#23213b] lg:max-w-full md:max-w-50 xs:max-w-[900px]  mb-10  flex justify-center">
         <div className="flex rounded-lg mx-auto border-purple-500 hover:border-purple-900 transition-all duration-500 hover:scale-[1.15]  border-2 p-6 cursor-pointer">
          <img key={skill} className="w-12 sm:w-13 md:w-20 lg:w-16" src={`./public/skills/${skill}.png`}/>
         </div>
         </div>
       ))}
       </Marquee>
  </motion.div>
  )
}

export default Skills



