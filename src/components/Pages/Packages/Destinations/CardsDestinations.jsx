import './cardsDestination.css';
import React, { useState } from "react";
import { Alert, Card, Button, Spinner } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import useFetchPackages from "../../../../hooks/useFetchDestinations";
import { CardContainerStyle, CardCustom, CardsPackagesStyle, SearchBarByDestinationFunctionStyle } from "./Destinations.style";
import { useEffect } from "react";
import SearchBar from "./SearchBarByDestination";




const CardsDestinations = () => {
  const { destinations, loading, error, setError } = useFetchPackages();
  const [filtered,setDestinationFiltered] = useState([]);
  useEffect(() =>{
    setDestinationFiltered(destinations)
  },[destinations])
console.log(filtered)
  return (
    <CardsPackagesStyle>
      <Alert show={error} variant="danger">
        <Alert.Heading>My Alert</Alert.Heading>
        <p style={{ width: "300px" }}>Failed to load motos</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setError(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <SearchBarByDestinationFunctionStyle>
      <SearchBar destinations={destinations} setDestinationFiltered={setDestinationFiltered}></SearchBar>
      </SearchBarByDestinationFunctionStyle>

      {filtered &&
        filtered?.map((destinations, index) => (
        <CardContainerStyle>
          <CardCustom key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={destinations.picture} style ={{height: "12rem"}} />
            <Card.Body>
              <Card.Title>{destinations?.city}</Card.Title>
              <Card.Text>
               
               
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Country: {destinations?.country}</ListGroup.Item>
                <ListGroup.Item>Check-in date: {destinations?.checkindate}</ListGroup.Item>
                <ListGroup.Item>Check-out date: {destinations?.checkoutdate}</ListGroup.Item>
                <ListGroup.Item>Length: {destinations?.length} days</ListGroup.Item>
                <ListGroup.Item>Price: {destinations?.price}</ListGroup.Item>
                <ListGroup.Item>Accomodation: {destinations?.accomodation}</ListGroup.Item>
                <ListGroup.Item>Landmark: {destinations?.landmark}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
            </Card.Body>
            
          </CardCustom>
          </CardContainerStyle>
        ))}
    </CardsPackagesStyle>
  );
};

export default CardsDestinations;
