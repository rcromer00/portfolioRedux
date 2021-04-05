import React from 'react';
import "./style.css";


function Footer() {
    return (
        <footer className=" w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off" id="footer">
  <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div className="w3-xlarge w3-section">
    <a href="https://www.facebook.com/ronnie.cromer.92" target="_blank"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
    <a href="https://www.instagram.com/ron.beats/" target="_blank"><i className="fa fa-instagram w3-hover-opacity"></i></a>
   <a href="https://www.linkedin.com/in/ronnie-cromer-380211197/" target="_blank"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
  </div>
</footer>
    )
}

export default Footer;