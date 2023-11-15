import { useState } from "react";
import React from "react";
import { Button, Card, Container, ListGroup, Toast } from "react-bootstrap";
import { BsBagHeartFill } from "react-icons/bs";
import {
  CardContainerStyle,
  CardCustom,
  CardsPackagesStyle,
  CardTitleCustom,
  ListGroupItemCustom,
} from "../Packages/Destinations/Destinations.style";
import {
  CardContainerStyleUserPage,
  CardsPackagesContainer,
  CardsPackagesStyleUserPage,
  ContainerPageText,
  ContainerUserPage,
  PageDescription,
  PageDescriptionParagraph,
  PageTitle,
} from "./User.style";

function Favorites({ destinations, onFavoriteDestination }) {
  function changeBackground(e) {
    e.target.style.background = "blue";
    e.target.style.color = "white";
  }
  function returnBackgroundToNormal(e) {
    e.target.style.background = null;
    e.target.style.color = "black";
  }

  const [showA, setShow] = useState(false);
  const toggleShowA = () => setShow(!showA);
  const favoriteDestinationCard = destinations.map((destination, index) => (
    <CardContainerStyleUserPage key={`destination-${index}`}>
      <CardCustom>
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
            {!destination.favourite ? (
              <Button
                variant="outline-dark"
                onMouseOver={changeBackground}
                onMouseOut={returnBackgroundToNormal}
                style={{ fontWeight: 900 }}
                onClick={() => {
                  onFavoriteDestination(destination.id, destination.favourite);
                  toggleShowA();
                }}
              >
                Add to favourites
              </Button>
            ) : (
              <Button
                onClick={() => {
                  onFavoriteDestination(destination.id, destination.favourite);
                  toggleShowA();
                }}
              >
                Remove from favourites
              </Button>
            )}
          </ListGroupItemCustom>
        </ListGroup>
        <Card.Body></Card.Body>
      </CardCustom>
    </CardContainerStyleUserPage>
  ));
  return (
    <ContainerUserPage>
      <ContainerPageText>
        <PageTitle>Favourite Packages</PageTitle>
        <PageDescription>
          <BsBagHeartFill style={{ fontSize: "100px" }} />
          <PageDescriptionParagraph>
            Thank you for choosing our travel offers! Explore your favorite
            packages on this page. We're thrilled to make your journey
            unforgettable!
          </PageDescriptionParagraph>
        </PageDescription>
      </ContainerPageText>
      <CardsPackagesContainer>
        <CardsPackagesStyleUserPage>
          {favoriteDestinationCard}
        </CardsPackagesStyleUserPage>
        <Toast
          style={{ position: "fixed", top: "10px", right: "100px" }}
          show={showA}
          onClose={toggleShowA}
          autohide
          delay={3000}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Tripfind</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>
            Hello! Your package has been removed from favourites.
          </Toast.Body>
        </Toast>
      </CardsPackagesContainer>
    </ContainerUserPage>
  );
}

export default Favorites;
