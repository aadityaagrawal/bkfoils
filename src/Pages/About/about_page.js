import React from 'react'
import Plate from "../../Utilities/Images/Plate.png";
import HorizontalBrake from "../../Components/break";

function AboutUs() {
  return (
    <div>
        <div className="container-fluid m-0 p-0 d-flex">
        <img src={Plate} className="plateImage" alt="plate"></img>

        <div className="container p-5">
          <p className="fs-1" style={{ color: "#008080" }}>
            About Us
          </p>
          <HorizontalBrake />
          <p className="fs-5" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur. Vitae nibh ultrices turpis
            ullamcorper et ornare sem massa fringilla. Ac pharetra cras accumsan
            cras posuere facilisis ut. Mi orci enim dignissim odio. Pharetra
            elementum rhoncus iaculis interdum euismod non sagittis ipsum amet.
            Turpis arcu id ac parturient dictum imperdiet vitae tincidunt. Et
            lectus dignissim ornare placerat penatibus convallis mattis
            ullamcorper sed. Et tristique et augue commodo eget sem viverra mi.
            Ultrices blandit ut eget donec enim enim id sed nunc. Pretium
            pharetra vitae malesuada pellentesque fermentum. Est sed ante quis
            dignissim dictum. Viverra lectus ut nunc sagittis facilisi. Ut est
            ac nulla eu eget tortor. Arcu fermentum leo parturient justo justo
            fusce non mauris arcu. Arcu quis sed venenatis varius est nunc.
          </p>
          <p className="fs-1" style={{ color: "#008080" }}>
            Contact Us
          </p>
          <HorizontalBrake />
          <p className="fs-5" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur. Vitae nibh ultrices turpis
            ullamcorper et ornare sem massa fringilla. Ac pharetra cras accumsan
            cras posuere facilisis ut. Mi orci enim dignissim odio. Pharetra
            elementum rhoncus iaculis interdum euismod non sagittis ipsum amet.
            Turpis arcu id ac parturient dictum imperdiet vitae tincidunt. Et
            lectus dignissim ornare placerat penatibus convallis mattis
            ullamcorper sed. Et tristique et augue commodo eget sem viverra mi.
            Ultrices blandit ut eget donec enim enim id sed nunc. Pretium
            pharetra vitae malesuada pellentesque fermentum. Est sed ante quis
            dignissim dictum. Viverra lectus ut nunc sagittis facilisi. Ut est
            ac nulla eu eget tortor. Arcu fermentum leo parturient justo justo
            fusce non mauris arcu. Arcu quis sed venenatis varius est nunc.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs