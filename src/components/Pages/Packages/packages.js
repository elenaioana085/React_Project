import { useState } from "react";
import React from 'react';
import './packages.css';
import CarouselPackages from "../../../functionalities/carouselPackages/carouselPackages";
import Destinations from "./Destinations/Destinations";
import Reviews from "./Reviews/reviews";
import CardReviews from "./Reviews/cardsReviews/cardsReviewsONE";

function Packages ({searchDetails}) {

    return (
        <section className="sectionPackages">
            {JSON.stringify(searchDetails)}
            <div className="containerPackagesPageMain">
                <CarouselPackages></CarouselPackages>
                <Destinations></Destinations>
                <Reviews>
                    <CardReviews></CardReviews>
                </Reviews>

            </div>

        </section>
    );
}

export default Packages;