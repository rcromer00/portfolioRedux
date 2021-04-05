import React from 'react';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import image from "../img/contact_bkg.jpg";
import "./style.css";

function Contact() {
    return (
    <Container>
        <div>
            <div className="container-fluid" id="home">
                <div>
                    <img src={image} className="img-fluid" style={{maxHeight: "1000px"}}></img>
                    <span className="position-relative align-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">CONTACT</span>      
                </div>
            </div>

            <div className="container-fluid position-relative w3-content w3-padding-64" id="contact" style={{color: "white"}}>
                <h3 className="w3-center">REACH OUT</h3>
                <p className="w3-center"><em>I'd love your feedback!</em></p>
  
    <div className="w3-row w3-padding-32 w3-section">
      <div className="w3-col m4 w3-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94352.5492299772!2d-83.16924487451243!3d42.352816549904674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1610735958458!5m2!1sen!2sus" className="position-relative w3-round" width="100%" height="500" frameborder="0" style={{border: 0}} aria-hidden="false" tabindex="0"></iframe>
      </div>
    <div class="w3-col m8 w3-panel">
        <div class="w3-large w3-margin-bottom">
          <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Detroit, US<br></br>
          <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: (248) 224-3719<br></br>
          <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: ron.beats20@gmail.com<br></br>
        </div>
        <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
        <form action="/action_page.php" target="_blank">
          <div   className="w3-row-padding" style={{margin:"0 -16px 8px -16px"}}>
            <div className="w3-half">
              <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
            </div>
            <div className="w3-half">
              <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
            </div>
          </div>
          <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
          <button className="w3-button w3-black w3-right w3-section" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
    </form>
    </div> 
    </div>
  </div>
            {/* <Container>
            <Row className="w3-row w3-padding-32 w3-section">
                <Container className="w3-col m4 w3-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94352.5492299772!2d-83.16924487451243!3d42.352816549904674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1610735958458!5m2!1sen!2sus"  class="w3-round" width="100%" height="500" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Container>
            </Row>
            </Container> */}


        <Footer />
    </div>
    </Container>
       
    )
}

export default Contact;