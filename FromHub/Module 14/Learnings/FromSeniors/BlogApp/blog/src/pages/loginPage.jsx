import { auth } from "../firebase/firebase"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

import "./loginPage.css"
function LoginPage(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    

    const navigate=useNavigate()

    
    async function loginHandler(e){

        e.preventDefault()
     
        try{
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            
            navigate("/blogList",{ replace: true })
            
        }catch(err){
            setError(err.message)
        }
        
    }
    return ( <div className="login-container"> 
    <div className="login-box">
         <h1>Login</h1>
          <form onSubmit={loginHandler}> 

            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <button type="submit"> Login </button> 
            </form> 
            {error && ( <p className="login-error"> {error} </p> )} 
            </div> 

            </div> 
    )
}

export default LoginPage