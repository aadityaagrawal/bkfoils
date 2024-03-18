import React from 'react'
import Plate from "../../Utilities/Images/Plate.png";
import HorizontalBrake from "../../Components/break";
import './aboutpage.css'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import text from '../../Utilities/Constants/text_constants';


function AboutUs() {
  

  return (
    <div>
        <div className="container-fluid m-0 p-0 d-flex">
        <img src={Plate} className="plateImage" alt="plate"></img>

        <div className="container-fluid p-4">
          <p className="fs-1 title">
            {text.heading1}
          </p>
          <HorizontalBrake />
          <p className="fs-5 content">
            {text.aboutus}
          </p>
          <p className="fs-1 title">
          {text.heading2}
          </p>
          <HorizontalBrake />

          <div className='d-flex fs-5 align-items-center py-2 content'>
            <div className='d-flex' style={{paddingRight:"16px"}}>
            <IoCall className='icon'size={text.iconSize}/>
            {text.mobile1}
            </div>
            
            <div className='d-flex' >
            <IoCall className='icon' size={text.iconSize}/>
            {text.mobile2} 
            </div>
          
          </div>

          <div className='d-flex fs-5 align-items-center py-2 content'>
          <MdEmail className='icon' size={text.iconSize}/> 
          {text.email}
          </div>

          <div className='d-flex fs-5 align-items-center py-2 content'>
          <FaLocationDot className='icon' size={text.iconSize}/>
          {text.address}

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs