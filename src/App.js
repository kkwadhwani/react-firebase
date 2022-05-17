

import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"



export default function App(){


const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [successful, setSuccess]=useState("")
const checkEmail=(e)=>{
e.preventDefault();

    setEmail(e.target.value)
}

const checkPassword=(e)=>{
e.preventDefault()
setPassword(e.target.value)
}

const handleAuth=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      setSuccess("Your account is registered!")
      setEmail("")
      setPassword("")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
console.log(password, email)

    return(
        <>
       <h1>Email/Password Create Account</h1>
        <input type="text" name="email" placeholder="email" onChange={checkEmail} value={email}/>
        <input type="text" name="password" placeholder="password" onChange={checkPassword} value={password}/>
       <button onClick={handleAuth}>Click Here</button>

       <p>{successful}</p>
    
        </>
    )
}