import React from 'react'
import './Program.css'
import machinelearning    from "../../assets/machinelearning.jpeg"
import download from "../../assets/download.jpg"
import images from "../../assets/images.png"
import mtechstack from "../../assets/mtechstack.png"
import btechstack from "../../assets/btechstack.png"
import wtechstack from "../../assets/wtechstack.png"

const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={machinelearning} width={200} height={200} />
        <div className='caption'>
            <img src={mtechstack} width={50} height={50} style={{
                borderRadius:"20px"
            }} />
            <p>machinelearning</p>
        </div>
      </div>
      <div className='program'>
        <img src={download} width={200} height={200} />
        <div className='caption'>
            <img src={btechstack} width={50} height={50}
            style={{
                borderRadius:"20px"
            }} />
            <p>Blockchain</p>
        </div>
      </div>
      <div className='program'>
        <img src={images} height={200} width={200} />
        <div className='caption'>
            <img src={wtechstack} height={50} width={50}
            style={{
                borderRadius:"20px"
            }}
            />
            <p>Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default Program
