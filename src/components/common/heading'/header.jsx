import React, { useState } from 'react'
import Head from './head';
import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
    const [click,setClick]=useState(false);
  return (
    <div>
      <Head/>
      <header>
        <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=>setClick(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">All Courses</Link></li>
                    <li><Link to="/login">Login</Link></li>
                 

                    
                </ul>
      
                <div className="start">
                    <div className="button">Get Certificate</div>
                </div>
                <button className='toggle' onClick={()=>setClick(!click)}>
                    {click ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
                </button>
        </nav>
      </header>
    </div>
  )
}

export default Header;
