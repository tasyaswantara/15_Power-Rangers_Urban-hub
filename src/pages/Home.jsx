import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/ui/Button";
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
    <h1 className=" text-6xl font-bold text-text-black w-3/4 text-center" >Hackfest Punya Power Rangers</h1>
    <Button variation={"secondary"} type={"submit"} >Anjay</Button>
    </div>
    
    </>
  );
};

export default Home;
