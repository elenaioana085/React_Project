import React from "react";
import useFetchFavourite from "../../../hooks/useFetchFavourite";
import Favorites from "./Favorites";
import { Spinner } from "react-bootstrap";
import { ContainerPageText, ContainerUserPage, PageDescription, PageDescriptionParagraph, PageTitle } from "./User.style";
import { BsBagHeartFill } from "react-icons/bs";
import ButtonHomePage from "../Home/ButtonHomePage/ButtonHomePage";

function User() {
  const { destinations, loading, error, setError } = useFetchFavourite();

  const handleFavouriteChange = (id, favourite) => {
    fetch(`http://localhost:3002/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favourite: !favourite }),
    })
      .then((response) => response.json())
      .then((updatedDestination) => console.log(updatedDestination));
  };

  
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {destinations && destinations.length > 0 ? (
        <Favorites
          destinations={destinations}
          onFavoriteDestination={handleFavouriteChange}
        ></Favorites>
      ):(
        <ContainerUserPage> 
          <ContainerPageText>
            <PageTitle>No Favourite Packages Selected</PageTitle>
            <PageDescription>
            <BsBagHeartFill style={{fontSize:"80px"}} />
          <PageDescriptionParagraph>You have not selected any favourite packages. Please see the packages page to view our offers.</PageDescriptionParagraph>
          
            </PageDescription>
            <ButtonHomePage style={{weight:"900"}}></ButtonHomePage>
          </ContainerPageText>
          
          </ContainerUserPage>
      )}
    </>
  );
}

export default User;
