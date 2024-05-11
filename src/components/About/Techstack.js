import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { DiJavascript1, DiReact } from "react-icons/di";
import { MdHtml, MdCss } from "react-icons/md";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdHtml />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVite />
      </Col>
    </Row>
  );
}

export default Techstack;
