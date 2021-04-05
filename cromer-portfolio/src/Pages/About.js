import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import image from "../img/aboutMe_pic.jpg";
import WelcomeImage from "../img/index_bkg.jpg";
import "./style.css";

function About() {
  return (
    <Container>
    <div>
      <div className="container-fluid" id="home">
        <div>
            <img src={WelcomeImage} id="bgimg-1" className="img-fluid" style={{maxHeight: '605px', maxWidth: 'auto'}}></img>
            <span className=" position-relative align-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">WELCOME</span>      
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="about" style={{color: "white"}}>
            <h1 className= "w3-center">ABOUT ME</h1>
            <p className="w3-center"><em>Hi! My name is Ronnie Cromer</em></p>
              <p>I'm currently a junior developer <em>and</em> a junior at Michigan State University. I'm currently studying Computer Science in addition to a Coding Bootcamp which I'm set to graduate March 2021.
                  Despite me being on the road to become a super senior due to a few major changes, I feel right at home when spending 12 hours confused on the same block of code. 
                  The other 12 hours I spend either sleeping or creating music as that is a huge passion of mine. I've been playing guitar since I was 12 and got into producing about a year later, I've been playing ever since. 
                  Below you can find the links to my social media where I post most of my music, as well as my resume and LinkedIn profile.</p>       
        <div className="w3-row" >
        <div className="w3-col m6 w3-center w3-padding-large">
            <p><b><i className="fa fa-user w3-margin-right"></i>Here's me!</b></p>
            <img src={image} className="w3-round w3-image" alt="Photo of Me" width="500" height="333" />
        </div>
        <div className="w3-col m6 w3-hide-small w3-padding-large">
        <p>Coding is something that I once thought impossible to learn, but through trial and error I found that anything is possible.
          For me, I had to find something about coding that would make me eager to learning more, and I think I can fianally say I've found my niche.
          I may not be able to draw but I like to make things look pretty, and that's when I fell in love with front-end development. 
          It's because of that nefound eagerness that CSS, HTML, and JavaScript quickly became some of my top computing languages.
        With still so much to learn I couldn't be more excited!</p>
      </div>
        </div>

    <div style={{color: "white"}}>
          <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
      <p className="w3-wide"><i className="fa fa-music"></i>Producing/Mixing</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{maxWidth:"90%"}}>90%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-laptop"></i>Front-End Web Development</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{maxWidth:"80%"}}>80%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-edit"></i>Video-Editing</p>
      <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{maxWidth:"75%"}}>75%</div>
      </div>
      </div>
    </div>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16">
        <div className="w3-row w3-section">
          <span className="w3-xlarge">RESUME</span>
          <p>Available for view or download <a href="/pdf/Ronnie Cromer III - Resume (2020).pdf" target="_blank">here</a></p>
        </div>
      </div>
    <Footer />
   </div>
   </Container>
    
  );
}

export default About;
