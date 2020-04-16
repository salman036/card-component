import React from "react";
import { Card } from "react-bootstrap";

import pin from "../../images/pin.png";

import "./style.css";

const CardComponent = ({ data }) => {
  return (
    <Card className="mb-3 mt-4 card__parent">
      <span className="card__status">Heading</span>
      <img src={pin} className="card__location" alt="location" />
      <Card.Img variant="top" src={data.image} className="card__image"/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <div className="card__loc__icon">
          <img src={pin} alt="location" className="card__text__location"/>
          <Card.Text className="card__address">{data.location}</Card.Text>
        </div>
        <Card.Text className="card__code">{data.code}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
