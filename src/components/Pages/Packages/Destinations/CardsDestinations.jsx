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
import { handleFavor } from "../../../../hooks/handleFavor";
import useFetchPackagesByUser from "../../../../hooks/handleFavouriteDestinationsTEST";

const CardsDestinations = ({
  searchDetails,
  filtered,
  setDestinationFiltered,
  destination,
  onFavoritedDestination,
}) => {
  const { destinations, loading, error, setError } = useFetchPackages();

  //PATCH request function
  const handleFavouriteChange = (id, favourite) => {
    fetch(`http://localhost:3002/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favourite: !favourite }),
    })
      .then((response) => response.json())
      .then((updatedDestination) =>
        console.log("updated dest ", updatedDestination)
      );
  };

  useEffect(() => {
    setDestinationFiltered(destinations);
  }, [destinations]);

  return (
    <>
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
          filtered?.map((destination, index) => (
            <CardContainerStyle key={`destination-${index}`}>
              <CardCustom key={index} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={destination.picture}
                  style={{ height: "12rem" }}
                />
                <Card.Body>
                  <CardTitleCustom>{destination?.city}</CardTitleCustom>
                  <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItemCustom>
                    Country: {destination?.country}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Check-in date: {destination?.chekindate}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Check-out date: {destination?.chekoutdate}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Length: {destination?.length} days
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Price: {destination?.price}€
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Accomodation: {destination?.accomodation}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    Landmark: {destination?.landmark}
                  </ListGroupItemCustom>
                  <ListGroupItemCustom>
                    <button
                      onClick={() =>
                        handleFavouriteChange(
                          destination.id,
                          destination.favourite
                        )
                      }
                    >
                      {!destination.favourite
                        ? "Add to favourites"
                        : "Remove from favourites"}
                    </button>
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
