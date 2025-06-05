import { useState,useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";


function ScrollTop() {
    const [ showButton, setShowButton] = useState(false);

    useEffect(()=>{
      const checkScroll =()=>{
        setShowButton(window.scrollY > 100)
     } 

     window.addEventListener("scroll", checkScroll);
     
     return()=> window.removeEventListener("scroll",checkScroll)
     
    },[])

    const handleScrollTop = ()=>{
        window.scrollTo({top:0,transition:"smooth"})
    }

  return (
   showButton && 
     <div className="fixed right-5 bottom-5">
          <button onClick={handleScrollTop}  className="flex items-center justify-center rounded-full bg-gray-200 w-12 h-12">
            <FaArrowUpLong size="30"/>
          </button>
    </div>
  )
}

export default ScrollTop