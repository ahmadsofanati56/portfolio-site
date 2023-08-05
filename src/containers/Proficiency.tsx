import Fade from "react-reveal/Fade";
import { Col, Container, Progress, Row } from "reactstrap";
import { SkillBars } from "~/portfolio";
import animationData from "../../public/images/lottie/build.json";
import Lottie from "lottie-react";

export const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg my-28">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1 mb-4">Proficiency</h1>
              {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="mt-3 text-sm font-semibold">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className=" flex justify-end text-sm">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      className="inline-flex"
                      max={"100"}
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <Lottie animationData={animationData} />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};
