import React, { useState } from 'react'
import "./contact.css"
const ContactUS = () => {
    const [result,SetResult] = useState("")
    const handleSubmit = async(e)=>
        {
            e.preventDefault();
            SetResult("Sending....")
            const formData = new FormData(e.target)
            formData.append("ac")
            const res = await fetch("https://api/web3forms.com/submit",{
                method:"POST",
                body:formData,
            }).then((res)=> res.json())
        }
  return (
    <div className='contact'>
      <div className='contact-col'>
            <h3>
                Send Us a message
            </h3>
            <p>
                feel free to reach us through our contact from
                information below. Your feedback,questions and suggestions
                are valuable to us.
            </p>
            <ul>
                <li>
                    Contact@Mind.in
                </li>
                <li>
                    +91123456789
                </li>
                <li>
                    78,Anna Nagar, 
                    <br>
                   
                    </br>
                    chennai - 612345
                </li>
            </ul>
      </div>
      <div className='contact-col'>
        <form>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required
            />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your PhNumber' required />
            <label>Write your message here</label>
            <textarea name='message' id=''  rows={"6"} placeholder='Enter your Message' required >

            </textarea>
            <button className='btn dark-btn'>
                Submit
            </button>
        </form>
        {
            result &&
            <span>
            sending
        </span>
        }
      </div>
    </div>
  )
}

export default ContactUS
