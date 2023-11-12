import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  CardContainerStyle,
  CardCustom,
  CardsPackagesStyle,
  CardTitleCustom,
  ListGroupItemCustom,
} from "../Packages/Destinations/Destinations.style";

function Favorites({ destinations, onFavoriteDestination }) {
  const favoriteDestinationCard = destinations.map((destination, index) => (
    <CardContainerStyle key={`destination-${index}`}>
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
              <button
                onClick={() =>
                  onFavoriteDestination(destination.id, destination.favourite)
                }
              >
                Add to favourites
              </button>
            ) : (
              <button
                onClick={() =>
                  onFavoriteDestination(destination.id, destination.favourite)
                }
              >
                Remove from favourites
              </button>
            )}
          </ListGroupItemCustom>
        </ListGroup>
        <Card.Body></Card.Body>
      </CardCustom>
    </CardContainerStyle>
  ));
  return (
    <div>
      <div>
        <h2 className="favorite-destinations-header">Favorite Packages</h2>
      </div>
      <div>
        <CardsPackagesStyle>{favoriteDestinationCard}</CardsPackagesStyle>
      </div>
    </div>
  );
}

export default Favorites;
