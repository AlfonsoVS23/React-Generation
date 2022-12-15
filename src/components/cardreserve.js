import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardReserve() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Club de basquet Los Romos.</Card.Text>
        <Button variant="primary">Reserva Aqui</Button>
      </Card.Body>
    </Card>
  );
}

export default CardReserve;
