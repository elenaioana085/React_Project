import React from "react";
import { CardCustom } from "../Packages/Destinations/Destinations.style";

function DestinationsList({destinations, onFavoritedDestination}) {
    const destionationsArray = destinations.map((destination) => {
        return <CardCustom key={destination.id} destination={destination} onFavoritedDestination={onFavoritedDestination} />
    });
    return(
        <div className="all-cards">
            <ul className="app-container">{destionationsArray}</ul>
        </div>
    );
}

export default DestinationsList;