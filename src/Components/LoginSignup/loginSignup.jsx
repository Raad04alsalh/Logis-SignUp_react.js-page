import React, { useState } from "react";
import './LoginSignup.css'
 
const LoginSignup = () =>{
    const [action, setAction] = useState("Login");
    return(
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div><br></br>
        </div>
        <div className="inputs">
            {action==="Login"? <div></div>:<div className="input">
                <label for="_name">Name: </label>
                <input type='text' name="_name"></input>
            </div>} 
            <div className="input">
                <label for="_email">Email: </label>
                <input type='email' name="_email"></input>
            </div>
            <div className="input">
                <label for="_password">Password: </label>
                <input type='password' name="_password"></input>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgotPassword"> Lost Password ? <span>Click here</span> </div>}
        <div className="submitContainer">
           <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign UP</div> 
           <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
        </div>
     </div>
    )
}
export default LoginSignup