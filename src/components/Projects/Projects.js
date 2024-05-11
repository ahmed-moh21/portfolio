import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CRUDS"
              description="That is CRUDS operations give you multy of functions such as Read data and insert new product and search and delete one item and delete all of item and save data in tables using Local Storage etc... "
              ghLink=" https://ahmed-moh21.github.io/Crud-JS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" guess-word-game"
              description="This web program is a simple test for some basic concepts in programming. It consists of giving you a random question in any language or framework, and you guess the correct answer.."
              ghLink="https://ahmed-moh21.github.io/guess-word/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shoes-Store"
              description="It is an online shoe store that displays many products, and you can view each product separately, and when you make the appropriate choice for you, you go to the store page and pay online."
              ghLink="https://ahmed-moh21.github.io/Shoes-Store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="QuranWeb"
              description="It is a website for the best thing that exists in this life, which is the Holy Qur’an, where you can choose whether you want to listen or read. There is a section for some prophetic hadiths, religious lectures, prayer times, some animal stories in the Qur’an, and some stories of the prophets."
              ghLink="https://ahmed-moh21.github.io/quranWeb/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description={`It is an electronic sales outlet for many products, but its main goal is to present the concepts of the React Redux Toolkit, and it does not have any CSS formatting in the introduction.`}
              ghLink="https://github.com/ahmed-moh21/redux-crud-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="React-Quiz"
              description="This web program is a simple test of some basic concepts in programming. It consists of giving you a random question in any language or framework. He gives you many choices, and you choose the correct answer from among them. This situation continues for many times until the questions are finished, and in the end, he gives you the final grade."
              ghLink="https://ahmed-moh21.github.io/React-Quiz/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
