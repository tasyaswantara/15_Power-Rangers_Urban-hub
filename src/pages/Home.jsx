import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div  className=" rounded-3xl flex justify-center items-center bg-slate-400 w-1/2 h-[60vh] mx-auto mt-[20vh] transform transition-transform animate-bounce shadow-2xl shadow-slate-800">
    <h1 className=" text-6xl font-bold text-white w-3/4 text-center" >Hackfest Punya Power Rangers</h1>
    </div>
    
    </>
  );
};

export default Home;
