import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import {useState} from 'react';
import "./style.css";

import image from "../img/portfolio_bkg.jpg";
import burgerAppImg from "../img/burgerApp.gif";
import HappyPawsImg from "../img/HappyPaws.gif"

// import { Link } from "react-router-dom";

function Portfolio() {
    const [state, setState] = useState(false);
    let url=[
                    "https://github.com/rcromer00/Workday-Planner",
                    "https://github.com/alysonbennett/Weather-Jams",
                    "https://github.com/rcromer00/NodeExpressBurgerApp",
                    "https://github.com/alysonbennett/Project_2"
                ]
    return (
      <Container>
          <div>
                <div className="container-fluid">
                    <img src={image}></img>
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">PORTFOLIO</span>
                </div>

            <div className="container-fluid">
                <div className="w3-center">
                    <h3>MY WORK</h3>
                </div>
                <p className="w3-center"><em>Take a look at some of my latest work.</em></p>
                <p className="w3-center"><em>Click on the images to view the github repository</em></p>
            </div>
            
            <div className="row">
                    <a href={url[0]} target="_blank"><img src="https://i.imgur.com/ChqPztJ.gif" onclick="onClick(this)" class="zoom" title="Workday Planner"/></a>
                    <a href={url[1]} target="_blank"><img src="https://i.imgur.com/HqhUrLH.gif" onclick="onClick(this)" class="zoom" title="WeatherJams"/></a>
                    <a href={url[2]} target="_blank"><img src={burgerAppImg} onclick="onClick(this)" class="zoom" title="Burger App"/></a>
                    <a href={url[3]} target="_blank"><img src={HappyPawsImg} onclick="onClick(this)" class="zoom" title="Happy Paws"/></a>
            </div>

            <Footer />
          </div>
      </Container>

    )
}

export default Portfolio;