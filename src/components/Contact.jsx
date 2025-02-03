import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from '@mui/material';
import {motion} from "framer-motion"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setLoading]=useState(false)
  const [alert,setAlert]=useState(null)
  const formRef = useRef();
  
  const variants={
    initial:{x:200,y:0,opacity:0},
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1.2,
        staggerChildren:0.1,
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        "service_g8wsk3f",
        "template_hxgk5wd",
         formRef.current,
          "7hXhmx9IFEb-7P5UO",
      )
      .then(
        (result) => {
          setLoading(false);
           setAlert(  <Alert severity="success">Thank you. I will get back to you as soon as possible.</Alert>)
          setForm({
            name:"",
            email:"",
            message:"",
          })
          setTimeout(()=> setAlert(null),5000)
        },
        (error) => {
          console.log(error);
          setAlert(<Alert severity="error">This is an error alert!</Alert>)
          setLoading(false)
          setTimeout(()=> setAlert(null),5000)
        }
      );
  };
  return (
    <motion.div 
    variants={variants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }} 
    className="flex lg:justify-between mt-[200px]  mb-8  md:flex-col flex-col lg:flex-row ">
     <h1 className="text-center my-16 text-white lg:w-[50%] w-full  lg:text-7xl md:text-xl xs:text-lg  xs:my-8  font-bold">Get in Touch<span className="text-purple-700"> Contact</span></h1>
      {alert && <div className="fixed top-[45px] left-0 w-full p-8">{alert}</div>}
      <motion.div 
       variants={variants} 
      className="lg:w-[50%] w-full border-2 border-[#353a52] gap-8 p-4 text-white rounded-[20px]">
      <form ref={formRef} onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your Name:</label>
            <input
              className="bg-[#10172d] border-2 border-[#353a52] rounded-md px-4 py-2 mb-4 focus:border-[#16f2b3]"
              type="text"
              placeholder="enter your name"
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Your Email:</label>
            <input
              className="bg-[#10172d]  border-2 rounded-md border-[#353a52] px-3 py-2 mb-4  focus:border-[#16f2b3]"
              type="email"
              placeholder="enter your email"
              name="email"
              id="email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Your Message:</label>
            <textarea
              className="bg-[#10172d] border-2 rounded-md border-[#353a52] px-3 py-2 mb-2 mb-4 focus:border-[#16f2b3]"
              placeholder="enter your message"
              name="message"
              rows={2}
              onChange={handleChange}
              value={form.message}
              required
            />
          </div>
          <motion.button
           whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(0,0,0,0.3",
         }}
          className="border-2 border-purple-400 rounded-xl mx-auto px-6 py-2" disabled={loading}>
            { loading ? "Send Message...." : "Send"}
          </motion.button>
      </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
