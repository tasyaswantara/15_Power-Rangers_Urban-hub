import { axiosInstance } from "../CoreApi";

const handleLogin = async (body) => {
    try {
      const response = await axiosInstance.post("user/login", {
        email: body.email,
        password: body.password,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }         
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("register", {
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};




export { handleLogin, handleRegister };