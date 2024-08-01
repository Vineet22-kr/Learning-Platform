import React, { act, useState } from 'react'
import './Login.css' 

const Login = () => {

    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className='input'>
                <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt=""/>
                <input type="text" placeholder='Username'/>
            </div>}
            
            <div className='input'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l0oyjR8U9Fsk8E_oMWs3Z6_z1KX4phkPQw&s" alt=""/>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='input'>
                <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
                alt=""/>
                <input type="password" placeholder='*******'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password? <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      
    </div>
  )
}

export default Login;