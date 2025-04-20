import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Aanchal from "../assets/my-images/Aanchal.jpg";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
  console.log(window.location.pathname);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:gap-8 lg:gap-16 sm:place-items-start md:place-items-start lg:place-items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:mt-32 order-last lg-order-first md:order-last"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`xs:text-[30px] lg:text-6xl md:text-7xl sm:text-6xl font-black text-4xl mb-3 tracking-tight ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Hi, I'm <br />
          <span
            className={`text-transparent bg-clip-text ${
              theme === "light"
                ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-700"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            }`}
          >
            Aanchal Sharma
          </span>
        </motion.p>
        <motion.p
          className="text-white xs:text-xl lg:text-2xl md:text-2xl sm:text-2xl">
        
        <TypeAnimation
             sequence={[
              "Web Developer",
              1000,
              "Always Learn New Things",
              1000,
              "curious to learn",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
           />
          </motion.p>
         

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-row gap-x-8 items-center my-4 md:mb-0"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0,0,0,0.3",
            }}
            className={`z-10 cursor-pointer font-bold mt-2 md:w-auto md:p-5 xs:p-3 border rounded-xl md:text-xl xs:text-sm ${
              theme == "light" ? "border-red-700 text-gray-900" : "border-purple-400  text-gray-200" 
            }`}
          >
            About me
          </motion.button>

          <div className="flex gap-6 flex-row text-4xl md:text-6xl z-20">
            <motion.a whileHover={{ scale: 1.2 }} href="">
              <ImGithub
                className={`${
                  theme == "light" ? "text-gray-900" : "text-white"
                }`}
                size={40}
              />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="">
              <ImLinkedin
                className={`${
                  theme == "light" ? "text-gray-900" : "text-white"
                }`}
                size={40}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.img
        src={Aanchal}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-32 order-first  md:order-first lg:order-last  rounded-full w-[200px] md:w-[200px] sm:w-50 md:h-[450px]  lg:h-[550px] lg:w-[400px] border-4 border-solid border-pink-500 h-50 neon-border animate-neon"
      />
      <div className="absolute  hidden md:block"></div>
    </div>
  );
}

export default Hero;
