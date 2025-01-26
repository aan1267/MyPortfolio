import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsFillPersonLinesFill,BsLaptop,BsCalendar3} from "react-icons/bs";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const MenuVariants = {
    open: {
      y: 0, // Slides down to the top of the screen
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 25 }
    },
    closed: {
      y: '-100%', // Hides it off the screen from the top
      opacity: 0,
      transition: { type: 'spring', stiffness: 100, damping: 25 }
    }
  };

  
  return (
    <div className="fixed top-0 left-0  w-full  bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] flex justify-between text-gray-200 text-xl items-center mx-auto px-6 h-20">
        <a href="#" className="lg:text-3xl md:text-3xl sm:text-3xl text-xl">
          <span className="">&lt; </span>
          <span className="font-agustina lg:px-[10px]  md:px-[10px] px-0 font-bold">
            Aanchal Sharma{" "}
          </span>
          <span className=""> /&gt; </span>
        </a>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer relative">
          <li>
            <Link to="/skill" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} offset={50} duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} offset={50} duration={500}>
              Experience
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50  text-gray-200">
          {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={MenuVariants}
        className="absolute left-0 top-16 w-screen  bg-[#101825] bg-opacity-75   flex flex-col  gap-8 items-center"
      >
        <ul className="font-semibold text-white text-xl space-y-8 p-[20px] text-center">
          <li>
            <Link
              to="skill"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white flex items-center gap-2 "
            >
              <BsFillPersonLinesFill/>About
            </Link>
          </li>
          <li>
            <Link
              to="project"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white flex items-center gap-2"
            >
              <BsLaptop/>Project
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white flex items-center gap-2"
            >
              <BsCalendar3/>Experience
            </Link>
          </li>
        </ul>
         {/* <ul className="bg-black">
          <li>
            <Link to="skill" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} offset={50} duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} offset={50} duration={500}>
              Experience
            </Link>
          </li>
        </ul> */}
      </motion.div>
    </div>
  );
}

export default Navbar;
