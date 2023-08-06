import { VscGithub } from "react-icons/vsc";
import { Button, Card, CardBody, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "~/types/sections";

export const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover mt-4 bg-red-500 shadow">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                {github ? (
                  <a href={github} target="_blank">
                    {" "}
                    <button className="btn btn-circle bg-black">
                      <div className="d-flex justify-center ">
                        <VscGithub className=" fill-white " />
                      </div>
                    </button>
                  </a>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};
