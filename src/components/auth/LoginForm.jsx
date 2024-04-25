import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleLogin(form);

      window.localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] md:max-w-[500px] flex flex-col gap-2 h-fit">
      {/* TITLE PART  */}
      <h4 className="mb-2.5  text-3xl font-bold text-secondary-blue  md:text-4xl">
      Masuk dulu yuk!
        </h4>
        <p className="mb-8 ml-1  text-base text-gray-600">
        Biar kamu bisa gunain semua fitur yang ada di BRAW!
        </p>
       
        

      {/* FORM PART */}
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <Input
        onChange={(e)=>setForm({...form, email:e.target.value}) }
          extra="mb-3"
          label="Email"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <Input
        onChange= {(e) => setForm({ ...form, password: e.target.value }) }
         
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        
        <div className="mb-4 lg:mb-3 flex items-center  gap-3">
          <div className="h-px w-full bg-primary-black" />
          <p className="text-base text-text-black dark:text-white"> atau </p>
          <div className="h-px w-full bg-primary-black dark:bg-navy-700" />
        </div>
        
        <div className=" w-full min-h-18 h-fit  flex justify-center items-center ">
          <FcGoogle size={40}/>
        </div>
        <Button onClick={handleSubmit} type="submit" variation={"secondary"} className=" mt-2 mb-3 md:mb-0  rounded-xl  py-[12px] text-base font-medium text-white transition duration-200 hover:bg-secondary-lightblue w-[50%] mx-auto">
          Masuk
        </Button>
        <div className="mt-3 flex w-full justify-center ">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href="/u/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white "
          >
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
