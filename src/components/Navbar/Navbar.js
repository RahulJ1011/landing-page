import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.jpg"
import "./navbar.css"
const Navbar = () => {
    const [sticky,setSticky] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false)
        })
    },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
      <img src={logo} width={100} height={100}
      
      alt='Mind'
      style={{
        borderRadius:"20px"
      }}
      className='logo'
      />
      <h3 style={{
        fontSize:"25px"
      }}>Mind</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Program</li>
        <li>Campus</li>
        <li>About Us</li>
        <li>Testimonals</li>
        <li>
            <button className='btn'>
            Contact US
            </button>
           
           
            </li>
      </ul>
    </nav>
  )
}

export default Navbar
