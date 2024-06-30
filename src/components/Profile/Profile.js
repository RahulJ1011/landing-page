import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profile container'>
      <div className='profile-text'>
        <h1>Education is the Key to sucess</h1>
        <p>
            "Education is the most powerful weapon which you can use to change 
            the world.” —Nelson Mandela. 
            There's no doubt about it: Education is a powerful tool for change.
        </p>
        <button className='btn'>discover more
            
            <FaArrowDown />
        </button>
      </div>
    </div>
  )
}

export default Profile
