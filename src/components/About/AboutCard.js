import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Huzaifa SSERUGO </span>
            from <span className="purple"> Kampala, Uganda.</span>
            <br /> I am an Electrical Engineer working with Mantrac Uganda; currently deployed in Buliisa 
            working with Total in the Tilenga project; oversseing generators supplying power to the different 
            contractors in the project
            <br />
            When the generators are running smoothly, I use the time to write these codes. I am not a developer or 
            programmer, I just know some few bits of react, django, Git, and most of the basics of programming 
            <br />
            <br />
            Apart from coding, some other activities I do in spare time include!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Arguing with random people on the internet
            </li>
            <li className="about-activity">
              <ImPointRight /> watching documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sserugo_Huzaifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
