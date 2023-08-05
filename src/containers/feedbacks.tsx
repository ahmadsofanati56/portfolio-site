import { VscStarFull } from "react-icons/vsc";
import { Col, Row, Container } from "reactstrap";
import FeedbackCard from "~/components/FeedBackCard";
import { feedbacks } from "~/portfolio";

export const Feedbacks = () => {
  return (
    feedbacks && (
      <section className="section section-lg my-20">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className=" avatar mr-5 h-16">
                <div className=" d-flex flex-col items-center justify-center rounded-full bg-white shadow">
                  <VscStarFull className="h-11 w-11 " color="lightblue" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-4xl text-info">Our Clients Feedback</h4>
            </div>
          </div>
          <Row className="row-gid align-items-center">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );
};
