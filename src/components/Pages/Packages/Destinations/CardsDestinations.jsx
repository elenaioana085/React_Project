import React, { useState } from "react";
import { Alert, Card, Button, Spinner, Toast } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import useFetchPackages from "../../../../hooks/useFetchDestinations";
import {
  CardContainerStyle,
  CardCustom,
  CardTitleCustom,
  CardsPackagesStyle,
  ListGroupItemCustom,
} from "./Destinations.style";
import { useEffect } from "react";

function changeBackground(e) {
  e.target.style.background = 'blue';
  e.target.style.color = 'white';
}
  function returnBackgroundToNormal(e){
    e.target.style.background = null;
    e.target.style.color = 'black';

  }

const CardsDestinations = ({
  filtered,
  setDestinationFiltered
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

  const [showA, setShow] = useState(false)
  const toggleShowA = () => setShow(!showA)

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
                    <Button variant="outline-dark"  onMouseOver={changeBackground} onMouseOut={returnBackgroundToNormal} style={{fontWeight:900}}
                      onClick={() =>{
                        handleFavouriteChange(
                          destination.id,
                          destination.favourite
                        ); toggleShowA()}
                      }
                      
                    >
                      {!destination.favourite
                        ? "Add to favourites"
                        : "Remove from favourites"}
                        
                      
                    </Button>
                   
                  </ListGroupItemCustom>
                </ListGroup>
                <Card.Body></Card.Body>
              </CardCustom>
            </CardContainerStyle>
          ))}
      </CardsPackagesStyle>
      <Toast style={{position:"fixed",top:"10px",right:"100px"}} show={showA} onClose={toggleShowA} autohide delay={3000}>
               <Toast.Header>
                 <img
                   src="holder.js/20x20?text=%20"
                   className="rounded me-2"
                   alt=""
                 />
                 <strong className="me-auto">Tripfind</strong>
                 <small></small>
               </Toast.Header>
               <Toast.Body>Hello! Your chosen package has been added to favourites.</Toast.Body>
             </Toast>
    </>
  );
};

export default CardsDestinations;
