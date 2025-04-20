import React,{createContext,useState,useEffect} from "react" 
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export const ThemeContext = createContext();

const ThemeProvider=()=>{
    const [theme,setTheme] =useState("light")

    //persist theme after reload 
    useEffect(()=>{
       const storedTheme = localStorage.getItem("theme",theme)
       if(storedTheme){
         setTheme(storedTheme)
       }
    },[])


    // save
    useEffect(()=>{
      localStorage.setItem("theme",theme)
    },[theme])


   return(
    <ThemeContext.Provider value={{theme,setTheme}}>
        <div className={`${theme === "dark" ? "dark:bg-[#190b1f]":"bg-gray-500"}`}>
          <Navbar/>
          <Outlet/>
        </div>
    </ThemeContext.Provider>
   )
}

export default ThemeProvider
