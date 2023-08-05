import React from "react";
import { Card, CardBody } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, feedback }: FeedbackType) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover mt-4 shadow">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{name}</h5>
              <p className="description mt-3">{feedback}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
