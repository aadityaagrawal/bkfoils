import React from 'react'
import NavigationBar from "../../Components/Navigation_Bar/nav_bar"
import './frontpage.css'
import text from '../../Utilities/Constants/text_constants'


function FrontPage() {
  return (
    <div className='container-fluid p-0 frontPage'>
        <NavigationBar />
        <div className='container fs-1 frontHeading col-lg-6 col-md-8'>
            {text.heading}
        </div>
    </div>

  )
}

export default FrontPage