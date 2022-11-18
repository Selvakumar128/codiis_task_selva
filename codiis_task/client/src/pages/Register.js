import axios from "axios";
import React, { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[mobileNum,setMobileNum]=useState();
  const Reg = async() => {
    try {
      let res=await axios.post("http://localhost:4000/api/user/reg", {
        name: name,
        email: email,
        password: password,
        mobileNum:mobileNum 
      })
        alert("Register Successful")
    } catch (error) {
      alert("Email id exits.. Please enter a valid email  id")
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3 style={{color:"black"}}>Register</h3>
              <p style={{color:"pink"}}>Please enter your credentials to register.</p>
            </div>
          </div>
          <form className="login-form">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="number"
              placeholder="MobileNumber"
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
          <button onClick={Reg}>Register</button>
        </div>
      </div>
      </>
    </>
  );
}
