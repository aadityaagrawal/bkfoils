import React from "react";
import './footer.css';

const Footer = () => (
  <footer
    className="page-footer font-small pt-3"
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-2 text-light">
      © 2024 Copyright:
      <a href="https://bkfoils.com/" style={{textDecoration:"none", color:"white"}}> BKFoils.com</a>
    </div>
  </footer>
);

export default Footer;
