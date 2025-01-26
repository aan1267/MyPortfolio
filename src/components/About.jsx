import React,{useState} from 'react'

function About() {
    const [activesection,setActiveSection]=useState("")
    const [open,setOpen]=useState("")

    const handleSection=(section)=>{
       setActiveSection(section)
       setOpen(open === section ?"":section)
    }

  return (
    <>
      <div className="w-full p-8 min-h-[250px] mt-[200px] mx-auto bg-[#110016]">
        <h1 className="text-center  text-white text-xl border-b border-yellow-100 max-w-40 mx-auto mb-8">A Bit About Me</h1>
        <div className="flex mb-2 gap-2  xs:text-sm lg:text-xl text-xl">
          <img
            className="max-h-8 max-h-4"
            src="./public/img/fast forward.png"
            alt=".."
          />
          <p className="text-white">
            I am a
            <span className="text-sky-300">full-stack developer</span>{" "}
            with a strong foundation in frontend development and expanding
            knowledge of backend technologies.
          </p>
        </div>
        <div className="flex mb-2 gap-2 lg:text-xl xs:text-sm text-xl">
          <img
            className="max-h-8 xs:max-h-4"
            src="./public/img/fast forward.png"
            alt=".."
          />
          <p className="text-white">
            Constantly exploring new technologies and staying up-to-date with
            industry trends to improve my skillset.
          </p>
        </div>
        <h1 className="text-center text-gray-200 lg:text-lg xs:text-xs">"I believe in learning something new every day to grow as a programmer."</h1>
        <div>
           <section className="flex mt-8 pb-4 text-white gap-16 border-b border-[#23213b]">
              <button onClick={()=>handleSection("Education")} className={activesection === "Education" ? "border-b-2 border-yellow-500":""}>Education</button>
              <button onClick={()=>handleSection("skills")} className={activesection === "skills" ? "border-b-2 border-yellow-500":""} >skills</button>
           </section>
           {activesection === "Education" && open === "Education" && (
              <div className="flex gap-4 flex-wrap">
                <div key={"Education"} className="text-white green-pink-gradiant mt-5 rounded-lg w-[250px] p-[1px]">
               <h1 className="text-lg bg-[#110016] rounded-lg py-5 px-6 h-[180px]"><span className="text-green-300">2022-2025</span><br/>
                Bachelor Degree (BCA)</h1>
                </div>
                 <div key={"skills"} className="text-white green-pink-gradiant mt-5 rounded-lg w-[250px] p-[1px]">
                <h1 className="text-lg bg-[#110016] rounded-lg py-5 px-6 h-[180px]"><span className="text-green-300">2020-2022</span><br/>
                Higher Secondary(PCM)</h1>
              </div>
              </div>
           )}
           </div>
           {activesection === "skills" && open === "skills" && (
             <div key={"skills"} className="max-width-[20px] text-white">
                 <div className="flex gap-4 flex-wrap">
                <div key={"skills"} className="text-white green-pink-gradiant mt-5 rounded-lg w-[250px] p-[1px]">
               <h1 className="text-lg bg-[#110016] rounded-lg py-5 px-6 h-[180px]"><span className="text-green-300">2022-2025</span><br/>
                 Web Developer</h1>
                </div>
                </div>
                </div>
           )}
           </div>
    </>
)}

export default About;
