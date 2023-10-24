import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'


const Login=()=>{
    const navigate = useNavigate();
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const signIn = (e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password).then
((userCredential)=>{
    console.log(userCredential)
    navigate("/home")
}).catch((error)=>{
    console.log(error);
})
}

    return (
        <div>
<p className="text-3xl font-bold underline">Login</p>
<form onSubmit={signIn} >
<input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
<button>Login</button>
</form>
        </div>
    )
}
export default Login;
