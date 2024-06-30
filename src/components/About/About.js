import React from 'react'
import "./About.css"
import AboutUS from "../../assets/AboutUS.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img className='about-img' src={AboutUS}  />
      </div>
      <div className='about-right'>
        <h3>About US</h3>
        <h2>Taking technology forward</h2>
        <p>
        Technology is one of the keywords of our world, yet 
        it is also one of the most confused. As an analytical
         category it seems necessary for our understanding of
          all of humanity history, and indeed beyond. We are 
          probably comfortable with asserting that humans have 
          had technologies since the Palaeolithic, and a menagerie 
          of animals, from crows to chimps, have even been identified as tool users.
        </p>
        <p>
        Technology is one of the keywords of our world, yet 
        it is also one of the most confused. As an analytical
         category it seems necessary for our understanding of
          all of humanity history, and indeed beyond. We are 
          probably comfortable with asserting that humans have 
          had technologies since the Palaeolithic, and a menagerie 
          of animals, from crows to chimps, have even been identified as tool users.
        </p>
        <p>
        Technology is one of the keywords of our world, yet 
        it is also one of the most confused. As an analytical
         category it seems necessary for our understanding of
          all of humanity history, and indeed beyond. We are 
          probably comfortable with asserting that humans have 
          had technologies since the Palaeolithic, and a menagerie 
          of animals, from crows to chimps, have even been identified as tool users.
        </p>
      </div>
    </div>
  )
}

export default About
