import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sn from "../../Assets/Projects/studynotion.png";
import mu from "../../Assets/Projects/meetup.png";
import qr from "../../Assets/Projects/quickread.png";
import qc from "../../Assets/Projects/quickchat.png";
import pc from "../../Assets/Projects/proconnect.png";
import fb from "../../Assets/Projects/flappybird.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>Here are some of my main projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sn}
              isBlog={false}
              title="Study Notion"
              description="StudyNotion is a fully functional ed-tech platform that enables students to consume and rate as well as enables to teachers to create educational content. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node."
              ghLink="https://github.com/PbT2706/StudyNotion"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pc}
              isBlog={false}
              title="ProConnect"
              description="ProConnect is a professional social networking platform built using the MERN stack, enabling users to post achievements, engage with others' content, search for and connect with professionals, and foster meaningful collaborations and networking opportunities. "
              ghLink="https://github.com/PbT2706/ProConnect"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mu}
              isBlog={false}
              title="Meet Up"
              description="Meetup is a video conferencing application built with React and TypeScript, leveraging Firebase for backend services and the Zegocloud API for real-time video conferences and interactive sessions, offering seamless virtual meeting experiences similar to Zoom."
              ghLink="https://github.com/PbT2706/meetup"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qc}
              isBlog={false}
              title="Quick Chat"
              description="Quick Chat, a MERN Stack-based application with Socket.IO integration, facilitates real-time messaging and emoji sharing between users, offering an engaging and interactive platform for communication."
              ghLink="https://github.com/PbT2706/QUICK-CHAT"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="Quick Read"
              description="Quick Read is a responsive news aggregator built with HTML, CSS, and JavaScript, integrating NewsAPI for real-time updates. It offers an intuitive interface with featured news, categories, search functionality."
              ghLink="https://github.com/PbT2706/QUICK-READ"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Flappy Bird"
              description="Flappy Bird, recreated in Python using the Pygame library, is an engaging game where players navigate a bird through obstacles by tapping keys, offering a fun and challenging gaming experience reminiscent of the classic mobile game."
              ghLink="https://github.com/PbT2706/flappy-bird-game"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
