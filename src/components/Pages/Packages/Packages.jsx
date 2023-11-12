import { useState } from "react";
import React from "react";

import Destinations from "./Destinations/Destinations";
import Reviews from "./Reviews/Reviews";
import CardReviews from "./Reviews/cardsReviews/cardsReviewsONE";
import FilterCards from "./FilterCards/FilterCards";

function Packages({ searchDetails }) {
  const [filtered, setDestinationFiltered] = useState([]);
  return (
    <section className="sectionPackages">
      <div className="containerPackagesPageMain">
        <FilterCards
          setDestinationFiltered={setDestinationFiltered}
        ></FilterCards>

        <Destinations
          searchDetails={searchDetails}
          setDestinationFiltered={setDestinationFiltered}
          filtered={filtered}
        ></Destinations>
        <Reviews>
          <CardReviews></CardReviews>
        </Reviews>
      </div>
    </section>
  );
}

export default Packages;
