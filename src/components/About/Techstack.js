import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { SiNextdotjs, SiFirebase, SiPostgresql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "20px" }}>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "20px" }}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "20px" }}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "20px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p style={{ fontSize: "20px" }}>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "20px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "20px" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "20px" }}>PostgreSQL</p>
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "20px" }}>MySQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;
