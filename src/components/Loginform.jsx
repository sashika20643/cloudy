import logo from "../../public/logo.png"
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
const LoginForm=()=>{
    const navigate = useNavigate();
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const signIn = (e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password).then
((userCredential)=>{
    console.log(userCredential)
    navigate("/dashboard")
}).catch((error)=>{
    console.log(error);
})
}
return(
    <div className="card-body p-4 p-lg-5 text-white ">
    <form onSubmit={signIn}>
      <div className="d-flex align-items-center mb-3 pb-1">
        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
    
       <img src={logo} className="img-thumbnail " style={{width:'20%'}} alt="" />

      </div>

      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
        Sign into your account
      </h5>

      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example17"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example17">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example27"
          className="form-control form-control-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example27">
          Password
        </label>
      </div>

      <div className="pt-1 mb-4">
        <button className="btn btn-dark btn-lg btn-block" type="submit" >
          Login
        </button>
      </div>

    
    </form>
  </div>
);

    
}
export default LoginForm;