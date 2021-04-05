import React from "react";
import Container from "../Container";
import Col from "../Col";

{/* <Col size="w3-col m6 w3-hide-small w3-padding-large"> */}
function Bio(){
    return (
        <Container>
    <Col size="md-6 mx-auto">
      <p>Coding is something that I once thought impossible to learn, but through trial and error I found that anything is possible.
        For me, I had to find something Bio coding that would make me eager to learning more, and I think I can fianally say I've found my niche.
        I may not be able to draw but I like to make things look pretty, and that's when I fell in love with front-end development. 
        It's because of that nefound eagerness that CSS, HTML, and JavaScript quickly became some of my top computing languages.
      With still so much to learn I couldn't be more excited!</p>
    </Col>
  <p class="w3-large w3-center w3-padding-16">Im really good at:</p>
  <p class="w3-wide"><i class="fa fa-music"></i>Producing/Mixing</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center">90%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-laptop"></i>Front-End Web Development</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center">80%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-edit"></i>Video-Editing</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center">75%</div>
  </div>
<Col size ="w3-row w3-center w3-dark-grey w3-padding-16">
  <div class="w3-row w3-section">
    <span class="w3-xlarge">RESUME</span>
    <p>Available for view or download <a href="/pdf/Ronnie Cromer III - Resume (2020).pdf" target="_blank">here</a></p>
  </div>
  
</Col>
</Container>
    )
}

export default Bio;