import React from 'react'
import wk from "../../assets/wk.jpg"
import ITwk from "../../assets/ITwk.jpg"
import WKK from "../../assets/WKK.jpg"
import "./campus.css"
import { FaArrowDown } from 'react-icons/fa'
const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={wk} />
        <img src={ITwk} />
        <img src={WKK} />
      </div>
      <button className='btn dark-btn'>
        Know more
        <FaArrowDown />
      </button>
    </div>
  )
}

export default Campus
