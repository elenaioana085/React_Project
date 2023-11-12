import { useState } from "react";
import React from "react";

import {
  ContainerDestinations,
  ContainerDescriptionSearchBarByDestinations,
  DescriptionDestinations,
  SearchBarByDestinations,
  SearchBarByDestinationsContainer,
  ContainerPackagesByDestinations,
  DescriptionDestinationsItem,
  DescriptionDestinationsItemIcon,
  DescriptionDestinationsItemText,
  SearchBarByDestinationsText,
  SearchBarByDestinationFunctionStyle,
  CardsPackagesStyle,
  ContainerButtonCategoryDetails,
  ContainerDescriptionDestinationsItem,
} from "./Destinations.style";
import { BsAirplaneEngines, BsHouseCheck, BsCamera2 } from "react-icons/bs";
import CardsDestinations from "./CardsDestinations";
import CarouselPackages from "../CarouselPackages/CarouselPackages";
import ButtonCategoryDetails from "./button";

function Destinations({ searchDetails, filtered, setDestinationFiltered }) {
  const cityHardCode = "exemplu";
  const priceHardCode = "pretexemplu";
  return (
    <ContainerDestinations>
      <ContainerDescriptionSearchBarByDestinations>
        <DescriptionDestinations>
          <ContainerDescriptionDestinationsItem>
            <DescriptionDestinationsItem>
              <DescriptionDestinationsItemIcon>
                <BsAirplaneEngines />
              </DescriptionDestinationsItemIcon>
              <DescriptionDestinationsItemText>
                Discover seamless travel with our tailored transport solutions,
                ensuring your journey is comfortable, convenient, and
                unforgettable. For further information regarding partner
                agencies and transport policy, including flight
                cancellation/delay please refer to
              </DescriptionDestinationsItemText>
            </DescriptionDestinationsItem>
            <DescriptionDestinationsItem>
              <DescriptionDestinationsItemIcon>
                <BsHouseCheck />
              </DescriptionDestinationsItemIcon>
              <DescriptionDestinationsItemText>
                Explore exquisite accommodations curated for your perfect stay,
                whether it's luxury, budget, or a cozy retreat. For further
                information regarding partner agencies and accomodation policy,
                including accomodation issues please refer to{" "}
              </DescriptionDestinationsItemText>
            </DescriptionDestinationsItem>
            <DescriptionDestinationsItem>
              <DescriptionDestinationsItemIcon>
                <BsCamera2 />
              </DescriptionDestinationsItemIcon>
              <DescriptionDestinationsItemText>
                Immerse in rich local culture with our expert-curated
                suggestions, ensuring your journey is enriched with authentic
                experiences. Start exploring today!
              </DescriptionDestinationsItemText>
            </DescriptionDestinationsItem>
          </ContainerDescriptionDestinationsItem>

          <ContainerButtonCategoryDetails>
            <ButtonCategoryDetails></ButtonCategoryDetails>
          </ContainerButtonCategoryDetails>
        </DescriptionDestinations>
      </ContainerDescriptionSearchBarByDestinations>

      <ContainerPackagesByDestinations>
        <CardsPackagesStyle>
          <CardsDestinations
            setDestinationFiltered={setDestinationFiltered}
            filtered={filtered}
          ></CardsDestinations>
        </CardsPackagesStyle>
      </ContainerPackagesByDestinations>

      <SearchBarByDestinationsContainer>
        <SearchBarByDestinationsText>
          <h2>Top Vacation Destinations</h2>
          <p>
            Tick one more destination off of your bucket list with one of our
            most popular vacations
          </p>
        </SearchBarByDestinationsText>
      </SearchBarByDestinationsContainer>
      <CarouselPackages />
    </ContainerDestinations>
  );
}

export default Destinations;
