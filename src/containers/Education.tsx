import { VscBook } from "react-icons/vsc";
import { Col, Container, Row } from "reactstrap";
import EducationCard from "~/components/educationCard";
import { educationInfo } from "~/portfolio";

export const Education = () => {
  return (
    educationInfo && (
      <section className="section  my-5 bg-gradient-to-r  from-cyan-500 to-blue-500 pb-0">
        <Container>
          <div className="d-flex  px-3">
            <div className=" avatar mt-10 h-16 w-16 ">
              <div className=" d-flex flex-col items-center justify-center rounded-full bg-white shadow">
                <VscBook className="h-12 w-12 " color="lightblue" />
              </div>
            </div>
            <div className=" mt-12 pl-4 ">
              <h1 className="text-5xl text-white drop-shadow-md">Education</h1>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {educationInfo.map((info) => {
              return (
                <Col className="order-lg-1" lg="6" key={info.schoolName}>
                  <EducationCard {...info} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};
