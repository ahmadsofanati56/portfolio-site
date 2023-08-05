import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import { ProjectsCard } from "~/components/ProjectsCard";
import { BsLaptop } from "react-icons/bs";

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg my-4">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white rounded-circle text-info shadow">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div>
              <div className=" avatar mr-5 h-16">
                <div className=" d-flex flex-col items-center justify-center rounded-full bg-white shadow">
                  <BsLaptop className="h-10 w-10 " color="lightblue" />
                </div>
              </div>
            </div>
            <div className="pl-4">
              <h4 className="text-4xl text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Projects;
