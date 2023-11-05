import "./cardsDestination.css";
import React, { useState } from "react";
import { Alert, Card, Button, Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import useFetchPackages from "../../../../hooks/useFetchDestinations";
import {
  CardContainerStyle,
  CardCustom,
  CardTitleCustom,
  CardsPackagesStyle,
  ListGroupItemCustom,
  SearchBarByDestinationFunctionStyle,
} from "./Destinations.style";
import { useEffect } from "react";
import SearchBar from "./SearchBarByDestination";

const CardsDestinations = () => {
  const { destinations, loading, error, setError } = useFetchPackages();
  const [filtered, setDestinationFiltered] = useState([]);
  useEffect(() => {
    setDestinationFiltered(destinations);
  }, [destinations]);
  return (
    <>
      <SearchBarByDestinationFunctionStyle>
        <SearchBar
          destinations={destinations}
          setDestinationFiltered={setDestinationFiltered}
        ></SearchBar>
      </SearchBarByDestinationFunctionStyle>
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
      <CardsPackagesStyle>
        {filtered &&
          filtered?.map((destinations, index) => (
            <CardContainerStyle>
              <CardCustom key={index} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={destinations.picture}
                  style={{ height: "12rem" }}
                />
                <Card.Body>
                  <CardTitleCustom>{destinations?.city}</CardTitleCustom>
                  <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItemCustom>
                    Country: {destinations?.country}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Check-in date: {destinations?.checkindate}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Check-out date: {destinations?.checkoutdate}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Length: {destinations?.length} days
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Price: {destinations?.price}€
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Accomodation: {destinations?.accomodation}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Landmark: {destinations?.landmark}
                  </ListGroupItemCustom>
                </ListGroup>
                <Card.Body></Card.Body>
              </CardCustom>
            </CardContainerStyle>
          ))}
      </CardsPackagesStyle>
    </>
  );
};

export default CardsDestinations;
