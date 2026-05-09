import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDocker, FaLinux } from "react-icons/fa6";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiPycharm,
  SiJupyter,
  SiGithubactions,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
