import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "~/portfolio";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import animationData from "../../public/images/lottie/skills/fullstack.json";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
export default function Skills() {
  return (
    // <div>
    //   <div className="flex justify-center text-center">
    //     <h1 className="text-center text-3xl ">WHAT I DO</h1>
    //   </div>
    //   <div className="mt-6 flex justify-center text-center">
    //     <p className="text-xl">{skillsSection.subTitle}</p>
    //   </div>

    //   <div className="container mx-24 flex  flex-row md:w-3/4">
    //     <div className="biasis-1/2 "></div>
    //     <Fade left duration={2000}>
    //       <div className="max-w-md">
    //         <Lottie animationData={animationData}></Lottie>
    //       </div>
    //     </Fade>
    //     <Fade right duration={2000}>
    //       <div className="biasis-1/2 d-flex   mt-10 flex-wrap bg-red-500 text-center sm:text-left md:w-full">
    //         <h1 className="text-center text-3xl">Full Stack Devlopement</h1>
    //         <p className="text-center text-2xl">
    //           asfsaf saf saf saf sa fsa fsa
    //         </p>
    //       </div>
    //     </Fade>
    //   </div>
    // </div>

    <Container className=" text-center">
      <h1 className="mb-6 mt-10 text-4xl font-bold">{skillsSection.title}</h1>
      <p className="text-xl">{skillsSection.subTitle} </p>
      <Row
        className="flex justify-center
      "
      >
        <Col lg="5" className="order-lg-1 order-2  ">
          <Fade left duration={2000}>
            <div className="max-w-lg">
              <Lottie animationData={animationData}></Lottie>
            </div>
          </Fade>
        </Col>
        <Col lg="4" className="order-lg-2 order-1  p-12">
          <Fade right duration={2000}>
            <h1 className="text-center text-3xl">Full Stack Devlopement</h1>
            <div className="justify-content-center d-flex my-4  mb-4 flex-wrap">
              {skillsSection.data.softwareSkills.map((skill, i) => {
                return (
                  <Fragment key={i}>
                    <div
                      className="icon icon-lg icon-shape rounded-circle m-1 shadow-sm"
                      id={skill.skillName.replace(/\s/g, "")}
                    >
                      <Icon
                        icon={skill.iconifyTag}
                        data-inline="false"
                        height={45}
                      ></Icon>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName.replace(/\s/g, "")}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            <div>
              {skillsSection.data.skills.map((skill, i) => {
                return <p key={i}>{skill}</p>;
              })}
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}
