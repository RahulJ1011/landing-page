import React, { useRef } from 'react'
import "./testimonals.css"
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import ITProfessional from "../../assets/ITProfessional.jpg"
import Professional from "../../assets/Professional.jpg"
import Professional1 from "../../assets/Professional1.jpg"

const Testimonals = () => {
    const slider = useRef()
    let tx=0;
    const Forward = ()=>
        {
            if(tx> -50)
                {
                    tx-=25;
                }
                slider.current.style.transform = `translateX(${tx}%)`

        }
        const Backward = ()=>
            {
                if(tx < 0)
                    {
                        tx+=25;
                    }
                    slider.current.style.transform = `translateX(${tx}%)`
                    
            }
  return (
    <div className='testimonals'>
      <IoIosArrowBack style={{
        padding:"10px",
        color:"black"
      }} className='prev-btn' onClick={Backward} />
      <MdNavigateNext className='next-btn' onClick={Forward} />
      <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={ITProfessional} width={65} height={65} />
                            <div>
                                <h3>Adam</h3>
                                <span>Bangalore</span>
                            </div>
                        </div>
                        <p>
                        "Education is the most powerful weapon which you can use to change 
            the world.” —Nelson Mandela. 
            There's no doubt about it: Education is a powerful tool for change.

                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={Professional} width={65} height={65} />
                            <div>
                                <h3>Vijay</h3>
                                <span>Chennai</span>
                            </div>
                        </div>
                        <p>
                        "Education is the most powerful weapon which you can use to change 
            the world.” —Nelson Mandela. 
            There's no doubt about it: Education is a powerful tool for change.

                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={Professional1} width={65} height={65} />
                            <div>
                                <h3>Suriya</h3>
                                <span>Mumbai</span>
                            </div>
                        </div>
                        <p>
                        "Education is the most powerful weapon which you can use to change 
            the world.” —Nelson Mandela. 
            There's no doubt about it: Education is a powerful tool for change.

                        </p>
                    </div>
                </li>

            </ul>
      </div>

    </div>
  )
}

export default Testimonals
