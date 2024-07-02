import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { DiHeroku } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "20px" }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "20px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{ fontSize: "20px" }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "20px" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHeroku />
        <p style={{ fontSize: "20px" }}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
