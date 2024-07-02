import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import payslip from "../../Assets/Projects/payslip.png";
import twilioIntegration from "../../Assets/Projects/twilio.jpg";
import starlento from "../../Assets/Projects/starlento.png";
import appsmith from "../../Assets/Projects/appsmith.png";
import timeBot from "../../Assets/Projects/timebot.png";

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
              imgPath={starlento}
              isBlog={false}
              title="Starlento"
              description="A platform for job finding in the entertainment industry, build with NextJS, ChakraUI, NestJS and MySQL. Provides features such as a user-friendly. Have features which allows user for information uploading, include file uploading, image sharing."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://starlento.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeBot}
              isBlog={false}
              title="TimeBot"
              description="A Slack tool for tracking worked hours, built with Ruby on Rails, Postgres, and the Slack API. Features include real-time logging of work hours, automatic timesheet generation, and seamless integration with Slack for easy tracking and reporting."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twilioIntegration}
              isBlog={false}
              title="Integration with Twilio"
              description="A backend server integrated with Twilio to send SMS for users, built with Node.js and Express. Features include secure user authentication, message scheduling, and real-time delivery status updates, ensuring reliable and efficient communication."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payslip}
              isBlog={false}
              title="Email PDF Files"
              description="A web application for admins to upload Google Sheets and send personalized emails with PDF attachments to each member. Built with NextJS, Firestore Firebase, Postgres, Google Storage, and GCP. Main features include storing PDF files in Google Storage and sending emails with SendGrid."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appsmith}
              isBlog={false}
              title="CMS with Appsmith"
              description="A CMS app built with Appsmith tool (a low-code platform) for efficient data management and process automation. Key features include interactive dashboards and real-time data updates."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
