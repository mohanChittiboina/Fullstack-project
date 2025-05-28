import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Login from './Login';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [variable,setvariable]=useState(1)
    let navigate = useNavigate();
    const Ll = ()=>{
        setvariable(0)
        navigate('/login')
    }
    const Ls = () =>{
        navigate('/registration')
    }
    const ch = ()=>{
        setvariable(1)
        localStorage.setItem("login","false")
        navigate('/')
    }
    const ver =()=>{
        if (localStorage.getItem("login")=="false"){
            alert("Login....")
        }
        else{
            navigate('/assig')
        }
    }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">SkillEdge Academy</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li onClick={ver}><Link  >Assignments</Link></li>
        </ul>
      </div>
      {localStorage.getItem("login")=="false"?<div className="navbar-right">
        <button className="btn login" onClick={Ll}>Login</button>
        <button className="btn signup" onClick={Ls}>Sign Up</button>
      </div>:
      <button className="btn login" onClick={ch}>Log Out</button>
}
    </nav>
  );
};

export default Navbar;
