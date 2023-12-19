import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { AxiosError } from "axios";

function App() {
  const onClickRegister = async () => {
    try {
      const res = await axios.post("/api/users/signup", {
        email: "test@gmail.com",
        password: "1234",
      });
      console.log(res.status);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.errors[0]);
        
      }
      console.log(error);
      
    }
    

  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          asdasd
        </a>
      </div>
      <h1>Vite + React</h1>
      Hello World 2<button onClick={onClickRegister}>register</button>
      {/* <button>register</button> */}
    </>
  );
}

export default App;
