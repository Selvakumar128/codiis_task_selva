import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
export default function App() {
  const navigation=useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log("success");
  const Login = async () => {
    // console.log('success');
    try {
      let res=await axios
      .post("http://localhost:4000/api/user/login", {
        email: email,
        password: password,
      })
      alert("Login Successfull")
      localStorage.setItem("cal",JSON.stringify(res.data))
      console.log(res.data.isadmin);
      if(res.data.isadmin){
        navigation("/calculator")
      }
    } catch (error) {
      console.log(error.message) 
    }
  };

  return (
    <> <Navbar/>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3 style={{ color: "Black" }}>Login</h3>
              <p style={{ color: "red" }}>
                Please enter your credentials to login.
              </p>
            </div>
          </div>
          <form className="login-form">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button onClick={Login}>Login</button>
        </div>
      </div>
    </>
  );
}
