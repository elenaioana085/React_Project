import { useState } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./cardsPackages.css";


function CardsPackages ({city,price}) {
    return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Country:</ListGroup.Item>
                <ListGroup.Item>Check-in date:{}</ListGroup.Item>
                <ListGroup.Item>Check-out date:{}</ListGroup.Item>
                <ListGroup.Item>Length:{}</ListGroup.Item>
                <ListGroup.Item>Price:{}</ListGroup.Item>
                <ListGroup.Item>Accomodation:{}</ListGroup.Item>
                <ListGroup.Item>Landmark:{}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
        
    );
}

export default CardsPackages;