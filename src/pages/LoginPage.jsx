import React from "react";
import MainLayout from "../components/layout/MainLayout";
import LoginForm from "../components/auth/LoginForm";
const LoginPage = () => {
  return (
    <MainLayout>
      <main className=" flex justify-between items-center w-full pt-[5vw]  md:w-full xl:px-[10vw]">
        <div>haha</div>
        <LoginForm /> 
      </main>
    </MainLayout>
  );
};

export default LoginPage;
