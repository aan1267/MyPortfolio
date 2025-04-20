import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { BsFillPersonLinesFill, BsLaptop, BsCalendar3 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const { theme,setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(!open);
  };

  const handleLightDarkMode = (e) => {
    e.stopPropagation()
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const MenuVariants = {
    open: {
      y: 0, // Slides down to the top of the screen
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    closed: {
      y: "-100%", // Hides it off the screen from the top
      opacity: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md  z-50  ${
        theme === "dark" ? "bg-[#190b1f]" : "bg-gray-500"
      }`}
    >
      <div className={`max-w-[1300px] flex justify-between items-center mx-auto lg:px-[90px] text-xl  px-6  h-20 ${theme == "light" ? "text-zinc-900" :"text-gray-200"}`}>
        <RouterLink
          to="/"
          className="md:text-2xl  sm:text-3xl text-xl cursor-pointer"
        >
          <span>&lt; </span>
          <span className="font-agustina lg:px-[10px] md:px-[10px] px-0 font-bold">
            Aanchal Sharma
          </span>
          <span className=""> /&gt; </span>
        </RouterLink>
       <div className="lg:ml-80">
       {pathname === "/" &&(
          <ul className={`hidden md:flex gap-12 z-10 cursor-pointer relative items-center justify-center ${theme == "light" ? "text-zinc-900" :"text-gray-200"}`}>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
                className={`${theme === "light" ? "hover:text-yellow-400" : "hover:text-pink-500"}`}

              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                className={`${theme === "light" ? "hover:text-orange-300" : "hover:text-pink-500"}`}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <RouterLink
                onClick={handleClick}
                to="/mycertificate"
                className={`${theme === "light" ? "hover:text-orange-300" : "hover:text-pink-500"}`}
              >
                Certificate
              </RouterLink>
            </li>
            <li>
              <ScrollLink
                to="experience"
              >
                Experience
              </ScrollLink>
            </li>
            <div onClick={handleLightDarkMode} className={`hover:rounded-full w-12 h-12 active:scale-95 flex items-center justify-center  ${theme == "light" ? "hover:bg-gray-200" : "hover:bg-zinc-400"}`}>
              {theme === "light" ? (
                <FaRegMoon size={27} />
              ) : (
                <FaSun size={27} />
              )}
            </div>
          </ul>
        )}
       </div>
      
        {/* issue face theme  not work even after click resolve  by  add z index */}
        {pathname === "/" && (
            <div className="flex  items-center justify-between">
              <div onClick={handleLightDarkMode} className="flex items-center justify-center md:hidden cursor-pointer  w-12 h-12 hover:rounded-full  hover:bg-gray-900 px-3 z-50">
              {theme === "light" ?(
                <FaRegMoon size={24} />
              ) : (
                <FaSun size={24} />
              )}
             </div>
             <div
                onClick={
                    toggleNav}
                  
                className="flex items-center justify-center md:hidden   text-gray-200 cursor-pointer hover:rounded-full w-12 h-12 hover:bg-gray-900 px-3 z-50"
              >
              {open ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={30} />
              )}
              </div>
            
          </div>
        )}
      </div>

      {pathname === "/" && (
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={MenuVariants}
          className="absolute left-0 w-full bg-[#101825] bg-opacity-75 flex flex-col  gap-8 items-center"
        >
          <ul className="font-semibold  text-white text-xl space-y-8 p-[20px] text-center">
            <li>
              <ScrollLink
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={-60}
                duration={500}
                className="text-white flex items-center gap-2 cursor-pointer hover:text-pink-500"
              >
                <BsFillPersonLinesFill />
                About
              </ScrollLink>
            </li>
            <li>
              <RouterLink
                to="/mycertificate"
                onClick={() => {
                  closeNav();
                  handleClick();
                }}
                className="text-white flex items-center gap-2 cursor-pointer hover:text-pink-500"
              >
                <BsFillPersonLinesFill />
                Certificate
              </RouterLink>
            </li>
            <li>
              <ScrollLink
                to="project"
                onClick={closeNav}
                smooth={true}
                offset={-60}
                duration={500}
                className="text-white flex items-center gap-2 cursor-pointer hover:text-pink-500"
              >
                <BsLaptop />
                Project
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="experience"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
                className="text-white flex items-center gap-2 cursor-pointer hover:text-pink-500"
              >
                <BsCalendar3 />
                Experience
              </ScrollLink>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;


