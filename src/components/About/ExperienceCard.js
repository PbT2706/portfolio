import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "left" }}>
          <h3 className="project-heading" style={{ textAlign: "left", fontSize: "1.5em" }}>
            <strong className="purple">Zeus Learning</strong>
          </h3>
          <p style={{ fontSize: "1em" }}>
            <strong className="purple">SDE 1</strong> | June 2025 - Current | Mumbai
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developed 40+ end-to-end automation workflows using Playwright (TypeScript) as part of the McGraw-Hill automation team, significantly improving test coverage.
            </li>
            <li className="about-activity">
              <ImPointRight /> Implemented 30+ BDD test scenarios using Playwright with Cucumber (Gherkin), ensuring alignment between business requirements and automated test cases.
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborated with McGraw Hill and Athena Teams to debug flaky tests and enhance the reliability and performance of critical workflows.
            </li>
          </ul>

          <h3 className="project-heading" style={{ textAlign: "left", fontSize: "1.5em", marginTop: "30px" }}>
            <strong className="purple">Thomson Reuters</strong>
          </h3>
          <p style={{ fontSize: "1em" }}>
            <strong className="purple">Technology Intern</strong> | Jan 2025 - May 2025 | Ahmedabad
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Refactored and optimized structure file expressions to enhance clarity, maintainability, and performance.
            </li>
            <li className="about-activity">
              <ImPointRight /> Identified and eliminated redundant PUT API calls, improving schedule load times by 200–250 ms, resulting in faster application responsiveness.
            </li>
            <li className="about-activity">
              <ImPointRight /> Designed new field-to-report mappings and revised existing ones to ensure accurate and consistent data integration across structure files and reports.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
